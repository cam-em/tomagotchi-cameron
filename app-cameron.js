const body = document.querySelector('body');

class Tomagotchi {
    constructor (age, hunger=1,sleepiness=1,boredom=1) {
        this.age = age
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
    }
}


document.addEventListener('DOMContentLoaded', ()=>{
    const obj = new Tomagotchi(10);
    console.log(body);
})