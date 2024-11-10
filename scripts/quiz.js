function setPallete (id) {

    const palette = [
        {
            name: "Mercury",
            cols: [
                "#e7e8ec",
                "#ada8a5",
                "#b1adad",
                "#8c8c94",
                "#68696d"
            ]
        },
        {
            name: "Venus",
            cols: [
                "#f8e2b0",
                "#eecb8b",
                "#e3bb76",
                "#d3a567",
                "#ad8d54"
            ]
        },
        {
            name: "Mars",
            cols: [
                "#451804",
                "#c1440e",
                "#e77d11",
                "#fda600",
                "#c1440e"
            ]
        },
        {
            name: "Earth",
            cols: [
                "#4f4cb0",
                "#6b93d6", 
                "#e9eff9", 
                "#d8c596", 
                "#9fc164"
            ]
        },
        {
            name: "Jupiter",
            cols: [
                "#F8CCA5",
                "#FC9E44",
                "#E27F34",
                "#A86730",
                "#A3541D"
            ]
        },
        {
            name: "Saturn",
            cols: [
                "#eddbad",
                "#e2bf7d",
                "#c3924f",
                "#fceead",
                "#c4b08b"
            ]
        },
        {
            name: "Uranus",
            cols: [
                "#afdbf5",
                "#93cdf1",
                "#62aee7",
                "#4296dc",
                "#2e84ce"
            ]
        },
        {
            name: "Neptune",
            cols: [
                "#477efd",
                "#74d6fd",
                "#3d5ef9",
                "#2b378b",
                "#1f2255"
            ]
        },
        {
            name: "Pluto",
            cols: [
                "#25030d",
                "#361d1d", 
                "#66574e", 
                "#7e8173", 
                "#92a8a4"
            ]
        },
        {
            name: "Kuiper",
            cols: [
                "#3A3B3C",
                "#6D6E70", 
                "#B8B8B8", 
                "#8C8C8E", 
                "#D4D4D4"
            ]
        },
        {
          name: "Galaxy",
          cols: ["#3f2a45", 
                 "#7a4a7f", 
                 "#9f8ab5", 
                 "#d1a8d6", 
                 "#f4c0d3"]
}
];

    var curPalette = [];

    for (const i of palette) {
        if (i.name==id) {
            curPalette = i.cols;
            break;
        }
    };

    console.log(curPalette);

    const rootElement = document.querySelector(':root');
    rootElement.style.setProperty("--col1", curPalette[0]);
    rootElement.style.setProperty("--col2", curPalette[1]);
    rootElement.style.setProperty("--col3", curPalette[2]);
    rootElement.style.setProperty("--col4", curPalette[3]);
    rootElement.style.setProperty("--col5", curPalette[4]);
};

const questions = [
    {
        planet: "Mercury",
        question: "What is the main reason Mercury has such extreme temperature differences between day and night?",
        answers: [
            "It is very close to the Sun",
            "It has a slow rotation and no significant atmosphere",
            "It is made of mostly metallic elements",
            "It is the smallest planet in the Solar System"
        ],
        correct: 1
    },
    {
        planet: "Venus",
        question: "Why is Venus hotter than Mercury, despite being farther from the Sun?",
        answers: [
            "It has a very thick atmosphere of carbon dioxide",
            "It is closer to the Sun",
            "It has volcanic activity that produces heat",
            "Its surface is covered in sulfuric acid clouds"
        ],
        correct: 0
    },
    {
        planet: "Earth",
        question: "What makes Earth unique among the planets in our Solar System?",
        answers: [
            "It is the largest terrestrial planet",
            "It has a magnetic field",
            "It has liquid water on its surface",
            "It is closest to the Sun"
        ],
        correct: 2
    },
    {
        planet: "Mars",
        question: "What is the main reason Mars appears red?",
        answers: [
            "It has a surface covered in iron oxide, or rust",
            "It has many volcanoes",
            "Its atmosphere contains a lot of carbon dioxide",
            "It is farther from the Sun, giving it a cooler hue"
        ],
        correct: 0
    },
    {
        planet: "Jupiter",
        question: "What is the most notable feature of Jupiter?",
        answers: [
            "Its many rings",
            "Its icy surface",
            "The Great Red Spot, a massive storm",
            "Its strong magnetic field"
        ],
        correct: 2
    },
    {
        planet: "Saturn",
        question: "Why is Saturn most famous among the planets?",
        answers: [
            "Its vibrant colors",
            "Its vast ring system",
            "Its extreme temperatures",
            "Its proximity to Earth"
        ],
        correct: 1
    },
    {
        planet: "Uranus",
        question: "Which unique feature does Uranus have among the planets?",
        answers: [
            "It is the hottest planet in the Solar System",
            "It has a ring system made of ice and rock",
            "It rotates on its side",
            "It is the only planet visible from Earth with the naked eye"
        ],
        correct: 2
    },
    {
      planet: "Galaxy",
      question: "Which of the following statements about the Milky Way galaxy is correct?",
      answers: [
        "The Milky Way is a spiral galaxy with two major arms.",
        "The Milky Way is an elliptical galaxy.",
        "The Milky Way is the largest galaxy in the universe.",
        "The Milky Way is a barred spiral galaxy."
      ],
      correct: 3
    },
    {
        planet: "Pluto",
        question: "Why is Pluto considered a dwarf planet rather than a full planet?",
        answers: [
            "It is much smaller than other planets",
            "It does not orbit the Sun",
            "It has not cleared its orbit of other debris",
            "It has no moons"
        ],
        correct: 2
    },
    {
        planet: "Mars",
        question: "What evidence suggests that Mars once had liquid water on its surface?",
        answers: [
            "Mars has large polar ice caps",
            "Scientists have detected methane in its atmosphere",
            "There are dry riverbeds and mineral deposits that form in water",
            "Its red color indicates it was once covered in oceans"
        ],
        correct: 2
    },
    {
        planet: "Uranus",
        question: "Why does Uranus have a blue-green color?",
        answers: [
            "It has a surface covered in blue-green rocks",
            "Its atmosphere contains methane, which absorbs red light",
            "It reflects the light from its icy rings",
            "Its temperature is lower than other planets, affecting its color"
        ],
        correct: 1
    },
    {
        planet: "Kuiper",
        question: "What is the Kuiper Belt primarily composed of?",
        answers: [
            "Asteroids made mostly of metal",
            "Rocky planets",
            "Icy bodies and dwarf planets",
            "Dust and gas clouds"
        ],
        correct: 2
    },
    {
        planet: "Neptune",
        question: "Which of the following is a unique feature of Neptune?",
        answers: [
            "It has the most extensive ring system in the Solar System",
            "It has the strongest winds in the Solar System",
            "It is the largest planet in the Solar System",
            "It is the closest planet to the Sun with liquid water"
        ],
        correct: 1
    },
    {
        planet: "Earth",
        question: "What is the primary reason Earth can support a wide variety of life forms?",
        answers: [
            "Its distance from the Sun provides a suitable temperature range",
            "It has the highest atmospheric pressure in the Solar System",
            "Its magnetic field is the strongest of any planet",
            "Its rotation speed is slower than other planets"
        ],
        correct: 0
    },
    {
        planet: "Saturn",
        question: "What are Saturn's rings primarily made of?",
        answers: [
            "Rocky asteroids and boulders",
            "Ice particles and rocky debris",
            "Dust and gas clouds",
            "Solid metal rings"
        ],
        correct: 1
    }
];

