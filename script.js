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
  "Flüstere deinem Partner etwas, das ihn garantiert zum Lächeln bringt.",
  "Tanzt zusammen zu einem Lied – völlig egal, ob ihr gut tanzen könnt.",
  "Gib deinem Partner eine 30-Sekunden-Massage über der Kleidung.",
  "Lass deinen Partner deine Hand nehmen und dir eine kleine Geschichte dazu ausdenken.",
  "Macht gemeinsam euer bestes Model-Gesicht und lacht euch dabei an.",
  "Umarme deinen Partner 20 Sekunden lang ohne zu sprechen.",
  "Zeichne mit dem Finger etwas auf den Rücken deines Partners – er oder sie muss erraten, was es ist.",
  "Sagt euch gegenseitig drei Dinge, die ihr aneinander bewundert.",
  "Macht gemeinsam ein Selfie mit eurer lustigsten Grimasse.",
  "Mach deinem Partner ein ernst gemeintes, aber ungewöhnliches Kompliment.",
  "Füttere deinen Partner mit einem imaginären Dessert und beschreibe, wie es schmeckt.",
  "Tauscht für zwei Minuten eure typischen Rollen oder Gesten.",
  "Sprecht beide gleichzeitig euer Lieblingswort – wer lacht zuerst, verliert.",
  "Imitiert für 20 Sekunden euer erstes Treffen.",
  "Erfinde einen neuen Kosenamen für deinen Partner und sag ihn besonders süß.",
  "Dreh dich einmal langsam um, während dein Partner errät, was du gerade denkst.",
  "Beschreibe in drei Wörtern, was du gerade fühlst – und warum.",
  "Macht eine High-Five-Kette mit fünf verschiedenen Variationen.",
  "Zeigt euch gegenseitig euren Lieblings-Dance-Move.",
  "Erfinde spontan ein Mini-Liebeslied und singe es deinem Partner vor.",
  "Schreib mit dem Finger ein Wort auf die Hand deines Partners – er/sie muss es erraten.",
  "Tu so, als wärst du dein Partner für 30 Sekunden.",
  "Versuche, deinen Partner für 10 Sekunden nicht anzusehen – wer zuerst lächelt, verliert.",
  "Mach deinem Partner ein Kompliment in Zeitlupe.",
  "Sag deinem Partner etwas, das du bisher nie laut gesagt hast, obwohl es schön ist.",
  "Mach eine kleine Siegerpose, während dein Partner applaudiert.",
  "Gib deinem Partner ein ‚unsichtbares Geschenk‘ – und beschreibe, was es ist.",
  "Spielt eine Szene, als wärt ihr in einem Film – dein Partner darf das Genre bestimmen.",
  "Versuche, deinen Partner mit einem Blick zum Lachen zu bringen.",
  "Sag drei Wörter, die beschreiben, warum dein Partner besonders ist.",
  "Erfinde eine kleine Bewegung, die nur ihr zwei versteht – euer geheimer Gruß.",
  "Sag deinem Partner, wie du ihn nennen würdest, wenn er eine Superkraft hätte.",
  "Sprich mit deinem Partner, als wärt ihr ein altes Ehepaar – 20 Sekunden lang.",
  "Tu so, als würdest du ein Liebesgedicht rezitieren – komplett improvisiert.",
  "Gib deinem Partner ein imaginäres Krönchen und sag, wofür er/sie heute König*in ist.",
  "Mach einen dramatischen Heiratsantrag – aber für etwas völlig Alltägliches.",
  "Mach einen kurzen Spaziergang durch den Raum, als wär’s ein Laufsteg, und dein Partner bewertet.",
  "Beschreibe deinen Partner in drei Geschmacksrichtungen.",
  "Tu so, als würdest du eine Liebeserklärung in einer Fremdsprache machen.",
  "Sag deinem Partner: „Wenn ich dich heute mit einem Song beschreiben müsste, wäre es...“ und nenne den Song.",
  "Mach eine kleine Tanzbewegung jedes Mal, wenn dein Partner deinen Namen sagt – für 1 Minute.",
  "Zeig deinem Partner, wie du aussiehst, wenn du verliebt bist – übertrieben natürlich.",
  "Erfindet gemeinsam euer eigenes Pärchen-Emoji (macht es mit Gesten nach).",
  "Sag deinem Partner, was du an seinem Lachen am schönsten findest.",
  "Erzähl kurz, wie du dich fühlst, wenn ihr euch streitet – aber in einer witzigen Metapher.",
  "Lass deinen Partner dir einen kleinen Spitznamen geben, den du für den Rest des Spiels benutzen musst.",
  "Stell dir vor, ihr habt euch gerade kennengelernt – flirtet 30 Sekunden lang so, als wäre es das erste Mal.",
  "Sage etwas, das deinen Partner garantiert erröten lässt (aber liebevoll!).",
  "Mach gemeinsam mit deinem Partner eine Siegerpose und ruft laut: „Team Lovebirds!“"
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

