// --- PumPum Lovebirds – Wahrheit oder Pflicht ---
// Spiel für Paare 💞

const truths = [
  "Was war dein erster Gedanke, als du mich das erste Mal gesehen hast?",
  "Welches Kompliment von mir hat dich bisher am meisten gefreut?",
  "Wenn du mich mit drei Worten beschreiben müsstest – welche wären das?",
  "Was war dein peinlichstes Date-Erlebnis ever?",
  "Welche kleine Macke von mir findest du insgeheim süß?",
  "Welches Lied erinnert dich an uns?",
  "Was würdest du an mir sofort erkennen – selbst mit geschlossenen Augen?",
  "Welche Angewohnheit von mir bringt dich manchmal auf die Palme?",
  "Wann hast du das letzte Mal absichtlich etwas gemacht, nur um meine Aufmerksamkeit zu bekommen?",
  "Welche Situation mit mir hat dich zuletzt richtig zum Lachen gebracht?",
  "Wenn du mich mit einem Filmcharakter vergleichen müsstest – wer wäre ich?",
  "Was würdest du am liebsten an mir ‚antrainieren‘ (im Spaß)?",
  "Welche gemeinsame Erinnerung ist dein absoluter Favorit?",
  "Was ist dein größter Beziehungsturn-on – nicht körperlich, sondern emotional?",
  "Wann warst du das letzte Mal eifersüchtig?",
  "Wenn du eine Superkraft in der Beziehung haben könntest – welche wäre das?",
  "Was würdest du gerne öfter zusammen mit mir machen, kommst aber nie dazu?",
  "Was war das schönste unerwartete Kompliment, das du bekommen hast?",
  "Was war deine bisher mutigste Aktion in einer Beziehung?",
  "Gibt es etwas, das du mir schon lange sagen wolltest, dich aber nicht getraut hast?",
  "Welche Fantasie würdest du mit mir gerne ausprobieren – ohne Details 😉?",
  "Was ist dein Lieblingsmoment am Tag mit mir?",
  "Wofür würdest du mich sofort um Rat fragen?",
  "Welches kleine Geheimnis hattest du mal vor mir?",
  "Wenn ich ein Getränk wäre – welches wäre ich?",
  "Was war der schönste Moment, in dem du dich richtig begehrt gefühlt hast?",
  "Gibt es etwas, das du an dir ändern würdest, wenn du könntest?",
  "Wann hast du dich zuletzt richtig geschmeichelt gefühlt?",
  "Was ist das Lustigste, das dir in einem romantischen Moment passiert ist?",
  "Welche Art von Humor findest du bei mir am besten?",
  "Wann fühlst du dich mir am nächsten?",
  "Wenn wir zusammen eine verrückte Challenge starten würden – was wäre das?",
  "Was ist deine liebste Erinnerung an unseren Anfang?",
  "Was würdest du tun, wenn du einen Tag lang in meinem Körper wärst?",
  "Welches kleine Geheimnis würdest du mir nie verraten – wenn ich es nicht gerade frage? 😄",
  "Wann war dir etwas mit mir zuletzt richtig unangenehm (aber irgendwie süß)?",
  "Wenn du mich überraschen würdest – womit?",
  "Welche Situation mit mir würdest du gern nochmal erleben?",
  "Was ist deine Lieblingsseite an meiner Persönlichkeit?",
  "Gibt es eine Serie oder einen Film, den du mit mir schauen würdest, obwohl du ihn eigentlich nicht magst?",
  "Welchen Spitznamen würdest du mir geben, wenn du müsstest?",
  "Was findest du an Pärchen manchmal übertrieben – aber bei uns okay?",
  "Wenn du mir eine Wahrheit stellen müsstest – welche wäre das?",
  "Wann hast du zuletzt an mich gedacht, obwohl du eigentlich beschäftigt warst?",
  "Wie würdest du unser ‚Wir‘ in einem Satz beschreiben?",
  "Was würdest du an unserer Beziehung nie verändern wollen?",
  "Welches Emoji beschreibt dich, wenn du an mich denkst?",
  "Wofür würdest du dich bei mir gern mal bedanken?",
  "Wenn wir ein Team wären – was wäre unser Teamname?",
  "Wie würdest du reagieren, wenn ich plötzlich total schüchtern wäre?"
];

