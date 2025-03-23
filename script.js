// Função para alternar o tema de alto contraste
function toggleHighContrast() {
    const body = document.body;
    body.classList.toggle("high-contrast");

    // Salva a preferência do usuário no localStorage
    if (body.classList.contains("high-contrast")) {
        localStorage.setItem("highContrast", "enabled");
    } else {
        localStorage.setItem("highContrast", "disabled");
    }
}

// Função para aumentar o tamanho da fonte
function increaseFontSize() {
    const body = document.body;
    let currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    body.style.fontSize = (currentSize + 2) + 'px';
}

// Função para diminuir o tamanho da fonte
function decreaseFontSize() {
    const body = document.body;
    let currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    if (currentSize > 12) { // Evita que a fonte fique muito pequena
        body.style.fontSize = (currentSize - 2) + 'px';
    }
}

// Função para ler o conteúdo da página em voz alta
function readPageContent() {
    if ('speechSynthesis' in window) {
        const content = document.body.innerText;
        const utterance = new SpeechSynthesisUtterance(content);
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Seu navegador não suporta a funcionalidade de leitura em voz alta.");
    }
}

// Verifica se o usuário já habilitou o alto contraste anteriormente
function checkHighContrastPreference() {
    if (localStorage.getItem("highContrast") === "enabled") {
        document.body.classList.add("high-contrast");
    }
}

// Inicializa as funcionalidades de acessibilidade
function initAccessibility() {
    checkHighContrastPreference();
}

// Executa a inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initAccessibility);
