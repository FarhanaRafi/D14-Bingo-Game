function onNumClick(event){
//let clickedNumber = document.getElementById("random-num")
//let random = Math.random()*clickedNumber.innerText
document.getElementById("random-num")=Math.floor(Math.random() * 77);
}

function onLoadActions(){
 for(let num = 1; num <= 76; num++){
    let numberNode = document.createElement("div")
    numberNode.classList.add("number")
    numberNode.innerText = num
    document.getElementById("bingo-number").appendChild(numberNode)
 }
}
window.onload = onLoadActions