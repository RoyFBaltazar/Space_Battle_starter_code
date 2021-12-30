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
let earthShips = new Earth('earth')
let alienShipsArr = []
// function to create aliens 
for (let i=0; i < 6; i++){
 let newAliens = new Alien()
 alienShipsArr.push(newAliens)
 }
let battle = () => {
 while (alienShipsArr[5] !== 0){
   if (earthShips.hull > 0){
     if (Math.random() < .7){
       console.log("hit")
       earthShips.attack(alienShipsArr[0])
     }
       }
       else{console.log("over")
         }
     }
     if (alienShipsArr[0].hull > 0){
       alienShipsArr.attack(earthShips)}
       
       else  {
         alienShipsArr.shift()
         if (alienShipsArr.length === 0){console.log("its over")}}
         let attack_retreat = prompt ("attack or retreat")
         if (attack_retreat=== "attack"){
           continue}
           else {
             console.log("over")}
   }
 