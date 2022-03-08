import './less/index.less'

// Your code goes here!


// click
const colorButton = document.querySelectorAll(".btn");

console.log(colorButton)

colorButton.forEach(element => element.addEventListener("click", function() {
  element.style.backgroundColor = "red";
}));

// colorButton.addEventListener("click", function() {
//     colorButton.style.backgroundColor = "red";
// });

// dblclick

    // single button
    // errorButton.addEventListener("dblclick", function() {
    //     alert ('Do not double click.');
    // });  

const errorButton = document.querySelectorAll(".btn");
errorButton.forEach(el => el.addEventListener("dblclick", () => {
    alert ('Do not double click.')
}))



// mouseover

    //single link
    // navChg.addEventListener("mouseover", () => {
    //     navChg.style.color = "green";
    // })

const navChg = document.querySelectorAll(".nav-link");

navChg.forEach(el => el.addEventListener("mouseover", () => {
    el.style.color = "blue"
    setTimeout(function() {
        el.style.color = "";
      }, 500);
    }, false)
);

// load
window.addEventListener('load', () => {
    alert ("This alert is because of what you did, which was load the page.")
})

const header = document.querySelector("header");


// copy
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        header.textContent += text
    })
})

console.log('test');