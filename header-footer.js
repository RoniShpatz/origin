class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class = "header">
            <div class="logo">
                <a href="./index.html" >
                    <img src="./source/gifs/logo-small.gif" alt="doro logo">
                    <div>
                        <h1 class="logo-name">dror shpatz</h1>
                        <h2 class="logo-add">Motion Designer | Animator </h2>
                    </div>
                </a>
                </div>
                <div class="header-buttons">
                    <a href="./index.html" class="active" > Home </a>
                    <a href="./gifs.html" class="active" > GIFS </a>
                    <a href="./learning.html" class="active">Learning content</a>
                    <a href="./about.html" class="active"> About </a>
                </div>
            </header>
       
        `
        }
    }




customElements.define(`my-header`, MyHeader);



class MyHeaderSmall extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
       ` <header >
       <div class = "header-small">
        <div class="logo-small">
                <a href="./index.html" >
                    <div>
                        <h1 class="logo-name">dror shpatz</h1>
                        <h2 class="logo-add">Motion Designer | Animator </h2>
                    </div>
                </a>
                <button class="menu-button"><img src="./source/heroicons-dots_horizontal-basic.png"> </button>
            </div>
        </div>  
            </div>
            <ul class="menu">
            <li> <a href="./index.html"  > Home </a></li>
            <li> <a href="./gifs.html"  > GIFS </a></li>
            <li>  <a href="./learning.html" >Learning content</a></li>
            <li><a href="./about.html" > About </a></li>
        </ul>
        </header>`

    }
}

customElements.define(`my-header-small`, MyHeaderSmall );
const menuButton = document.querySelectorAll(`.menu-button`);

let isPressed = false;
const menu = document.querySelector('.menu');

function closeMenu() {
    menu.classList.remove(`open`);
    isPressed = false;
}


menuButton[0].addEventListener('click', function () {
    if (!isPressed) {
        menu.classList.add(`open`);
        isPressed = true;
    } else {
        closeMenu();
    }
});






const d = new Date();
const year = d.getFullYear();



class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-contiener">
                    <div>
                        <p id="name-footer"> Dror Shpatz<br> Motion Designer | Animator</p>
                        <p>
                            Ballyogan Road, Dublin, Ireland<br>
                            ${year}
                        </p>
                    </div>
                    <div class="info">
                        <a href="malito: shpatz84@gmail.com">shpatz84@gmail.com</a>
                        <p>+353-0879421073</p>
                    </div>
                    <div class="social">
                        <a href="https://api.whatsapp.com/send?phone=3530879421073">
                            <img src="./source/sociial/wattsap.webp" alt="watsaap link"></a>
                        <a href="https://dribbble.com/Drowzo"><img src="./source/sociial/dribble.png" alt="dribble link">
                        </a>
                        <a href="https://www.youtube.com/@drowzo">
                            <img src="./source/sociial/youtube.webp" alt="youtube link">
                        </a>
                        <a href="https://www.linkedin.com/in/dror-shpatz-01245656/?originalSubdomain=ie">
                            <img src="./source/sociial/linkin.webp" alt="youtube link">
                        </a>
                    </div>
            </div>


        </footer>
       
        `
        }
    }



customElements.define(`my-footer`, MyFooter);







class onlyBackButton extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
     `<div class="center-back">
    
     <a href="./index.html" class="back">Back</a>
     
     </div>`   
    }
}

customElements.define(`only-my-back`, onlyBackButton)


const links = document.querySelectorAll(`.header-buttons a`);
// console.log(links[0].getAttribute(`href`))

const link = window.location.pathname;
const newLink = link.split(`/`);
const pathLink = './' +newLink[newLink.length - 1];

links.forEach(link => {
   if (link.getAttribute(`href`) != pathLink) {
    link.classList.remove('active');
   } 
})

var Next = "";
var perv = "";
// const videos = ['./envite.html', './maytronics.html', `/alut.html`, `./matrix.html', './nebius.html', './cynet.html', './redecor.html', './wastless.html', './cellwise.html', './moving.html', './heaven.html', './mei.html', './pebli.html', './tel-avivi.html', './max.html', './tamir.html']


const arrayHref = ['./envite', './maytronics', `./alut`, './matrix', './nebius', './cynet', './redecor', './wastless', './cellwise', './moving', './heaven', './mei', './pebli', './tel-avivi', './max', './tamir'];

// function makeArrayOfHref(videos) {
//     videos.forEach(video => {
//         const href = video.getAttribute('href');
//         const newHref = href.split('/');
//         const strinfHerf = newHref[1]
//         arrayHref.push(`./` + strinfHerf);
//     });
//     return arrayHref;
    
// }


function getThePrevVideo(pathLink, arrayHref) {
   arrayHref.forEach((herf, index) => {
    if (pathLink == herf && index != 0 ) {
        perv = arrayHref[index - 1]
    } else if (pathLink == herf && index === 0) {
        perv = arrayHref[arrayHref.length - 1]
    } 
    
   })
   return perv
}

 getThePrevVideo(pathLink, arrayHref);
 console.log(perv)


function getNextVideo(pathLink, arrayHref) {
    arrayHref.forEach((herf, index) => {
        if (pathLink == herf && index != arrayHref.length - 1) {
            Next = arrayHref[index + 1]
        } else if (pathLink == herf && index == arrayHref.length -1) {
            Next = arrayHref[0];
        };
       })
       return Next
}

getNextVideo(pathLink, arrayHref);
console.log(Next)

 class backButton extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
     `<div class="center-back">
     <a href = ${perv} class="back" id="pre"> < Previous</a>
     <a href="./index.html" class="back">Back</a>
     <a href = ${Next} class="back" id="next"> Next > </a>
     </div>`   
    }
}

customElements.define(`my-back`, backButton)

class backButtonSmall extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<div class="center-back">
        <a href = ${perv} class="back" id="pre"> < </a>
        <a href="./index.html" class="back">Back</a>
        <a href = ${Next} class="back" id="next"> > </a>
        </div>` 
    }
}

customElements.define(`my-back-small`, backButtonSmall)