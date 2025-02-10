console.log("Attribute Renamer: Módulo ativado!");

// Função para substituir Aparência e Percepção na interface
function substituirAtributos() {
    document.querySelectorAll("*").forEach(element => {
        if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) { 
            element.textContent = element.textContent
                .replace(/\bAparência\b/g, "Magnetismo")
                .replace(/\bPercepção\b/g, "Determinação");
        }
    });
}

// Aplica a substituição quando uma ficha de personagem for aberta
Hooks.on("renderActorSheet", (app, html, data) => {
    substituirAtributos();
});

// Aplica a substituição dentro dos diálogos de testes (`vampireDialog`)
Hooks.on("renderDialog", (app, html, data) => {
    substituirAtributos();
});

// Garante que a substituição ocorra sempre que uma janela de rolagem de testes (`vampireDialog`) for aberta
Hooks.on("renderApplication", (app, html, data) => {
    if (app.options.classes?.includes("vampireDialog")) {
        substituirAtributos();
    }
});

// Executa a substituição no carregamento do jogo
Hooks.on("ready", () => {
    substituirAtributos();
});