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
     if (Math.random() < this.accuracy){
      enemy.hull -= this.firepower}
       if(enemy.hull <= 0){
        console.log(`${enemy.ship} is dead`)}
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
     if (Math.random() < this.accuracy){
      enemy.hull -= this.firepower}
       if(enemy.hull<=0){
        console.log(`${enemy.ship} is dead`)}
        else 
        {console.log("missed")}
        }
}
const enemyImgs = document.getElementById('enemyImg')
let earthShips = new Earth('earth')
let alienShipsArr = []
// function to create aliens 
for (let i=0; i < 6; i++){
 let newAliens = new Alien()
//  const newAlienImg = document.createElement('img');
//  newAlienImg.setAttribute('src', "/images/enemy.gif")
//  enemyImgs.appendChild(newAlienImg)
//  alienShipsArr.push(newAliens)
 
 }
let battle = () => {
 while (alienShipsArr > 0){
   if (earthShips.hull > 0){
     if (Math.random() < .7){
       console.log("hit")
       earthShips.attack(alienShipsArr)
     }
       }
       else{console.log("over")
         }
     }
     if (alienShipsArr.hull > 0){
       alienShipsArr.attack(earthShips)}
       
       else  {
         alienShipsArr.shift()
         if (alienShipsArr.length === 0){console.log("its over")}}
         let attack_retreat = prompt(`your health is ${earthShips.hull}, attack or retreat`)
         if (attack_retreat=== "attack"){
            earthShips.attack(alienShipsArr) }
           else {
            alert("over")
            }
   }
//    alert("click anywhere to start")
   document.addEventListener('click',readyToPlay())
   function readyToPlay (){
  let play = prompt("Do you want to play?")
  if(play === "yes"){
    battle()
} else{
    console.log("are you sure?")
}
 }