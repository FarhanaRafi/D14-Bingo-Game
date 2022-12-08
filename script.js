
let calledNum = []
function onNumClick(){
   let randomColor = Math.floor(Math.random()*16777215).toString(16)
   let selectedNum = selectBlock()
   
   let blocks = document.querySelectorAll("#bingo-number div")
 
  blocks[selectedNum].style.backgroundColor ="#" + randomColor
  
}
function selectBlock(){
   let randomNum = Math.floor(Math.random()*77)
   if(calledNum.includes(randomNum)){
      return selectBlock()
   }else{
      calledNum.push(randomNum)
      return randomNum
  }
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