//ES 6 version of Ninja
class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strenght = 3;
        //this.sayName = function () {console.log (this.name)
        
        } 
        sayName () {
            console.log (this.name)
        }
        showStats () { 
            console.log (`Name: ${this.name}, Health ${this.health}, Strengh: ${this.strenght} ,Speed: ${this.speed}`);
        }
        drinkSake () {
            this.health += 10 ;
        }
        punch (ninja) {
            ninja.health -= 5; 
        }
        
        }


class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strenght = 10;
        }
        speakWisdom (ninja) {
            ninja.drinkSake() ;
            console.log('We do not train to be merciful here. Mercy is for the weak. Sweep the leg');
            
        }
    }



const ninja1 = new Ninja("Hyabusa");
const blueNinja = new Ninja("Goemon");
//blueNinja.showStats();
const redNinja = new Ninja("Bill Gates");
//redNinja.punch(blueNinja);
// ninja1.sayName();
ninja1.showStats();
//blueNinja.showStats();
//redNinja.showStats();
//console.log(blueNinja);

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom(ninja1);
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
ninja1.showStats();
