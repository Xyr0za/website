window.addEventListener("load", colourElements)
window.addEventListener("hashchange", colourElements)

// 

function colourFromPlanet (str) {
    var colour = "#7494EA";
    switch (str) {
        case "Mercury":
            colour = "#797D81";
            break;
        case "Venus":
            colour = "#F1E8B8";
            break;
        case "Earth":
            colour = "#009B72";
            break;
        case "Mars":
            colour = "#AF5D63";
            break;
        case "Jupiter":
            colour = "#A38560";
            break;
        case "Saturn":
            colour = "#E8DAB2";
            break;
        case "Uranus":
            colour = "#009DDC"
            break;
        case "Neptune":
            colour = "#5b5ddf"
            break;
        case "Pluto":
            colour = "#F7F9F9";
            break;
    }
    return colour;
}

//

function colourElements () {

    let planet = window.location.hash;

    var pc = colourFromPlanet(planet.slice(1));

    if (planet == "#home" || planet == "") {
        planet = "#Select";
    }
    else {
        
    }

    var currentElement = document.getElementById("vl");
    currentElement.style.borderLeftColor = pc;

    var title= document.getElementById("titleTxt");
    title.innerHTML = planet.slice(1).toUpperCase();
    title.style.color = pc;

    var displayImage = document.getElementById("IMG");
    displayImage.style.opacity = 0;

    setTimeout(() => {
        displayImage.src = "/images/" + planet.slice(1) + ".png";
        setTimeout(() => {
            displayImage.style.opacity = 1;
        }, 50);
    }, 500);
}
