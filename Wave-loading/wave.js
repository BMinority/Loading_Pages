document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.getElementById("loading-container").classList.remove("hidden");
    } else {
        document.getElementById("loading-container").classList.add("hidden");
    }
};
