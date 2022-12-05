let msg = document.getElementById("jack")
let card = []
let sum = 0
let blackJack = false
let isAlive = true
let cards = document.getElementById("edit")
let player = {
    name: "suyesh",
    chips: 169
}
let playerEl = document.getElementById("playerinfo")
playerEl.innerText = player.name + ": $" + player.chips
function getRandom(){
    let randoms = Math.floor(Math.random()*13)+1
    if(randoms ===1){
        return 11
    }
    else if(randoms > 10){
        return 10
    }
    else{
        return randoms
    }

}

function start(){
    let num1 = getRandom()
    let num2 = getRandom()
    card = [num1 , num2]
    sum = num1 + num2
    render()  
}
  
function render(){
    cards.innerText = "cards:" 
    for(i=0; i<card.length; i++){
    cards.innerText += " " + card[i]
    document.getElementById("sum").textContent = "sum:" + sum

    }
     

if (sum < 20){
    msg.textContent= "no need to be afraid my friend"   
}
else if (sum === 20){
    msg.textContent= "do you want to log out??"
    blackJack = true
    
}
if(sum > 20){
    msg.textContent= "shit mf u ded"
    isAlive = false
}
}
function newcard(){
    if(isAlive == true && blackJack == false){
        console.log("here is yoour new card")
        let cardnew = getRandom()
        sum = sum + cardnew
        card.push(cardnew)
        
    }
  render()
   
}
