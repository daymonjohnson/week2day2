function setUp(){
    let playerHealth= 40;
    let grantTheAlmightyHealth= 10;
    let grantTheAlmightyLives=3;
    startCombat(playerHealth,grantTheAlmightyHealth,grantTheAlmightyLives);
}
function startCombat(playerHealth,grantTheAlmightyHealth,grantTheAlmightyLives){
    let play= prompt("do you want to play?");
    if(play==="yes"){
    let goOn = true;
    while(goOn===true){
        var choice= prompt("Would you like to attack (a) or quit (q)?");
        if(choice==="a"){
            let userDamage= getDamage(1,5);
            let grantDamage= getDamage(1,5);
            if(grantTheAlmightyHealth>0){
                grantTheAlmightyHealth-=userDamage;
                console.log("Grant The Almighty has been hit he now has a health of "+grantTheAlmightyHealth);
            }
            else if(grantTheAlmightyHealth<=0){
                console.log("You have taken a life from the almighty grant he has "+grantTheAlmightyLives);
                grantTheAlmightyLives--;
                grantTheAlmightyHealth=10;
            }
            if(playerHealth>0){
            playerHealth-=grantDamage;
            console.log("player takes "+grantDamage+ " from grant, player health = "+playerHealth);
            }
            goOn=isGameOver(playerHealth,grantTheAlmightyHealth,grantTheAlmightyLives);
        }
        else if(choice==="q"){
            console.log("Quitter, goodbye thankks for playing");
            goOn=false;
        }
        else{
            console.log("Didn't quite get that, pls try again.");
        }
    

    }
}
}
function isGameOver(playerHealth,grantTheAlmightyHealth,grantTheAlmightyLives){
        console.log("the player has "+playerHealth);
        console.log("grant The Almighty has "+ grantTheAlmightyHealth);
        if(grantTheAlmightyLives=0){
        console.log("You have defeated grant you win ");}
        else if(playerHealth<=0){
        console.log("Grant wins, you lose.");
        return false;   
    }
       else{ 
           return true;}
    }

function getDamage(min,max){
    let damage=Math.floor(Math.random()*5)+1;
    return damage;
}
setUp();

