//  alert("click anywhere to start")
//  document.addEventListener('click',readyToPlay())
//  function readyToPlay (){
// let play = prompt("Do you want to play?")
// if(play === "yes"){
//     battle()
// } else{
//     console.log("are you sure?")
// }
//  }
class Earth{
    constructor(ship){
      this.ship = ship;
      this.hull = 20;
      this.firepower = 5;
      this.accuracy = .7;
    }
    attack(enemy){
      let ranNum = Math.random()
     if (ranNum < this.accuracy){
       console.log("hit")
      enemy.hull -= this.firepower;
    }
       if(enemy.hull <= 0){
        console.log(`${enemy.alien_ship} is dead`)}
        else 
        {console.log("missed")}
        }
}
class Alien{
   constructor(alienship){
      this.alien_ship = alienship;
       this.hull = Math.floor(Math.random()*6)+3;
       this.firepower = Math.floor(Math.random()*3)+2;
       this.accuracy = (Math.floor(Math.random()*2) + 6)/10;
   }
    
   attack(enemy){
      let ranNum = Math.random()
     if (ranNum < this.accuracy){
      enemy.hull -= this.firepower;
    }
       if(enemy.hull <= 0){
        console.log(`${enemy.ship} is dead`)}
        else 
        {console.log("missed")}
        }
}
const enemyImgs = document.getElementById("enemyimage")
let earthShips = new Earth('earth')
let alienShipsArr = [new Alien('E.T'), new Alien('Paul'), new Alien('Megamind'), new Alien('Yoda'), new Alien('grogu'), new Alien('jr')]
 
// function to create aliens 
// for (let i=0; i < 6; i++){
//  let newAliens = new Alien()
// //  const newAlienImg = document.createElement('img');
// //  newAlienImg.setAttribute('src', "/images/enemy.gif")
// //  enemyImgs.appendChild(newAlienImg)
//   alienShipsArr.push(newAliens)
 
//  }
let battle = () => {
    while(alienShipsArr.length > 0 || earthShips.length > 0){
      if(earthShips.hull > 0){
      earthShips.attack(alienShipsArr[0])}
     
      else{
        console.log("retreat")
        }
        if (alienShipsArr[0].hull > 0){
          alienShipsArr[0].attack(earthShips)
          console.log("alien attack")}
           if(alienShipsArr[0].hull <= 0){
        alienShipsArr.shift()}
      }
      console.log(alienShipsArr.length)
         let attack_retreat = prompt(`your health is ${earthShips.hull}, attack or retreat`)
         if (attack_retreat=== "attack"){
            earthShips.attack(alienShipsArr) }
           else {
            alert("over")
            }
            if (alienShipsArr.length === 0){
                console.log("you Won")
            }
   }


alert("slide your mouse over the Enemy Image to start,and Open your console!")
function readyToPlay (){
    let play = prompt("Do you want to play?")
  if(play === "yes"){
   setTimeout= (battle(), 5000)
} else{
    console.log("are you sure?")
}
 }
 enemyImgs.addEventListener("mouseover",readyToPlay)