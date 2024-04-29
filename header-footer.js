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

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="footer-contiener">
                <div>
                    <p id="name-footer"> Dror Shpatz<br> Motion Designer | Animator</p>
                    <p>
                        Ballyogan Road, Dublin, Ireland<br>
                        2023
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

class backButton extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
     `<div class="center-back">
     <a href="./index.html" class="back">Back</a>
     </div>`   
    }
}

customElements.define(`my-back`, backButton)


const links = document.querySelectorAll(`.header-buttons a`);
console.log(links[0].getAttribute(`href`))

const link = window.location.pathname;
const newLink = link.split(`/`);
const pathLink = './' +newLink[newLink.length - 1];

links.forEach(link => {
   if (link.getAttribute(`href`) != pathLink) {
    link.classList.remove('active');
   } 
})

 