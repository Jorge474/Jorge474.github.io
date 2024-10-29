let currentMessageIndex = 0;
const messages = [
    "Te amo más de lo que  puedas imaginar.",
    "Eres la razón de mi felicidad.",
    "Desde que estas tú se lo que es estar muy feliz.",
    "Tu sonrisa ilumina mi mundo.",
    "Contigo, cada momento y cada segundo es especial.",
    "Quiero estar aqui abrazado a ti.",
    "Feliz cumpleaños mi corazoncito hermoso."

];

function togglePassword() {
    const passwordField = document.getElementById('password');
    const passwordType = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', passwordType);
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "La futura esposa de mi novio" && password === "Nuestro amor es especial y único") {
        window.location.href = "home.html";
    } else {
        document.getElementById('error-message').innerText = "Usuario o contraseña incorrectos. Intenta de nuevo.";
    }
}

// Mensajes Románticos
function displayMessage() {
    document.getElementById('messageDisplay').innerText = messages[currentMessageIndex];
}

function nextMessage() {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    displayMessage();
}

function prevMessage() {
    currentMessageIndex = (currentMessageIndex - 1 + messages.length) % messages.length;
    displayMessage();
}

// Juego de Recuerdos
const quizQuestions = [
    {
        question: "¿Cómo fue nuestra primera cita?",
        options: ["Parque", "Cine", "Restaurante", "Virtual"],
        answer: 3,
    },
    {
        question: "¿Cuál fué el primer juego que jugamos juntos?",
        options: ["Animal jam", "Plato", "Brawl star", "Roblox"],
        answer: 1,
    },
    {
        question: "¿Mediante que nos conocimos?",
        options: ["Whattsap", "Telegram", "Parque", "Fiesta"],
        answer: 0,
    },
    {
        question: "¿Qué hicimos en nuestra primera cita?",
        options: ["Comimos", "Salimos", "jugamos", "Vimos peli"],
        answer: 3,
    },
    {
        question: "¿Quén hablo primero?",
        options: ["Yo", "Mi novio"],
        answer: 1,
    },
    {
        question: "¿Quién dio el primer paso?",
        options: ["Yo", "Mi novio"],
        answer: 1,
    },
    {
        question: "¿Quién dijo te amo primero?",
        options: ["Yo", "Mi novio"],
        answer: 1,
    },
    {
        question: "¿Qué día nos hicimos novios?",
        options: ["16", "21", "18", "17"],
        answer: 2,
    },





];

let currentQuizIndex = 0;

function startQuiz() {
    document.querySelector(".quiz-container").classList.remove("hidden");
    displayQuizQuestion();
}

function displayQuizQuestion() {
    const currentQuestion = quizQuestions[currentQuizIndex];
    document.getElementById("quiz-question").innerText = currentQuestion.question;
    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = ""; // Limpiar opciones previas
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkQuizAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkQuizAnswer(selectedIndex) {
    if (selectedIndex === quizQuestions[currentQuizIndex].answer) {
        alert("¡Correcto! TE AMO MUCHO");
    } else {
        alert("Incorrecto. ¡Intenta de nuevo! WAAAAA");
    }
    currentQuizIndex++;
    if (currentQuizIndex < quizQuestions.length) {
        displayQuizQuestion();
    } else {
        document.getElementById("quiz-result").innerText = "¡Felicitaciones! Has completado el juego de recuerdos.";
        document.getElementById("quiz-result").classList.remove("hidden");
        document.querySelector(".quiz-container").classList.add("hidden");
    }
}

// Adivina el Momento
function startMomentGame() {
    document.getElementById("moment-game").classList.remove("hidden");
}

function showResult(isCorrect) {
    const resultText = isCorrect ? "¡Correcto! TAMOOO MUTOOO." : "Incorrecto. No era el lugar correcto.";
    document.getElementById("moment-result").innerText = resultText;
}

// Test Rápido de Amor
function startLoveTest() {
    document.getElementById("love-test").classList.remove("hidden");
}

function loveTestResult(isCorrect) {
    const resultText = isCorrect ? "¡Correcto! ¡Me conoces bien mi amoorrr!" : "Incorrecto. ¡Pero no te preocupes, siempre puedes aprender más!";
    document.getElementById("love-test-result").innerText = resultText;
}

// Inicializa el primer mensaje
displayMessage();
