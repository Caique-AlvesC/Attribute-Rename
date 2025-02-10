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

// Aplica a substituição em fichas
Hooks.on("renderActorSheet", (app, html, data) => {
    substituirAtributos();
});

// Aplica a substituição dentro dos diálogos de teste (`vampireDialog`, `mageDialog`, `changelingDialog`)
Hooks.on("renderApplication", (app, html, data) => {
    if (app.options.classes?.some(cls => ["vampireDialog", "mageDialog", "changelingDialog"].includes(cls))) {
        substituirAtributos();
    }
});

// Aplica a substituição para **todas** as janelas e botões de teste
Hooks.on("renderDialog", (app, html, data) => {
    substituirAtributos();
});

// Aplica a substituição para **qualquer área carregada** no Foundry
Hooks.on("renderSidebarTab", (app, html, data) => {
    substituirAtributos();
});

// Aplica a substituição no carregamento do jogo
Hooks.on("ready", () => {
    substituirAtributos();
});