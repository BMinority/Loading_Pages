document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.getElementById("gif-container").classList.remove("hidden");
    } else {
        document.getElementById("gif-container").classList.add("hidden");
    }
};
