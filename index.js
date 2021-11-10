
let jonSnowAttack = 35;
let jamieLannisterAttack = 35;

let jonSnowHealth = 50;
let jonSnowDefence = 0;
let jamieLannisterHealth = 50;
let jamieLannisterDefence = 20;

if(jonSnowAttack < jamieLannisterAttack) {
    console.log("Jamie has the stronger attack!")
} else if(jonSnowAttack > jamieLannisterAttack){
    console.log("Jon has the stronger attack!")
} else {
    console.log("The attacks are equally powerful!")
}

jonSnowDefence += 25;

for(let i = 0; i < 5; i++){
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefence);
    if(jonSnowHealth <= 0){
        console.log("Jon has perished in battle...")
        break;
    } else {
        console.log(`Jon Snow's current health is ${jonSnowHealth}`)
    }
}




