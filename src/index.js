import './less/index.less'

// Your code goes here!


// click
const colorButton = document.querySelectorAll(".btn");

console.log(colorButton)

colorButton.forEach(element => element.addEventListener("click", function() {
  element.style.backgroundColor = "green";
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
        alert (`Hey! You do not have permisson to copy ${text}!`)
})
});

// resize
window.addEventListener('resize', () => {
    alert ("Hey man don't resize me, thats not cool!");
});

console.log('test');



//

//scroll//
const bodyColr = document.querySelector('body');
window.addEventListener('scroll', () => {
    bodyColr.style.backgroundColor = "gray";
    setTimeout(function() {
        bodyColr.style.backgroundColor='';
    }, 500);
},false);

// window.addEventListener('keydown', evt => {
//     if(evt.code == 'KeyA') {
//         alert ('A is for Apple')
//     } else if (evt.code == 'KeyB') {
//         alert('B is for Bumblebee')
//     }
// })

// keydown
// window.addEventListener('keydown', evt => {
//     if(evt.code == 'KeyA') {
//         bodyColr.style.backgroundColor = "blue"
//     } else if (evt.code == 'KeyB') {
//         alert('B is for Bumblebee')
//     }
// })


//keydown
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  bodyColr.addEventListener("keydown", evt => {
      if(evt.code == 'KeyA') {
        setBg();
      } else if (evt.code == 'KeyB') {
        bodyColr.style.backgroundColor = ""
      }
  });
  

  //keyup
  window.addEventListener('keyup', () => {
    setBg();
})


//wheel
  function zoom(event) {
    event.preventDefault();
  
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -2;
    }
    else {
      // Zoom out
      scale /= event.deltaY * 2;
    }
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('div');
  document.onwheel = zoom;

