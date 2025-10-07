// --- Two Lovebirds – Wahrheit oder Pflicht (Homemade Edition) ---
// 50 Wahrheiten 💬 + 50 Pflichten 🔥

const truths = [
  "Was war dein erster Gedanke, als du mich gesehen hast?",
  "Welche meiner Gesten bringt dich immer zum Schmunzeln?",
  "Wenn du mich mit einem Filmcharakter vergleichen müsstest – wer wäre ich?",
  "Welche Eigenschaft von mir findest du heimlich richtig sexy?",
  "Wann hast du das letzte Mal an mich gedacht, ohne dass ich es merkte?",
  "Was würdest du tun, wenn wir uns spontan für ein Abenteuer verabreden könnten?",
  "Welches Wort oder welche Phrase bringst du automatisch mit mir in Verbindung?",
  "Wann hast du dich zuletzt total geschmeichelt gefühlt?",
  "Was ist das Flirtyste, das du dir schon mal für mich gedacht hast?",
  "Welches kleine Geheimnis über dich würdest du mir verraten, wenn du dürftest?",
  "Welches Outfit von mir findest du am unwiderstehlichsten?",
  "Was macht dich beim Gedanken an mich immer ein bisschen nervös?",
  "Wann hast du das letzte Mal gelacht, weil ich etwas Lustiges gemacht habe?",
  "Welche meiner Marotten findest du überraschend süß?",
  "Wenn wir uns gegenseitig überraschen könnten – was würdest du tun?",
  "Welche Eigenschaft von mir würdest du gerne noch besser kennenlernen?",
  "Wann hast du das letzte Mal an ein „Wir-Moment“ gedacht und dabei gelächelt?",
  "Was würdest du tun, wenn wir plötzlich einen ganzen Tag nur für uns hätten?",
  "Welche kleine Geste von mir lässt dein Herz höherschlagen?",
  "Was würdest du als unseren „signature move“ als Paar nennen?",
  "Wann hast du das letzte Mal heimlich über mich geschwärmt?",
  "Welches Wort bringt dich automatisch zum Lächeln, wenn du es von mir hörst?",
  "Was ist das Lustigste, das wir zusammen erlebt haben?",
  "Welche meiner kleinen Macken findest du heimlich bezaubernd?",
  "Wann warst du das letzte Mal richtig stolz auf uns?",
  "Wenn du mich in drei Worten beschreiben müsstest – welche wären das?",
  "Welche Situation mit mir würdest du gern nochmal erleben?",
  "Was war das süßeste Kompliment, das ich dir je gemacht habe?",
  "Welche Fantasie über einen gemeinsamen Moment würdest du mir verraten?",
  "Wann fühlst du dich mir am nächsten?",
  "Was würdest du spontan tun, wenn wir plötzlich alleine wären?",
  "Welche deiner Eigenschaften denkst du, gefallen mir am meisten?",
  "Was ist der charmanteste Satz, den du dir vorstellen könntest, dass ich sage?",
  "Welche gemeinsame Erinnerung bringt dich automatisch zum Lachen?",
  "Wenn wir uns gerade neu kennenlernen würden – was würdest du tun, um mich zu beeindrucken?",
  "Was war der romantischste Moment, den wir bisher hatten?",
  "Welche Eigenschaft von mir würdest du am liebsten öfter sehen?",
  "Was würdest du tun, wenn ich plötzlich etwas Unerwartetes vorschlagen würde?",
  "Welches meiner Lächeln-Momente bleibt dir besonders im Kopf?",
  "Wann hast du das letzte Mal an ein Abenteuer mit mir gedacht?",
  "Welche kleine Geste von mir macht dich sofort glücklich?",
  "Was würdest du tun, wenn wir zusammen einen ganzen Tag frei hätten?",
  "Welche Phrase von mir bringt dich immer wieder zum Lachen?",
  "Wann hast du das letzte Mal heimlich für mich gelächelt?",
  "Welche meiner Marotten würdest du am liebsten „entdecken“?",
  "Was würdest du tun, wenn wir spontan irgendwohin fahren könnten?",
  "Welche Erinnerung an uns bringt dich immer noch zum Schmunzeln?",
  "Welche kleine Herausforderung würdest du gern mal mit mir machen?",
  "Was würdest du tun, wenn wir einen Tag lang nur flirten dürften?",
  "Welche Eigenschaft von mir würdest du am liebsten jeden Tag erleben?"
];

