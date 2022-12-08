
let numberToCall = []
for(let i = 1; i<=77; i++) {
   numberToCall.push(i);
}

function onNumClick(){
   let randomColor = Math.floor(Math.random()*16777215).toString(16)
   
   let randomIndex = Math.floor(Math.random()*numberToCall.length)
   let randomNumber = numberToCall[randomIndex]

   numberToCall.splice(randomIndex, 1)


   let blocks = document.querySelectorAll("#bingo-number div")
 
   blocks[randomNumber].style.backgroundColor ="#" + randomColor

   let userBoards = document.getElementById("user-boards").children


   for(let i=0; i< userBoards.length; i ++ ) {
      if(userBoards[i].className == "user-board") {
         let nodes = userBoards[i].children;
         for(let j=0; j<nodes.length; j++) {
            if(nodes[j].innerText == randomNumber) {
               nodes[j].style.backgroundColor ="#" + randomColor
            }
         }
      }
   }
}

function onLoadActions(){
   for(let num = 0; num <= 76; num++){
      let numberNode = document.createElement("div")
      numberNode.classList.add("number")
      numberNode.innerText = num
      document.getElementById("bingo-number").appendChild(numberNode)
   }
}
let userBingoBoard = []
  

function generateBoard(){
   
   for(let i=0; i <= 76; i++){
      userBingoBoard.push(i)
   }

   let newUserBoard = document.createElement('div')
   newUserBoard.classList.add("user-board")

   for(let i = 0; i < 24; i++){
      
      let randomIndex = Math.floor(Math.random()*userBingoBoard.length)
      let randomNumber = userBingoBoard[randomIndex]
  
      userBingoBoard.splice(randomIndex, 1)
      let userBoardNode = document.createElement('div')
      
      userBoardNode.classList.add("number1")
      // let randomColor = Math.floor(Math.random()*16777215).toString(16) 
      // userBoardNode.style.backgroundColor = "#" + randomColor
      userBoardNode.innerText = randomNumber

      newUserBoard.appendChild(userBoardNode)
   
   }
   document.getElementById("user-boards").appendChild(newUserBoard)
}

function generateBoards(){
   userBingoBoard = []
   let inputNode = document.getElementById("number-input")
   let number = inputNode.value 
   for(i = 0; i < number; i++){
      let title = document.createElement("div")
      title.classList.add("board-title")
      title.innerText = `Board Number ${i + 1}`
      document.getElementById("user-boards").appendChild(title)
      generateBoard()
   }
}

function playGame(){
   onLoadActions()
}



window.onload = onLoadActions