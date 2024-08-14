const pinkBTN = document.querySelector('#pink');
const blueBTN = document.querySelector('#blue');
const redBTN = document.querySelector('#red');
const whiteBTN = document.querySelector('#white');
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

pinkBTN.addEventListener('click', () => {
    body.style.backgroundColor = "pink";
    pinkBTN.style.backgroundColor = "pink";




});
blueBTN.addEventListener('click', () => {
    body.style.backgroundColor = "blue";
    blueBTN.style.backgroundColor = "blue";
});
redBTN.addEventListener('click', () => {
    body.style.backgroundColor = "red";
    redBTN.style.backgroundColor = "red";
});
whiteBTN.addEventListener('click', () => {
    body.style.backgroundColor = "white";
    whiteBTN.style.backgroundColor = "white";
})


