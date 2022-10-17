const colors = ["rebeccapurple","#f15025","#202945","#232b32"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber();
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
    btn.style.color = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}