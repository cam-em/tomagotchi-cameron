const body = document.querySelector('body');

class Tomagotchi {
    constructor (age, hunger=1,sleepiness=1,boredom=1) {
        this.age = age
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
    }

    feed() {
        this.hunger = 1;
        console.log('Feeding...')
        console.log(`Hunger: ${this.hunger}`)
    }

    turnOffLights() {
        this.sleepiness = 1;
        console.log('Time for bed!')
        console.log(`Sleepiness: ${this.sleepiness}`)
    }

    play() {
        this.boredom = 1;
        console.log('It\'s playtime!')
        console.log(`Boredom: ${this.boredom}`)
    }

}

const obj = new Tomagotchi(10);

const displayMetrics = (obj) => {
    const metrics = Object.keys(obj);
    for (metric of metrics) {
        //Makes the first letter of the key of Tomagatchi upper case
        const upperCasemetric = metric.charAt(0).toUpperCase() + metric.slice(1,metric.length)
        //Logs all keys and values of Tomagotchi
        console.log(`${upperCasemetric}: ${obj[metric]}`);
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    displayMetrics(obj);

})