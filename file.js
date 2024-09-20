function power(x, m) {
    let result = 1;
    for (let i = 0; i < m; i++) {
        result *= x;
    }
    return result;
}


console.log(power(2, 3)); // 8
console.log(power(5, 4)); // 625


function power_two(x, m) {
    let result = 1;

    if (m === 0) {
        return 1; 
    }

    let absM = Math.abs(m);
    for (let i = 0; i < absM; i++) {
        result *= x;
    }

    if (m < 0) {
        return 1 / result; 
    }

    return result;
}


console.log(power_two(2, -3));  // 0.125
console.log(power_two(5, 0));   // 1
console.log(power_two(3, 2));   // 9


function getCounter() {
    let count = 0;

    function counter() {
        return ++count; 
    }

    counter.reset = function() {
        count = 0;  
    };

    return counter;
}


let myCounter = getCounter();

console.log(myCounter()); // 1
console.log(myCounter()); // 2
myCounter.reset();       
console.log(myCounter()); // 1