const dares = [
  "Mach deinem Partner ein echtes Kompliment – ohne zu lachen.",
  "Tanze kurz so, als wärst du in einem Musikvideo.",
  "Schreib deinem Partner eine fiktive Liebesnachricht aus dem Jahr 1800.",
  "Mach deinem Partner ein ernst gemeintes, aber unerwartetes Kompliment.",
  "Zeichne ein Herz auf die Hand deines Partners – ohne zu sprechen.",
  "Mach eine charmante ‚Liebeserklärung‘ in drei Sätzen – spontan!",
  "Lass deinen Partner dein Handyhintergrundbild für 1 Tag auswählen.",
  "Mach deinen Partner 30 Sekunden lang zum Lachen – egal wie.",
  "Gib deinem Partner einen neuen Spitznamen.",
  "Sag fünfmal hintereinander etwas Nettes über deinen Partner.",
  "Schau deinem Partner 20 Sekunden lang tief in die Augen – ohne zu grinsen.",
  "Sag einen Satz, der dich beschreibt – und lass deinen Partner erraten, ob er stimmt.",
  "Versuch, deinen Partner mit nur einem Blick zum Lächeln zu bringen.",
  "Lass deinen Partner dir eine kleine Aufgabe geben, die du sofort tun musst.",
  "Tu so, als würdest du ein Date mit deinem Partner planen – in 30 Sekunden.",
  "Sprich 10 Sekunden lang in übertriebener Romantik.",
  "Mach eine witzige oder charmante Verbeugung für deinen Partner.",
  "Beschreibe euren ersten Kuss (oder stell ihn dir vor) in drei Worten.",
  "Sag deinem Partner, welche Geste du an ihm am meisten magst.",
  "Versuch, deinen Partner zu erraten, ohne hinzusehen – nur mit der Stimme.",
  "Sag ‚Ich mag dich, weil…‘ und ergänze drei Gründe.",
  "Sing oder summe ein Lied, das dich an deinen Partner erinnert.",
  "Beschreibe, wie dein perfektes Date mit deinem Partner aussehen würde.",
  "Gib deinem Partner ein ehrliches ‚Danke‘ für etwas Kleines.",
  "Lies deinem Partner etwas vor, als wärst du ein Hörbuchsprecher.",
  "Flirte mit deinem Partner, als würdet ihr euch gerade neu kennenlernen.",
  "Mach eine charmant übertriebene ‚Werbeanzeige‘ für deinen Partner.",
  "Sag deinem Partner ein ‚Insider-Kompliment‘, das nur ihr versteht.",
  "Versuch, dein Lieblingslachen deines Partners nachzumachen.",
  "Lass deinen Partner dir eine (freundliche) Frage stellen, die du ehrlich beantworten musst.",
  "Mach ein Selfie mit deinem Partner – beide mit Grimasse.",
  "Sag einen Satz, den du dir wünschen würdest, öfter von deinem Partner zu hören.",
  "Gib deinem Partner einen fiktiven Award – und begründe ihn.",
  "Erfinde euer gemeinsames Motto für die Woche.",
  "Mach eine spontane Mini-Performance von 15 Sekunden.",
  "Lass deinen Partner entscheiden, welchen Emoji du heute am meisten verwenden musst.",
  "Sag eine Sache, die du an Beziehungen allgemein schwierig findest.",
  "Mach deinem Partner ein charmantes ‚Übertreibungs-Kompliment‘.",
  "Versuch, deinen Partner 10 Sekunden lang sprachlos zu machen – durch Worte, nicht durch Taten.",
  "Sag deinem Partner, was du dir für euer nächstes gemeinsames Abenteuer wünschst.",
  "Mach eine kleine Pose, als wärst du auf einem Magazincover.",
  "Imitiere deinen Partner 10 Sekunden lang (liebevoll natürlich!).",
  "Sag deinem Partner, was du an seinem Lachen magst.",
  "Lass deinen Partner entscheiden, welche Geste du jetzt machen sollst.",
  "Beschreibe euren perfekten Tag – in 20 Sekunden.",
  "Sag deinem Partner: ‚Ich mag dich, weil du…‘ und ergänze dreimal unterschiedlich.",
  "Gib deinem Partner einen fiktiven Spitznamen aus einem Märchen.",
  "Tu so, als würdest du deinem Partner einen Heiratsantrag machen – übertrieben dramatisch.",
  "Sag deinem Partner, was du denkst, wenn du ihn im Raum siehst.",
  "Sag einen Satz, mit dem du dein Lieblingsgefühl in eurer Beziehung beschreibst.",
  "Sag einen lustigen ‚Fun Fact‘ über euch als Paar."
];

// --- Spiellogik ---
function draw(type) {
  let question = "";

  if (type === "truth") {
    question = "💬 Wahrheit:\n" + truths[Math.floor(Math.random() * truths.length)];
  } else if (type === "dare") {
    question = "🔥 Pflicht:\n" + dares[Math.floor(Math.random() * dares.length)];
  } else {
    const t = truths[Math.floor(Math.random() * truths.length)];
    const d = dares[Math.floor(Math.random() * dares.length)];
    question = `💬 Wahrheit: ${t}\n\n🔥 Pflicht: ${d}`;
  }

  document.getElementById("question").innerText = question;
}