function setQuestion (hash) {
    var currentQuestion = 0
    if (!(hash == "#0" || hash == "#")) {
        currentQuestion = parseInt(hash.slice(1))
    };
    
    let QH = parseInt(hash.slice(1)) + 1;
    const Qnum = document.getElementById("questionNum").innerHTML = "QUESTION: " + QH;

    const quest = document.getElementById("Question");
    quest.innerHTML = questions[currentQuestion].question;

    const A = document.getElementById("A");
    const B = document.getElementById("B");
    const C = document.getElementById("C");
    const D = document.getElementById("D");

    A.innerHTML = "A: " + questions[currentQuestion].answers[0]; 
    B.innerHTML = "B: " + questions[currentQuestion].answers[1];
    C.innerHTML = "C: " + questions[currentQuestion].answers[2];
    D.innerHTML = "D: " + questions[currentQuestion].answers[3];

    A.style.backgroundColor = "#30343F";
    B.style.backgroundColor = "#30343F";
    C.style.backgroundColor = "#30343F";
    D.style.backgroundColor = "#30343F";
};

function hideArrows() {
    var left = document.getElementById("left")
    var right = document.getElementById("right")

    if (window.location.hash == "#" + (questions.length-1)) {
        console.log("Hey")
        left.style.visibility = "visible";
        right.style.visibility = "hidden";
    }
    else if (window.location.hash == "#0") {
        left.style.visibility = "hidden";
        right.style.visibility = "visible";
    }
    else {
        left.style.visibility = "visible";
        right.style.visibility = "visible";
    };
}

function backQ() {

    let prestep = parseInt(window.location.hash.slice(1));
    console.log(prestep);
    let step = prestep -1
    console.log(step);
    window.location.hash = "#" + step;

    window.addEventListener("hashchange", setPallete((questions[parseInt(window.location.hash.slice(1))]).planet));
    window.addEventListener("hashchange", setQuestion(window.location.hash));
    
    hideArrows()
};

function forwardQ() {

    let prestep = parseInt(window.location.hash.slice(1));
    console.log(prestep);
    let step = prestep + 1
    console.log(step);
    window.location.hash = "#" + step;

    window.addEventListener("hashchange", setPallete((questions[parseInt(window.location.hash.slice(1))]).planet));
    window.addEventListener("hashchange", setQuestion(window.location.hash));
    
    hideArrows()
};

window.addEventListener("load", setPallete(questions[0].planet));
window.addEventListener("hashchange", setPallete((questions[parseInt(window.location.hash.slice(1))]).planet));

window.addEventListener("load", setQuestion(window.location.hash));
window.addEventListener("hashchange", setQuestion(window.location.hash));

window.addEventListener("load", hideArrows())

function answerCheck (id) {
    hash = window.location.hash
    var currentQuestion = 0
    if (!(hash == "#0" || hash == "#")) {
        currentQuestion = parseInt(hash.slice(1));
    };
    const opts = ["A", "B", "C", "D"]
    var currentCorrect = questions[currentQuestion].correct;
    if (opts[currentCorrect] == id) {
        document.getElementById(id).style.backgroundColor = "#86A873";
    }
    else {
        document.getElementById(id).style.backgroundColor = "#6B2737";
    }
};
