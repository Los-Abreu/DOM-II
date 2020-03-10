// Your code goes here
//#1 single click
const subHeader1 = document.querySelector("h1");

subHeader1.addEventListener("click", e => {
e.target.style.backgroundColor = "blue";
e.target.style.color = "yellow";
});

//#2 mouseover
const topP = document.querySelector(".intro p");

topP.addEventListener("mouseover", e  => {
    e.target.style.backgroundColor = 'blue';
});

//#3 double click
const subHeader2 = document.querySelector('.intro h2');

subHeader2.addEventListener('dblclick', e => {
    e.target.style.color = 'yellow';
});

//#4 mousemove
const pageImg = document.getElementsByTagName("img");

pageImg[0].addEventListener("mousemove", e => {
  e.target.style.display = "none";
});

//#5 mouseleave
pageImg[1].addEventListener("mouseleave", e => {
    e.target.style.display = 'none';
});

//#6 drag
pageImg[2].addEventListener("drag", e =>{
    console.log('Img is dragged!!');
    e.target.style.opacity = '.5';
});

//#7 resize
let midTitle = document.querySelector(".text-content p");

window.addEventListener("resize", e => {
  midTitle.textContent = "You changed window size!!!";
});

//#8 focus
const navFocus = document.querySelectorAll('.nav-link');

navFocus[2].addEventListener('focus', e => {
    navFocus[2].textContent='WHY YOU CLICK!?';
    e.target.style.backgroundColor = "grey";
})

//#9 keydown
const keyPress = document.addEventListener('keydown', e => {
    alert(`You pressed the ${e.key} key`);
})

//#10 auxclick
const myFoot = document.querySelector(".footer");

myFoot.addEventListener("auxclick", e => {
    myFoot.style.color = "pink";
});

// preventdefault
const preDef = document.querySelectorAll('nav a');
    preDef.forEach( x => {
        x.addEventListener('click', e =>{
            e.preventDefault();
        });
});

