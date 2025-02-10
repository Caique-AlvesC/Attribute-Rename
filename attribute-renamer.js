console.log("Attribute Renamer: Módulo ativado!");

// Função para substituir os nomes na interface do Foundry
function substituirAtributos() {
    document.querySelectorAll("*").forEach(element => {
        if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
            element.textContent = element.textContent
                .replace(/\bAparência\b/g, "Magnetismo")
                .replace(/\bPercepção\b/g, "Determinação");
        }
    });
}

// Garante que a substituição ocorra toda vez que uma ficha for carregada
Hooks.on("renderActorSheet", (app, html, data) => {
    substituirAtributos();
});

// Também roda no carregamento inicial do Foundry
Hooks.on("ready", () => {
    substituirAtributos();
});