const dares = [
  "Flüster deinem Partner etwas ins Ohr, das ihn garantiert zum Lächeln bringt.",
  "Mach deinem Partner ein unerwartetes Kompliment.",
  "Schreib deinem Partner eine kurze, süße Nachricht, die er gleich lesen muss.",
  "Zeig deinem Partner in 10 Sekunden, wie du ihn beeindrucken würdest.",
  "Sage drei Dinge, die du an deinem Partner besonders magst – laut und charmant.",
  "Schau deinem Partner 20 Sekunden lang tief in die Augen.",
  "Tanz für 15 Sekunden, als wäre es ein Musikvideo.",
  "Stell dir vor, du würdest ein Date für deinen Partner planen – beschreibe es spontan.",
  "Mach eine kurze, charmante Verbeugung für deinen Partner.",
  "Erfinde einen neuen Spitznamen für deinen Partner.",
  "Lies deinem Partner einen „romantischen Satz“ wie aus einem Film vor.",
  "Gib deinem Partner eine Mini-Performance: 10 Sekunden Charme & Witz.",
  "Sag „Ich mag dich, weil…“ auf drei verschiedene Arten.",
  "Imitiere das Lieblingslachen deines Partners – liebevoll!",
  "Mach ein kurzes Selfie mit einer Grimasse zusammen.",
  "Flirte 15 Sekunden lang mit Blickkontakt – nur mit Gesten und Mimik.",
  "Sag einen Satz, der deinen Lieblingsmoment mit deinem Partner beschreibt.",
  "Beschreibe, wie euer perfektes Wochenende aussehen würde.",
  "Zeig in 10 Sekunden, wie du deinen Partner beeindrucken würdest.",
  "Erfinde eine kurze Geschichte, in der ihr die Hauptrollen spielt.",
  "Gib deinem Partner einen „fiktiven Award“ für etwas Kleines.",
  "Beschreibe eine „geheime Superkraft“ deines Partners.",
  "Sag eine Sache, die dich spontan an eurem ersten Treffen fasziniert hat.",
  "Lass deinen Partner eine kleine Aufgabe bestimmen, die du sofort ausführst.",
  "Tu so, als würdest du gerade einen romantischen Film mit deinem Partner drehen.",
  "Mach eine 10-Sekunden-Pose wie auf einem Magazincover.",
  "Stell dir vor, du würdest deinem Partner eine Liebesbotschaft in Rätseln schicken.",
  "Sag drei Dinge, die dich an eurem letzten Date besonders begeistert haben.",
  "Mach einen charmanten „Übertreibungs-Kompliment“-Satz.",
  "Zeig mit Mimik, wie sehr du deinen Partner magst.",
  "Lass deinen Partner bestimmen, welche Pose du jetzt machst.",
  "Tu so, als würdest du dich gerade neu in deinen Partner verlieben.",
  "Sag eine Sache, die dich spontan an eurem ersten Treffen fasziniert hat.",
  "Beschreibe ein „Mini-Abenteuer“, das ihr zusammen erleben könntet.",
  "Mach ein kurzes Kompliment, das dein Partner erraten muss.",
  "Sag deinem Partner, welche Geste von ihm dich am meisten beeindruckt.",
  "Mach eine charmante Grimasse, die nur ihr beide versteht.",
  "Sag einen Satz, der dein Lieblingsgefühl bei eurem Zusammensein beschreibt.",
  "Mach eine kleine „Filmtrailer-Ansage“ über euch als Paar.",
  "Sag drei Worte, die dich an deinen Partner erinnern.",
  "Flüstere eine Mini-Herausforderung für deinen Partner ein.",
  "Mach eine Pose, die zeigt, wie sehr du deinen Partner magst.",
  "Sag spontan, was dein Lieblingsmoment mit ihm war – laut und charmant.",
  "Beschreibe, wie du deinem Partner heute ein Lächeln schenken würdest.",
  "Zeig mit Gesten, was dein Lieblingsmoment mit deinem Partner war.",
  "Mach eine kurze Mini-Performance, die euch beide zum Lachen bringt.",
  "Sag einen Satz, der eure Beziehung am besten beschreibt.",
  "Flirte spielerisch mit Gesten, ohne ein Wort zu sagen.",
  "Mach eine kleine, charmante Nachahmung deines Partners für 10 Sekunden.",
  "Sag deinem Partner spontan, wofür du ihn heute besonders magst.",
  "Zeig, wie du deinen Partner beeindrucken würdest, wenn wir uns gerade neu kennenlernen.",
  "Erfinde ein neues kleines Ritual für euch beide und zeig es.",
  "Sag einen Satz, der dein Lieblingsgefühl bei eurem Zusammensein beschreibt."
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

