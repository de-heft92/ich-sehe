# Ich sehe was, was du nicht siehst

Digitales Zusatzmaterial zu Leitfrage I „Warum sehe ich, was ich sehe?“ – Deutschland & Europa, Heft 92 (Landeszentrale für politische Bildung Baden-Württemberg).
Konzept, Inhalte und Umsetzung: Tobias Naber – erstellt unter Verwendung von KI. Version 1.0, Stand 29. Oktober 2026.

Schülerinnen und Schüler scrollen durch die erfundene App **scrollbar**, öffnen sie „zwei Tage später“ wieder und sehen dann, was die App über sie gelernt hat, was sie ihnen deshalb nicht mehr zeigt und was eine andere Regel der Plattform verändern würde. Am Ende stehen ein Sach- und ein Werturteil zur These „Was in meinem Feed erscheint, entscheide vor allem ich selbst“ und eine Ergebniskarte mit Kurzcode für den Klassenvergleich. Dauer: etwa 40 Minuten, allein und am Stück.

## Was im Paket ist

| Datei | Wozu |
|---|---|
| `index.html` | das Werkzeug – eine einzige Datei (rund 3,7 MB), alle 45 Bilder, die Schrift und das Logo der LpB sind eingebettet |
| `sw.js` | Offline-Speicher: Damit startet das Werkzeug auf iPad und iPhone nach dem ersten Öffnen auch ohne Internet |
| `icon-180.png` | App-Symbol für den Home-Bildschirm |
| `README.md` | diese Anleitung |

## Welcher Weg für welche Geräte

| Weg | Geräte | Internet nötig? | Kontakt zu GitHub |
|---|---|---|---|
| ① Datei weitergeben (Moodle als Download, Teams, USB-Stick) | Windows, Mac, Chromebook, Android (dort mit Chrome öffnen) | nein | keiner |
| ② Link über GitHub Pages (QR-Code) | **alle, auch iPad und iPhone** | nur beim ersten Öffnen | beim Laden (siehe Datenschutz) |
| ③ Link über das Moodle der Schule (Datei mit der Anzeige „Öffnen“, im Browser) | alle, auch iPad und iPhone | zum Laden | keiner |

**Warum iPad und iPhone einen Link brauchen:** Die Dateien-App öffnet eine HTML-Datei nicht in Safari, sondern nur in einer Vorschau. Vorschauen – auch in Mail, Messengern, der Moodle-App und manchen Cloud-Apps – führen keine Programme aus; das Werkzeug zeigt dann den Hinweis „Sie sehen gerade nur eine Vorschau“. Mit den eingebauten Apps lässt sich eine gespeicherte HTML-Datei auf iPad und iPhone nicht in Safari öffnen. Über einen Link startet sie dagegen ganz normal.

## Einrichten mit GitHub Pages (einmalig, etwa 10 Minuten)

