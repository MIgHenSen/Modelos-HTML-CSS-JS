const questions = [
    {
        question: "Qual é o valor da Força (F) no objeto, dado M=5kg e A=2m/s²?",
        // Nota: Você deve ter um arquivo chamado 'newton_formula.png' na mesma pasta.
        imagePath: "https://media.brainly.com.br/image/rs:fill/w:640/q:75/plain/https://pt-static.z-dn.net/files/d2f/33e2f1bad07e1f6d30282fc618a164b1.jpg", 
        answers: [
            { text: "10 N", correct: true },
            { text: "2.5 N", correct: false },
            { text: "7 N", correct: false },
            { text: "15 N", correct: false },
        ]
    },
    {
        question: "Qual o resultado da integral definida de $x^2$ de 0 a 3?",
        // Nota: Você pode deixar imagePath vazio se a pergunta não precisar de imagem
        imagePath: "",
        hint: "A integral de $x^n$ é $x^{n+1} / (n+1)$.",
        answers: [
            { text: "6", correct: false },
            { text: "9", correct: true },
            { text: "12", correct: false },
            { text: "27", correct: false },
        ]
    },
    {
        question: "Considerando um triângulo retângulo com catetos de 3 e 4, qual o valor da hipotenusa?",
        imagePath: "pitagoras_formula.png", // Outro exemplo de imagem
        hint: "Use o Teorema de Pitágoras: $a^2 + b^2 = c^2$.",
        answers: [
            { text: "7", correct: false },
            { text: "5", correct: true },
            { text: "12", correct: false },
            { text: "25", correct: false },
        ]
    }
];

// Elementos do DOM
const quizBox = document.getElementById("quiz-box");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Elementos da Dica
const hintButton = document.getElementById("hint-btn");
const hintTextElement = document.getElementById("hint-text");

// Elementos da Imagem
const questionImage = document.getElementById("question-image");
const imagePlaceholder = document.querySelector(".image-placeholder");

const HINT_PENALTY = 1;

let currentQuestionIndex = 0;
let score = 0;
let hintUsed = false;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    hintUsed = false; 
    nextButton.classList.add("hide");
    showQuestion();
    quizBox.classList.remove("slide-out");
    quizBox.classList.add("slide-in"); 
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    
    // --- LÓGICA DE CARREGAMENTO DE IMAGEM ---
    if (currentQuestion.imagePath && currentQuestion.imagePath !== "") {
        questionImage.src = currentQuestion.imagePath;
        questionImage.classList.remove("hide");
        imagePlaceholder.classList.add("hide");
    } else {
        questionImage.classList.add("hide");
        imagePlaceholder.classList.remove("hide");
        imagePlaceholder.textContent = "Nenhuma fórmula ou imagem para esta questão.";
    }
    // --- FIM LÓGICA DE IMAGEM ---
    
    // Configura a dica
    if (currentQuestion.hint) {
        hintButton.classList.remove("hide");
        hintButton.disabled = false;
        hintButton.textContent = "Mostrar Dica (-1 ponto)";
        hintTextElement.textContent = currentQuestion.hint;
    } else {
        hintButton.classList.add("hide");
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = true; 
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    quizBox.classList.remove("slide-in", "slide-out");
    questionElement.classList.remove("final-score");
    
    // Reseta o estado visual da dica
    hintTextElement.classList.add("hide");
    hintButton.classList.add("hide");
    hintUsed = false; 
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect && !hintUsed) {
        score++;
    } else if (isCorrect && hintUsed) {
        // Se a resposta está correta, mas a dica foi usada, a penalidade já foi aplicada
        // e o ponto foi ganho, então o score fica no estado atual.
    } else if (isCorrect) {
        score++;
    }
    
    hintButton.disabled = true;
    
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
        button.disabled = true; 
    });

    nextButton.classList.remove("hide"); 
}

function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("incorrect");
    }
}

function handleHintButton() {
    if (hintUsed) return; 

    hintUsed = true;
    score -= HINT_PENALTY; 
    if (score < 0) score = 0; 
    
    hintButton.disabled = true;
    hintButton.textContent = `Dica Usada (-${HINT_PENALTY} ponto)`;
    hintTextElement.classList.remove("hide"); 
}


function handleNextButton() {
    quizBox.classList.add("slide-out");
    
    quizBox.addEventListener('animationend', function handler() {
        quizBox.removeEventListener('animationend', handler);

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
            quizBox.classList.remove("slide-out"); 
            quizBox.classList.add("slide-in");
        } else {
            showScore();
        }
    });
}

function showScore() {
    resetState();
    questionElement.classList.add("final-score"); 
    questionElement.textContent = `Fim do Quiz! Sua pontuação final é ${score} de ${questions.length} pontos possíveis.`;
    nextButton.textContent = "Jogar Novamente";
    nextButton.classList.remove("hide");
    nextButton.removeEventListener("click", handleNextButton); 
    nextButton.addEventListener("click", startQuiz); 
    quizBox.classList.remove("slide-in", "slide-out"); 
    hintButton.classList.add("hide"); 
    
    // Esconde a área da imagem no placar final
    questionImage.classList.add("hide");
    imagePlaceholder.classList.remove("hide");
    imagePlaceholder.textContent = "Fim de Jogo!";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

hintButton.addEventListener("click", handleHintButton);

startQuiz();