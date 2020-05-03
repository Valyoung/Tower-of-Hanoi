// Use the DOM property childElementCount to find how many disks are in a tower.
        
//         Use the DOM property lastElementChild to find the disk on top of a tower.
    
//             three arrays
//             to move a disk - pop off one array and add to another
            
//             add click handler for each tower

let handStatus = ""         //hand is where the disc picked up goes until it is placed on another tower.  handStatus values are "empty" and "full"
let hand = []               //what the disc is that is in the hand
const discHuge = ["red", "4", "huge"]
const discLarge = ["purple", "3", "large"]
const discMedium = ["yellow", "2", "medium"]
const discSmall =  ["blue" ,"1", "small"]
const empty = ["empty"]   //array to place in "hand" when hand is empty
const drawTowerLeft = document.getElementById("drawTowerLeft")
const drawTowerMiddle = document.getElementById("drawTowerMiddle")
const drawTowerRight = document.getElementById("drawTowerRight")

let towerLeft = []    //array holding 0 - 4 discs
let towerMiddle = []      //array holding 0 - 4 discs
let towerRight = []       //array holding 0 - 4 discs
let targetTower = towerLeft       //whichever tower has been clicked by the user.  array.  starts as left by default
let targetTowerDiv = document.getElementById("drawTowerLeft")  //need to start with a div assigned.

function resetTower() {
    hand = []
    handStatus = "empty"
    
    towerLeft = [discHuge, discLarge, discMedium, discSmall]
    targetTowerDiv = drawTowerLeft
    targetTower = towerLeft
    drawTower(document.getElementById("drawTowerLeft"))
    
    towerMiddle = []
    targetTowerDiv = drawTowerMiddle
    targetTower = towerMiddle
    drawTower(document.getElementById("drawTowerMiddle"))
    
    towerRight = []
    targetTowerDiv = drawTowerRight
    targetTower = towerRight
    drawTower(document.getElementById("drawTowerRight"))

}




function towerLeftClick() {
    targetTower = towerLeft
    targetTowerDiv = drawTowerLeft
    decideToPickUpOrPutDown(targetTower)
    updateGraphicsOnClick(targetTowerDiv)        
}

function towerMiddleClick() {
    targetTower = towerMiddle
    targetTowerDiv = drawTowerMiddle
    decideToPickUpOrPutDown(targetTower)
    updateGraphicsOnClick(targetTowerDiv)        
}

function towerRightClick() {
    targetTower = towerRight
    targetTowerDiv = drawTowerRight
    decideToPickUpOrPutDown(targetTower)
    updateGraphicsOnClick(targetTowerDiv)        
}




function checkIfTowerIsEmpty(tower) {
    if (tower.length === 0) {
        window.alert("That tower is empty.  You cannot pick up a disc from there.  Please select another tower.")
        return true
    }
    else {
        return false
    }
}


function pickUpTopDisc(tower) {
    if (checkIfTowerIsEmpty(tower)) { return }
    handStatus = "full"
    hand = tower[tower.length-1]
    var removed = tower.pop()
}


function putDiscOnTower() {
    // var legal = isThisMoveLegal()
    if (isThisMoveLegal() == false){ 
        window.alert("Sorry, you cannot place a larger disc on a smaller one.  Please select another column.")
        return }
    console.log(isThisMoveLegal())    
    handStatus = "empty"
    targetTower.push(hand)
    hand = empty
    checkForWin()
}

function isThisMoveLegal() {
if (targetTower.length == 0) {
    console.log("target tower is empty. move is permitted")
    return true
} else {
    console.log("top piece is: " + targetTower[targetTower.length-1])
    var topPiece = targetTower[targetTower.length-1]
    console.log("top piece length =" + topPiece[1])
    console.log("hand length is  " + hand[1])
    if (hand[1] < topPiece[1]) {
        console.log("hand is smaller than top piece.  move is legal")
        return true
    } else
    return false
}
}




function checkForWin() {
    if (towerMiddle.length === 4) {
        window.alert("You won by moving all discs to the middle column!  Press OK to reset the game.")
        resetTower()
    }  else if (towerRight.length === 4) {
        window.alert("You won by moving all discs to the right column!  Press OK to reset the game.")
        resetTower()
    }
    else return
}



function decideToPickUpOrPutDown ()  {
    if (handStatus == "empty") {
        pickUpTopDisc(targetTower)
    } else {
        putDiscOnTower(targetTower)
    }
}

function updateGraphicsOnClick(tower) {
    drawTower()
    drawHand()
}

function drawTower() {
    targetTowerDiv.innerHTML = ""     //remove old discs
    for (let i = 0; i < targetTower.length; i++) {
        drawDiscs(targetTower[i])
    }
}

function drawDiscs(disc) {
    var discToDraw = document.createElement("div")
    discToDraw.id = disc[2]
    targetTowerDiv.appendChild(discToDraw)
}


function drawHand() {
    
    handToDraw = document.getElementById("hand")
    handToDraw.innerHTML = ""
    divInHand = document.createElement("div")
    textToDisplayInHand = hand[0]      //assigns the color of the disc in the hand to "textToDisplayInHand"
    divInHand.id = hand[2]            //assigns an id to what is in your hand, as the second item in the array for the disc
    handToDraw.appendChild(divInHand)
}

document.getElementById("drawTowerLeft").addEventListener("click", towerLeftClick)
document.getElementById("drawTowerMiddle").addEventListener("click", towerMiddleClick)
document.getElementById("drawTowerRight").addEventListener("click", towerRightClick)






resetTower()


//=================================================================
//=================================================================
//
//                 Still Left To DO
//=================================================================
//=================================================================


//                     determine if they can move a disc onto a tower (is it a legal move?)

//             win: if one of the other two towers has all 4 discs
//                 function check if any tower has 4 discs
//                 alert when we win


//             design the towers on the page
//                 Make each tower a flex box that stacks elements from bottom to top using the following CSS properties:
//                 {
    //                     display: flex;  
    //                     flex-direction: column-reverse;  
    //                     align-items: center;
    //                 }
    
    //                 make each disc appear and look nice
    //                 make each tower appear and look nice

    //                 draw the hand disc somewhere on the page, be able to make it appear and disappear depending if you have a disc in your hand or not

    //                 write HTML page for the divs
                
    