1. Die ZIP-Datei entpacken (Doppelklick). Es entsteht ein Ordner mit den vier Dateien.
2. [github.com](https://github.com) öffnen und anmelden (oder oben rechts auf **Sign up** klicken und ein kostenloses Konto anlegen).
3. Oben rechts auf **+** klicken, dann auf **New repository**.
4. Bei **Repository name** einen kurzen Namen eintragen, zum Beispiel `scrollbar`. Darunter **Public** auswählen (im kostenlosen Konto funktioniert GitHub Pages nur mit öffentlichen Repositories). Keine weiteren Haken setzen. Unten auf **Create repository** klicken.
5. Auf der folgenden Seite (Abschnitt „Quick setup“) auf den Link **uploading an existing file** klicken.
6. Die vier Dateien aus dem Ordner in das Feld ziehen. Warten, bis alle vier in der Liste stehen. Unten auf **Commit changes** klicken.
7. Oben in der Leiste des Repositorys auf **Settings** (Zahnrad) klicken, dann links auf **Pages**.
8. Unter **Build and deployment** bei **Source** die Einstellung **Deploy from a branch** wählen. Bei **Branch** **main** und daneben **/ (root)** auswählen. Auf **Save** klicken.
9. Ein bis zwei Minuten warten und die Seite neu laden. Oben steht dann „Your site is live at https://BENUTZERNAME.github.io/scrollbar/“. Auf **Visit site** klicken und prüfen, ob das Werkzeug startet.
10. QR-Code erstellen: Die Adresse in Chrome am Computer öffnen, mit der rechten Maustaste auf eine freie Stelle der Seite klicken und **QR-Code für diese Seite erstellen** wählen, dann **Herunterladen**.

## Im Unterricht mit iPads – auch ohne Internet

Einmal im Schul-WLAN:

1. QR-Code mit der Kamera scannen und auf den Link tippen. Das Werkzeug startet in Safari.
2. Auf das **Teilen**-Symbol tippen (Quadrat mit Pfeil nach oben; je nach Version auch hinter **…**).
3. **Zum Home-Bildschirm** wählen. Den Schalter **Als Web-App öffnen** eingeschaltet lassen (ab iPadOS 26), dann auf **Hinzufügen** tippen.

Ab jetzt startet scrollbar über das Symbol auf dem Home-Bildschirm wie eine App – auch ohne Internet und auch in der nächsten Stunde. Wichtig: Der Zwischenstand bleibt nur, solange die App geöffnet ist. Wer sie zwischendurch ganz schließt (nach oben wegwischen), beginnt von vorn.

Ohne Home-Bildschirm geht es auch: Ist die Seite einmal in Safari geladen, läuft das Werkzeug ohne Internet weiter, auch wenn das WLAN während der Stunde ausfällt.

## Eine neue Fassung einspielen

Nur `index.html` ersetzen: im Repository auf **Add file** → **Upload files** klicken, die neue `index.html` hineinziehen, **Commit changes**. `sw.js` bleibt unverändert. Die Geräte holen die neue Fassung beim nächsten Start mit Internet von selbst und zeigen sie ab dem darauffolgenden Start. Eine Datei aus der Redaktionsansicht heißt `Ich_sehe_was.html` – vor dem Hochladen in `index.html` umbenennen.

## Datenschutz

**Was das Werkzeug überträgt: nichts.** Es kann technisch keine Verbindung aufbauen und kein Formular absenden (Content-Security-Policy im Kopf der Datei). Alles, was die Schülerinnen und Schüler tun – Scrollen, Herzen, Vermutungen, Urteil, Ergebniskarte –, bleibt auf ihrem Gerät. Der Zwischenstand liegt nur im Speicher des Browser-Tabs (sessionStorage) und ist mit dem Schließen weg; „Löschen und neu beginnen“ entfernt ihn sofort. Keine Anmeldung, keine Cookies, keine Schriften oder Statistikdienste von Dritten. Der Kurzcode enthält nur Zahlen, das stärkste Thema und das gewählte Urteil – keinen Namen und keinen Freitext; er verlässt das Gerät nur, wenn ihn jemand selbst abgibt.

**Was GitHub beim Aufruf über den Link sieht:** wie jeder Server beim Laden einer Website technische Verbindungsdaten – IP-Adresse, Browser und Gerätetyp, Uhrzeit und die aufgerufene Adresse. GitHub speichert die IP-Adressen der Besucher von Pages-Seiten nach eigenen Angaben aus Sicherheitsgründen ([GitHub Docs: What is GitHub Pages?, Abschnitt „Data collection“](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)). GitHub ist ein Unternehmen von Microsoft mit Sitz in den USA.

Gemessen mit einem nachgebauten Server:

| Situation | Anfragen an den Server |
|---|---|
| erstes Öffnen | 4: die Seite (3,7 MB), `sw.js`, eine Rückfrage ohne Inhalt, das App-Symbol |
| späterer Start mit Internet | 1: Rückfrage „Gibt es eine neue Fassung?“ – unverändert: Antwort ohne Inhalt |
| Start ohne Internet | keine |
| während der Arbeit mit dem Werkzeug | keine |

**So bleibt es datensparsam:**

1. Im Schul-WLAN öffnen. GitHub sieht dann nur die gemeinsame Internetadresse der Schule, nicht die einzelner Geräte oder Haushalte.
2. Auf iPads zum Home-Bildschirm hinzufügen und danach ohne Internet arbeiten lassen.
3. Den Kurzcode anonym einsammeln (Abstimmung, Feedback oder Pinnwand der Schulplattform ohne Namen, nicht im Klassenchat).
4. Wo es ohne GitHub geht, ohne GitHub arbeiten: Datei weitergeben (Weg ①) oder über Moodle (Weg ③).

Ob der Einsatz über GitHub an der eigenen Schule passt, klärt im Zweifel die oder der Datenschutzbeauftragte der Schule.

## Logo der LpB

Das Logo der Landeszentrale für politische Bildung Baden-Württemberg ist direkt in `index.html` eingebettet: oben rechts auf der Startseite, auf weißer Fläche, mit Link auf lpb-bw.de. Es braucht keine zusätzliche Datei; das Werkzeug läuft damit auch offline. Auf dem Smartphone steht dort nur das Logo – „Hinweise für Lehrkräfte“ ist dann unten auf der Startseite.

## Adressen für Lehrkräfte

- `…/#klasse` – Klassenauswertung: Kurzcodes der Klasse einfügen, Verteilung ansehen (nur im eigenen Browser).
- `…/#redaktion` – alle 135 Beiträge mit Vorschau, Bild-Prompts, Bilder austauschen und Datei mit Bildern speichern.
- `…/#test` – Durchläufe simulieren, Messung live ansehen.
- `…/#neu` – gespeicherten Zwischenstand löschen.

Dieselben Ansichten öffnen die Knöpfe in den „Hinweisen für Lehrkräfte“ (Link unten auf jeder Seite).

## Bilder und KI-Kennzeichnung

Texte und Grafiken wurden unter Verwendung von KI erstellt und redaktionell geprüft. Alle 45 Bildplätze (Fotos, Hintergründe der Kurzclips, Titelbilder von Tafeln, Werbefotos) sind mit KI-Bildern belegt; sie tragen im Feed oben im Beitrag den Hinweis „✦ KI-generiert“, wie es große Plattformen tun. Reale Meldungen haben nie ein KI-Bild. Austauschen: In `#redaktion` den Prompt kopieren, ein Bild erzeugen, als `ID.png` speichern (etwa `mo1.png`), in der Redaktionsansicht einsetzen, „Datei mit Bildern speichern“ und die gespeicherte Datei als neue `index.html` hochladen.
