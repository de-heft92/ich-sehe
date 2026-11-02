/* scrollbar – Offline-Speicher für den Aufruf über einen Link (z. B. GitHub Pages)

   Wozu? iPhone und iPad starten keine HTML-Datei aus der Dateien-App. Über den Link geht es – und mit dieser Datei
   legt der Browser das Werkzeug beim ersten Öffnen auf dem Gerät ab. Danach startet es von dort, auch ohne Internet
   (am besten über „Teilen“ → „Zum Home-Bildschirm“).

   Was geht über das Netz? Nur Dateien dieser Seite, nur vom selben Server: beim ersten Öffnen index.html und das
   App-Symbol; bei einem späteren Start mit Internet eine kurze Rückfrage, ob es eine neue index.html gibt
   (unverändert: Antwort ohne Inhalt; geändert: neue Fassung ab dem nächsten Start). Eingaben, Messwerte und
   Ergebnisse verlassen das Gerät nie – das Werkzeug selbst darf technisch keine Verbindungen aufbauen.

   Diese Datei muss bei einer neuen Fassung des Werkzeugs nicht geändert werden: Es genügt, index.html zu ersetzen. */
var SPEICHER = "scrollbar-offline";
var SEITE = "./";
var SYMBOL = "./icon-180.png";

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(SPEICHER).then(function (c) {
    /* „no-cache“: beim Server nachfragen, aber die gerade geladene Seite aus dem Browser-Zwischenspeicher nehmen,
       wenn sie unverändert ist – so wird nichts doppelt heruntergeladen */
    return c.addAll([new Request(SEITE, { cache: "no-cache" }), new Request(SYMBOL, { cache: "no-cache" })]);
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (alle) {
    return Promise.all(alle.filter(function (k) { return k.indexOf("scrollbar-") === 0 && k !== SPEICHER; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* Gibt es eine neue index.html? Gefragt wird mit der Kennung der gespeicherten Fassung (ETag): Ist sie
   unverändert, antwortet der Server ohne Inhalt (304). Ohne Internet scheitert die Frage still. */
function pruefeNeueFassung(c, alt) {
  var kopf = {}, et = alt.headers.get("ETag"), lm = alt.headers.get("Last-Modified");
  if (et) kopf["If-None-Match"] = et; else if (lm) kopf["If-Modified-Since"] = lm;
  return fetch(new Request(SEITE, { cache: "no-store", headers: kopf })).then(function (r) {
    if (r.status === 200 && r.type === "basic" && !r.redirected) return c.put(SEITE, r);
  }).catch(function () { /* offline: gespeicherte Fassung bleibt */ });
}

self.addEventListener("fetch", function (e) {
  var r = e.request, url = r.url.split("#")[0].split("?")[0], basis = self.registration.scope;
  if (r.method !== "GET" || url.indexOf(basis) !== 0) return;
  /* Aufruf des Werkzeugs (Adresse des Ordners oder index.html): sofort aus dem Gerätespeicher */
  if (r.mode === "navigate" && (url === basis || url === basis + "index.html")) {
    var da = caches.open(SPEICHER).then(function (c) { return c.match(SEITE).then(function (alt) { return { c: c, alt: alt }; }); }).catch(function () { return {}; });
    e.respondWith(da.then(function (x) { return x.alt || fetch(r); }));
    e.waitUntil(da.then(function (x) { if (x.alt) return pruefeNeueFassung(x.c, x.alt); }));
    return;
  }
  if (url === basis + "icon-180.png") {
    e.respondWith(caches.match(SYMBOL).then(function (x) { return x || fetch(r); }));
  }
});
