//Ways to create objects
let animal = {};
animal.name = "tiger"
animal.sound = "roar"

//second way
let animal1 = {
    name: "Tiger",
    sound: "roar",
    eat:function(){
        
    }
}

let animal2 = {
    name: "Pig",
    sound: "Grunt",
    sleep:function(){
        
    }
}
animal2.name;

function Animal(name1, sound1){
    this.name = name1
    this.sound = sound1

    
}

let Tiger = new Animal("Tiger", "Roar");
let pig = new Animal("Pig", "Grunt");

console.log(Tiger.name);
console.log(pig.name);






