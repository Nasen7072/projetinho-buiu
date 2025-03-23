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
    body.style.fontSize = (currentSize - 2) + 'px';
}

// Função para melhorar o foco visível
function improveFocusVisible() {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '3px solid #ff0000';
        });
        element.addEventListener('blur', () => {
            element.style.outline = '';
        });
    });
}

// Função para ler o conteúdo da página em voz alta
function readPageContent() {
    const content = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(content);
    window.speechSynthesis.speak(utterance);
}

// Verifica se o usuário já habilitou o alto contraste anteriormente
function checkHighContrastPreference() {
    if (localStorage.getItem("highContrast") === "enabled") {
        document.body.classList.add("high-contrast");
    }
}

// Adiciona botões de acessibilidade ao DOM
function addAccessibilityButtons() {
    const accessibilityDiv = document.createElement('div');
    accessibilityDiv.className = 'accessibility-buttons';

    const highContrastButton = document.createElement('button');
    highContrastButton.innerText = 'Alto Contraste';
    highContrastButton.onclick = toggleHighContrast;

    const increaseFontButton = document.createElement('button');
    increaseFontButton.innerText = 'A+';
    increaseFontButton.onclick = increaseFontSize;

    const decreaseFontButton = document.createElement('button');
    decreaseFontButton.innerText = 'A-';
    decreaseFontButton.onclick = decreaseFontSize;

    const readContentButton = document.createElement('button');
    readContentButton.innerText = 'Ler Conteúdo';
    readContentButton.onclick = readPageContent;

    accessibilityDiv.appendChild(highContrastButton);
    accessibilityDiv.appendChild(increaseFontButton);
    accessibilityDiv.appendChild(decreaseFontButton);
    accessibilityDiv.appendChild(readContentButton);

    document.body.appendChild(accessibilityDiv);
}

// Inicializa as funcionalidades de acessibilidade
function initAccessibility() {
    checkHighContrastPreference();
    addAccessibilityButtons();
    improveFocusVisible();
}

// Executa a inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initAccessibility);
