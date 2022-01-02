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
      enemy.hull -= this.firepower;
    alert("hit")}
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
const enemyImgs = document.getElementById("enemyimage")
let earthShips = new Earth('earth')
let alienShipsArr = []
// function to create aliens 
for (let i=0; i < 6; i++){
 let newAliens = new Alien()
//  const newAlienImg = document.createElement('img');
//  newAlienImg.setAttribute('src', "/images/enemy.gif")
//  enemyImgs.appendChild(newAlienImg)
  alienShipsArr.push(newAliens)
 
 }
let battle = () => {
 while (alienShipsArr.length > 0){
   if (earthShips.hull > 0){
     if (Math.random() < .7){
       earthShips.attack(alienShipsArr)
      
     }
       }
       else{
           alert("missed")
           console.log("try again ")
         }
         console.log(`${earthShips.hull} ${alienShipsArr.hull}`)
     }
     if (alienShipsArr.hull > 0){
       alienShipsArr.attack(earthShips)}
       
       else  {
         alienShipsArr.shift()
         if (alienShipsArr.length === 0){console.log(alienShipsArr.length)}}
         let attack_retreat = prompt(`your health is ${earthShips.hull}, attack or retreat`)
         if (attack_retreat=== "attack"){
            earthShips.attack(alienShipsArr) }
           else {
            alert("over")
            }
   }
//    alert("click anywhere to start")
//    document.addEventListener("click",readyToPlay())
//    const myTimeout = setTimeout(readyToPlay(), 20000)



alert("slide your mouse over t0 the Enemy Image to start")
function readyToPlay (){
    let play = prompt("Do you want to play?")
  if(play === "yes"){
   setTimeout= (battle(), 5000)
} else{
    console.log("are you sure?")
}
 }
 enemyImgs.addEventListener("mouseover",readyToPlay)