const questions = [

/* ================= PART 1 : MCQ (1–20) ================= */

{
  type: "mcq",
  q: "The process of choosing a course of action for dealing with a problem or opportunity is:",
  options: ["Problem solving", "Decision making", "Planning", "Organizing"],
  a: 1
},
{
  type: "mcq",
  q: "Which of the following is more comprehensive?",
  options: ["Problem solving", "Decision making", "Identifying causes", "Data gathering"],
  a: 1
},
{
  type: "mcq",
  q: "A systematic process that focuses on analyzing a difficult situation is:",
  options: ["Decision making", "Problem solving", "Creative thinking", "Management"],
  a: 1
},
{
  type: "mcq",
  q: "The first step in the Traditional Problem-Solving Process is:",
  options: ["Gather data", "Identify the problem", "Explore alternatives", "Select solution"],
  a: 1
},
{
  type: "mcq",
  q: "In the Traditional Model, decision making occurs at which step?",
  options: ["Step 1", "Step 3", "Step 5", "Step 7"],
  a: 2
},
{
  type: "mcq",
  q: "Problems that are straightforward, familiar, and easily defined are:",
  options: ["Unstructured problems", "Structured problems", "Crisis problems", "Analytical problems"],
  a: 1
},
{
  type: "mcq",
  q: "A problem that can lead to disaster if not resolved quickly is a:",
  options: ["Non-programmed problem", "Crisis problem", "Structured problem", "Routine problem"],
  a: 1
},
{
  type: "mcq",
  q: "Decisions used for routine or repetitive problems are:",
  options: ["Non-programmed decisions", "Programmed decisions", "Creative decisions", "Ethical decisions"],
  a: 1
},
{
  type: "mcq",
  q: "Non-programmed decisions are usually made by:",
  options: ["First-line managers", "Staff nurses", "Upper-level managers", "Administrative assistants"],
  a: 2
},
{
  type: "mcq",
  q: "A successful decision maker must be:",
  options: ["Fearful of risks", "Courageous and energetic", "Rigid in thinking", "Dependent on others"],
  a: 1
},
{
  type: "mcq",
  q: "The condition where a manager has all the information needed to make a decision is:",
  options: ["Risk", "Uncertainty", "Certainty", "Ambiguity"],
  a: 2
},
{
  type: "mcq",
  q: "In the 'Risk' condition, the manager:",
  options: [
    "Has perfect information",
    "Can estimate the probability of outcomes",
    "Has no information at all",
    "Cannot define the problem"
  ],
  a: 1
},
{
  type: "mcq",
  q: "Which decision-making style has low tolerance for ambiguity and quick action?",
  options: ["Analytical", "Conceptual", "Directive", "Behavioral"],
  a: 2
},
{
  type: "mcq",
  q: "Managers who consider many alternatives and tolerate ambiguity use:",
  options: ["Directive style", "Analytical style", "Behavioral style", "Automatic style"],
  a: 1
},
{
  type: "mcq",
  q: "The Conceptual style focuses on:",
  options: [
    "Short-term results",
    "Technical aspects",
    "Long-term goals and creative solutions",
    "Personal feelings only"
  ],
  a: 2
},
{
  type: "mcq",
  q: "Which style shows deep concern for others as individuals?",
  options: ["Analytical", "Behavioral", "Directive", "Professional"],
  a: 1
},
{
  type: "mcq",
  q: "The ethical principle related to freedom of choice is:",
  options: ["Justice", "Beneficence", "Autonomy", "Nonmaleficence"],
  a: 2
},
{
  type: "mcq",
  q: "'Do no harm' refers to:",
  options: ["Fidelity", "Nonmaleficence", "Beneficence", "Justice"],
  a: 1
},
{
  type: "mcq",
  q: "Treating each person as a unique individual refers to:",
  options: ["Justice", "Autonomy", "Fidelity", "Competence"],
  a: 0
},
{
  type: "mcq",
  q: "Fidelity in ethical decision-making means:",
  options: [
    "Doing good",
    "Being faithful and honoring commitments",
    "Treating people equally",
    "Telling the truth"
  ],
  a: 1
},

/* ================= PART 2 : TRUE / FALSE (21–40) ================= */

{ type: "tf", q: "Decision making is a part of problem solving.", a: false },
{ type: "tf", q: "Unstructured problems are new or unusual.", a: true },
{ type: "tf", q: "Non-routine problems require programmed decisions.", a: false },
{ type: "tf", q: "Certainty is the most common condition for decisions.", a: false },
{ type: "tf", q: "Self-awareness is a trait of successful decision makers.", a: true },
{ type: "tf", q: "Directive style managers are slow decision makers.", a: false },
{ type: "tf", q: "Ethical decision-making follows ethical principles.", a: true },
{ type: "tf", q: "Beneficence means contributing to the good of others.", a: true },
{ type: "tf", q: "A common mistake is neglecting problem causes.", a: true },
{ type: "tf", q: "The final step is implementation.", a: false },
{ type: "tf", q: "Programmed decisions use a routine approach.", a: true },
{ type: "tf", q: "Analytical managers consider more information.", a: true },
{ type: "tf", q: "Behavioral managers value one-to-one interaction.", a: true },
{ type: "tf", q: "Non-programmed decisions are unique.", a: true },
{ type: "tf", q: "Uncertainty exists when probabilities cannot be estimated.", a: true },
{ type: "tf", q: "Justice means treating everyone exactly the same.", a: false },
{ type: "tf", q: "Creativity is essential for exploring alternatives.", a: true },
{ type: "tf", q: "Managers should use only one decision style.", a: false },
{ type: "tf", q: "Identifying the problem is the hardest step.", a: true },
{ type: "tf", q: "Evaluation determines if the problem is resolved.", a: true },

/* ================= PART 3 : CRITICAL THINKING (41–50) ================= */

{
  type: "mcq",
  q: "Sudden staff shortage due to flu outbreak is a:",
  options: ["Structured problem", "Crisis problem", "Programmed decision", "Certainty condition"],
  a: 1
},
{
  type: "mcq",
  q: "Making a fast decision without data reflects which style?",
  options: ["Analytical", "Directive", "Behavioral", "Conceptual"],
  a: 1
},
{
  type: "mcq",
  q: "Refusing unsafe procedure due to lack of training reflects:",
  options: ["Nonmaleficence", "Fidelity", "Justice", "Autonomy"],
  a: 0
},
{ type: "tf", q: "Choosing a 'good enough' solution is satisficing.", a: true },
{
  type: "mcq",
  q: "Unexpected bleeding during surgery requires:",
  options: ["Programmed decision", "Non-programmed decision", "Structured problem", "Behavioral style"],
  a: 1
},
{
  type: "mcq",
  q: "Why is gathering data crucial before identifying causes?",
  options: [
    "To save time",
    "To avoid wrong assumptions",
    "To delay decisions",
    "Because policy requires it"
  ],
  a: 1
},
{ type: "tf", q: "Analytical managers prefer trial and error.", a: false },
{
  type: "mcq",
  q: "Deciding to build a cancer center in 10 years involves:",
  options: ["Certainty", "Risk or Uncertainty", "Programmed decision", "Directive style"],
  a: 1
},
{
  type: "mcq",
  q: "Giving best shifts only to friends violates:",
  options: ["Autonomy", "Justice", "Nonmaleficence", "Beneficence"],
  a: 1
},
{ type: "tf", q: "Problem solving is more comprehensive than decision making.", a: false }

];

