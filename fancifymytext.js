function helloWorld() {
    alert("Hello, world!");
}

function enlargeText() {
    document.getElementById("text").style.fontSize = "24pt";
}

function applyFancyStyles() {
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

function resetStyles() {
    document.getElementById("text").style = "";
}

function applyMooStyles() {
    let text = document.getElementById("text").value.toUpperCase();
    let tokens = text.split(" ");

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (token.slice(-1) === ".") {
            tokens[i] = token.replace(".", "-Moo.");
        }
    }

    text = tokens.join(" ");
    document.getElementById("text").value = text;
}

