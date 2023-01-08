//function calling function

function greeting(){
    let message = 'hi'

    function sayHi(){
        console.log(message)
    }

    return sayHi;
}

let hi = greeting();
hi()
