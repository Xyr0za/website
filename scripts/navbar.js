window.addEventListener("load", highlight)

const col = "#7494EA"

function highlight() {

    let loc = window.location.pathname;
    console.log("Page ID is: " + loc);
    switch (loc) {
        case "/":
            console.log("LOCATED")
            var currentElement = document.getElementById("home");
            break;

        case "/quiz":
            console.log("LOCATED")
            var currentElement = document.getElementById("quiz");
            break;
        
        case "/info":
            console.log("LOCATED")
            var currentElement = document.getElementById("info");
            break;
    }
    currentElement.style.backgroundColor = col;
    currentElement.style.borderRadius = "20px";
}
