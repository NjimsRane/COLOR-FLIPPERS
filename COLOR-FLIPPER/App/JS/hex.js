const hexColor = [1,2,4,5,6,7,8,9,"a","b","c","d","e","f"];
const color = document.querySelector(".color");

function colors (){
    let hexValue ="#";
    for(let i = 0 ; i < 6 ; i++){
        hexValue += hexColor[getRandomColor()];
    }
    document.body.style.backgroundColor = hexValue;
    color.style.color = hexValue;
    color.textContent = hexValue;
}
//setInterval will change the color every 2 seconds. 
setInterval(colors,2000)

function getRandomColor(){
    return Math.floor(Math.random()*hexColor.length)
}