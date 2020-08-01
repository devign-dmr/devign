function graphics_tab() {
    window.open(
        "https://devign-dmr.github.io/design-viewer/", "_blank");
}


document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader_spin").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader_spin").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};