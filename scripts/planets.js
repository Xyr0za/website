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
            colour = "#92a8a4";
            break;
    }
    return colour;
}

//

const text = [
    {
        name: "SELECT",
        text: "Curious about our Solar System? Select a planet to explore its unique characteristics, atmosphere, and place in the cosmos. Each world offers a glimpse into space—from Mars's red deserts to Saturn's rings.",
    },
    {
        name: "Mercury",
        text: "The closest planet to the Sun, Mercury has extreme temperatures and a rocky, cratered surface similar to our Moon."
    },
    {
        name: "Venus",
        text: "Venus, shrouded in thick clouds of sulfuric acid, is the hottest planet due to its intense greenhouse effect."
    },
    {
        name: "Earth",
        text: "The only planet known to support life, Earth has abundant liquid water, a breathable atmosphere, and diverse ecosystems."
    },
    {
        name: "Mars",
        text: "Known as the Red Planet, Mars has iron-rich soil, large volcanoes, and signs of ancient water flows in river valleys."
    },
    {
        name: "Jupiter",
        text: "Jupiter, the largest planet, is a gas giant with powerful storms, including the massive Great Red Spot."
    },
    {
        name: "Saturn",
        text: "Famous for its beautiful rings, Saturn is a gas giant with many moons, including icy Titan and Enceladus."
    },
    {
        name: "Uranus",
        text: "Uranus rotates on its side and has a blue-green color due to methane in its atmosphere. It’s also ringed."
    },
    {
        name: "Neptune",
        text: "Neptune, known for its intense blue color and violent storms, has the fastest winds in the Solar System."
    },
    {
        name: "Pluto",
        text: "Once the ninth planet, Pluto is now a dwarf planet, featuring icy landscapes and an unusual orbit beyond Neptune."
    }
]


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

    var title = document.getElementById("titleTxt");
    title.style.color = pc;
    title.innerHTML = planet.slice(1).toUpperCase()

    var txtCol = document.querySelector(':root');
    txtCol.style.setProperty("--planetCol", pc)

    changeTxt(window.location.hash.slice(1))

    var displayImage = document.getElementById("IMG");
    displayImage.style.opacity = 0;

    setTimeout(() => {
        displayImage.src = "/images/" + planet.slice(1) + ".png";
        setTimeout(() => {
            displayImage.style.opacity = 1;
        }, 100);
    }, 800);
}


function changeTxt (hash) {
    for (const i of text) {
        console.log(i.name);
        console.log(hash)
        if (i.name==hash) {
            currentText = i.text;
            console.log(currentText);
            break;
        }
        else {
            currentText =text[0].text;
        };
    };
    document.getElementById("facts").innerHTML = currentText;
};
