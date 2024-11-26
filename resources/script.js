const facts = [
    "I love hiking and exploring nature trails.",
    "I'm a tea enthusiast and love trying new brews.",
    "I like the cold",
    "Water is my happy place",
    "My favorite programming language is JavaScript!",
    "I enjoy gaming in my free time.",
    "I’m fascinated by space.",
    "I am switching careers at the moment"
];

const factButton = document.querySelector('#factButton');
const factDisplay = document.querySelector('#factDisplay');

factButton.addEventListener('click', () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factDisplay.textContent = randomFact;
});