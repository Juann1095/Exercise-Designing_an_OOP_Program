//-----Designing an OOP Program-----
/* Exercise creating classes in JavaScript, using all the concepts learned before using the following inheritance hierarchy

            Animal
            /   \
            Cat  Bird
            /  \    \
    HouseCat  Tiger  Parrot

Essential Keywords:
 -extends : extends keyword allows me to inherit from an existing class
 -super: The super keyword is used to call the constructor of its parent class to access the parent´s properties and methods. The super keyword allows me to "borrow"
 functionality from a super-class, in a sub-class. 
*/
 class Animal {

 }
 //This is how the extends keyword is used to setup  inheritance relationships.
class Cat extends Animal{

}

//Coding the --Animal-- Class
class Animal{
    constructor(color = 'yellow', energy=100){
        this.color=color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy>0){
            this.energy -=20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy==0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

//Each animal object, no matter which one it is, will share the properties of --color-- and --energy--

//Cat and Bird classes:

class cat extends Animal {
    constructor(sound='purr', canJumpHigh = true, canClimbTrees=true, color, energy){
        super(color,energy);
        this.sound=sound
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound(){
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound='chirp', canFly=true, color, energy){
        super(color,energy);
        this.sound= sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

//3 Remaining classes: HouseCat, Tiger, Parrot

class HouseCat extends Cat{
    constructor(houseCatSound = "meow",sound,canJumpHigh,canClimbTrees,color,energy){
        super(sound,canJumpHigh,canClimbTrees,color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option){
        if (option){
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat{
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound,canJumpHigh,canClimbTrees,color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk=false, sound, canFly, color, energy){
        super(sound,canFly,color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option){
        if (option) {
            super.makeSound();
        }
        if (this.canTalk){
            console.log("I´m a talking parrot!")
        }
    }
}

//Now that we´ve set up this entire inheritance structure, we can build various animal objects.

//For example, i can build two parrots: one that can talk, and the other that can´t

var polly = new Parrot(true); // we´re passing 'true' to the constructor so that polly CAN talk
var fiji = new Parrot (false); // we´re passing 'false' to the constructor so fiji CAN´T talk

polly.makeSound(); // 'chirp', 'I´m a talking parrot!'
fiji.makeSound(); // 'chirp'

polly.color; //yellow
polly.energy; //100

polly.isActive(); //Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white",200); //setting all the custom properties
penguin; //Bird {color: 'black and white', energy:200, sound: 'shriek', canFly:false}

penguin.sound; //'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; //200
penguin.isActive(); //Energy is decreasing, currently at: 180

//Also I can build a pet cat:
var leo = new HouseCat();

//Now I can have --leo-- purr:
//Leo, no purring please:
leo.makeSound(false); //meow

//leo, both purr and meow now:
leo.makeSound(true); //purr, meow

//Additionally, I can build a tiger:
var cuddles = new Tiger();

//My --cuddles-- tiger can purr and roar, or just roar:
cuddles.makeSound(false); //Roar!
cuddles.makeSound(true); //purr, Roar!

