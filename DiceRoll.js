const btnEl = document.getElementById("btn");
const containerEl = document.querySelector(".container");
const diceEl = document.querySelector(".dice")
const styleSheet = document.styleSheets[0];
const frontEl = document.querySelector(".front");
const h1El = document.querySelector("h1");




const face = [
    "&#9856;",
    "&#9857;",
    "&#9858;",
    "&#9859;",
    "&#9860;",
    "&#9861;",
]
diceEl.style.display = "none";


btnEl.addEventListener("click", ()=>{
    downAction()
    diceEl.style.animation = "none";
    requestAnimationFrame(()=>{
        updataDice()
        diceEl.style.animation = "rotate  3s ease forwards";
    })
    
})

function updataDice(){
    containerEl.style.boxShadow = "none"
    const randomFace = Math.floor(Math.random()*face.length);
    styleSheet.insertRule(`
        @keyframes rotate{
            0%{
                transform:rotateX(0deg) rotateY(0deg);
            }
            100%{
                transform:rotateX(360deg) rotateY(360deg);
            }
        }`)
    setTimeout(() => {
        frontEl.innerHTML = face[randomFace];
        setTimeout(() => {
            containerEl.style.boxShadow = "4px 8px 10px rgba(0,0,0,.3)"
        },500);
        
    }, 1500);
}

function downAction(){
    containerEl.style.top = "300px";
    containerEl.style.transition = "top 1.5s ease-out";
    h1El.style.top = "150px";
    h1El.style.transition = "top 1.5s ease-out";
    setTimeout(()=>{
        diceEl.style.display = "flex"
    }, 100)
}