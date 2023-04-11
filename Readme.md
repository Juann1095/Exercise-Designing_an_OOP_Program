1. The Animal class' constructor will have two properties: color and energy 

2. The Animal class' prototype will have three methods: isActive(), sleep(), and getColor(). 

3. The isActive() method, whenever ran, will lower the value of energy until it hits 0. The isActive() method will also report the updated value of energy. If energy is at zero, the animal object will immediately go to sleep, by invoking the sleep() method based on the said condition. 

4. The getColor() method will just console log the value in the color property. 

5. The Cat class will inherit from Animal, with the additional sound, canJumpHigh, and canClimbTrees properties specific to the Cat class. It will also have its own makeSound() method. 

6. The Bird class will also inherit from Animal, but is own specific properties will be quite different from Cat. Namely, the Bird class will have the sound and the canFly properties, and the makeSound method too. 

7. The HouseCat class will extend the Cat class, and it will have its own houseCatSound as its special property. Additionally, it will override the makeSound() method from the Cat class, but it will do so in an interesting way. If the makeSound() method, on invocation, receives a single option argument - set to true, then it will run super.makeSound() - in other words, run the code from the parent class (Cat) with the addition of running the console.log(this.houseCatSound). Effectively, this means that the makeSound() method on the HouseCat class' instance object will have two separate behaviors, based on whether we pass it true or false. 

8. The Tiger class will also inherit from Cat, and it will come with its own tigerSound property, while the rest of the behavior will be pretty much the same as in the HouseCat class. 

9. Finally, the Parrot class will extend the Bird class, with its own canTalk property, and its own makeSound() method, working with two conditionals: one that checks if the value of true was passed to makeSound during invocation, and another that checks the value stored inside this.canTalk property.  