console.log(questions.length); // ✅ 50
console.log(questions.length);
let index = 0;
let answers = Array(questions.length).fill(null);
let reviewMode = false;
let shuffledQuestions = [];
/* ========= ELEMENTS ========= */

const qText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const counter = document.getElementById("counter");
const progress = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");
const resultScore = document.getElementById("resultScore");
const resultPercent = document.getElementById("resultPercent");
/* ========= OPTIONS ========= */
function shuffleOptions(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function createOption(text, isCorrect) {
  const b = document.createElement("button");
  b.innerText = text;
  b.onclick = () => select(isCorrect, b);
  optionsDiv.appendChild(b);
}
function select(isCorrect, btn) {
  if (answers[index] !== null) return;

  answers[index] = isCorrect;

  const q = shuffledQuestions[index];

  [...optionsDiv.children].forEach(b => {
    b.disabled = true;

    // لو MCQ
    if (q.type === "mcq") {
      const correctText = q.options[q.a];

      if (b.innerText === correctText) {
        b.style.background = "#27ae60"; // الصح أخضر
      } else if (b === btn) {
        b.style.background = "#e74c3c"; // الغلط أحمر
      }
    }

    // لو True / False
    if (q.type === "tf") {
      if (
        (b.innerText === "True" && q.a === true) ||
        (b.innerText === "False" && q.a === false)
      ) {
        b.style.background = "#27ae60";
      } else if (b === btn) {
        b.style.background = "#e74c3c";
      }
    }
  });

  nextBtn.style.display = "inline-block";
}
function startQuiz() {
  index = 0;
  answers = Array(questions.length).fill(null);
  reviewMode = false;

  // ✅ اعمل نسخة بدل ما تغيّر الأصل
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
document.getElementById("questionsBtn").innerText =
  `Questions (${shuffledQuestions.length})`;
  document.getElementById("result").classList.remove("show");
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  loadQuestion();
}
function loadQuestion() {
  optionsDiv.innerHTML = "";
  nextBtn.style.display = "none";

  const q = shuffledQuestions[index];
  qText.innerText = q.q;
  counter.innerText = `Question ${index + 1} / ${shuffledQuestions.length}`;
  progress.style.width = ((index + 1) / shuffledQuestions.length) * 100 + "%";

  if (q.type === "tf") {
    createOption("True", q.a === true);
createOption("False", q.a === false);
  } else {
    const options = q.options.map((text, i) => ({
  text,
  correct: i === q.a
}));

shuffleOptions(options).forEach(opt => {
  createOption(opt.text, opt.correct);
});
  }
}

function nextQuestion() {
  if (index < questions.length - 1) {
    index++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const score = answers.filter(a => a === true).length;
  const percent = Math.round((score / questions.length) * 100);

  // اخفي الكويز
  document.getElementById("quiz").style.display = "none";

  // النصوص
  resultScore.innerText = `Score: ${score} / ${questions.length}`;
  resultPercent.innerText = `Percentage: ${percent}%`;

  let title = "";
  if (percent >= 85) {
    title = "اول دفعععهه يعمممم";
  } else if (percent >= 70) {
    title = "شد شويه يعممم";
  } else {
    title = "انت اخرك تخش كليه البهاييييمممم";
  }

  document.getElementById("resultTitle").innerText = title;

  // أظهر النتيجة بالأنيميشن
  resultBox.classList.add("show");
}
function restartQuiz() {
  document.getElementById("result").classList.remove("show");
  startQuiz();
}
function toggleQuestions() {
  const list = document.getElementById("questionsList");
  list.classList.toggle("show");
  renderQuestionsList();
}

function renderQuestionsList() {
  const list = document.getElementById("questionsList");
  list.innerHTML = "";

  shuffledQuestions.forEach((q, i) => {
    const b = document.createElement("button");
    b.innerText = i + 1;

    if (answers[i] === null) {
      b.className = "q-unanswered";
    } else if (answers[i] === true) {
      b.className = "q-correct";
    } else {
      b.className = "q-wrong";
    }

    if (i === index) {
      b.style.outline = "3px solid #3498db";
    }

    b.onclick = () => {
      index = i;
      loadQuestion();
      renderQuestionsList();
    };

    list.appendChild(b);
  });
}
/* ========= MENU ========= */

const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  sideMenu.classList.toggle("show");
  overlay.classList.toggle("show");
}

function closeMenu() {
  sideMenu.classList.remove("show");
  overlay.classList.remove("show");
}

/* ========= DARK MODE ========= */

function toggleDark() {
  document.body.classList.toggle("dark");
}