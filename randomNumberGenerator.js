/**
 * The approach I followed here is given below:
 * 1. Initialize a Hash Map with all the values in the given range.
 *      -- I have used Hash Map here so that I can keep track which number is already used so that there is no duplicate numbers in the list.
 *      Moreover accessing element in hash map is faster than regular list or array.
 * 2. Generate a random number in between the given range
 * 3. Generated random number map to the Hash Map. If the number exists in the hash map, pickup that number, adds it to our result list and remove from the hash map.
 * 4. Step 3 and 4 continues until the initial hash map becomes empty.
 */

class RandomNumberGenerator {

    constructor (min, max) {
        this.min = min;
        this.max = max;
        this.allNumbers = new Map();
        this.result = [];

        this.init();
    }

    randomNumbergenerator(){
        const random = Math.floor(Math.random()*(this.max+1 - this.min)) + this.min;
        return random;
    }

    init(){
        for (let i=this.min; i<=this.max; i++) {
            this.allNumbers.set(i, 1);
        }
    }

    getRandomNumbers() {
        while (this.allNumbers.size != 0) {
            const random = this.randomNumbergenerator();
            if (this.allNumbers.has(random)) {
                this.result.push(random);
                this.allNumbers.delete(random);
            }
        }

        return this.result;
    }

}

module.exports = RandomNumberGenerator;
