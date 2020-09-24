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
    const metrics = Object.keys(obj);
    for (metric of metrics) {
        //Makes the first letter of the key of Tomagatchi upper case
        const upperCasemetric = metric.charAt(0).toUpperCase() + metric.slice(1,metric.length)
        //Logs all keys and values of Tomagotchi
        console.log(`${upperCasemetric}: ${obj[metric]}`);
    }
})