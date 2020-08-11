function graphics_tab() {
    window.open(
        "https://devign-dmr.github.io/design-viewer/", "_blank");
}

function web_tab() {
    window.open(
        "http://truewheeler.ml/?i=2", "_blank");
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
