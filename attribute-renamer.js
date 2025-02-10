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

// Aplica a substituição também em diálogos de teste
Hooks.on("renderDialog", (app, html, data) => {
    substituirAtributos();
});

// Garante que a substituição ocorra também no carregamento do jogo
Hooks.on("ready", () => {
    substituirAtributos();
});