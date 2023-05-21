document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        // Mostrar a tela de loading enquanto os arquivos estão sendo carregados
        document.getElementById("loading").classList.remove("hidden");
    } else {
        // Esconder a tela de loading quando todos os arquivos foram carregados
        document.getElementById("loading").classList.add("hidden");
    }
};
