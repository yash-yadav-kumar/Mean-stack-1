//function calling function

function greeting(){
    let message = 'hi'

    function sayHi(){
        console.log(message)
    }

    return sayHi;
}

let hi = greeting();
hi();


// let counter = 0;
function add(counter){
    let counter = 0;
    
    return function(){
        counter += 1
        return counter;
    }
}

console.log(add());
console.log(add());

let x1 = add(0);
console.log(x1)
let x2 = add(x1);
console.log(x2)

// console.log(add());
