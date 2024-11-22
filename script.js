// använd INTE var utan let och const
// använd inte == utan === och !== etc

let player = {
    name: "Foppa",
    age:53,
    jersey: 21,

    play(){
        alert('Foppa spelar match');
    }
};





player.age = 12;
player.play();
//player.team = "Colorado";
console.log(player.age);



function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
  }
  
  let john = new User("John");
  john.name = "sdasdas"


  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  










function add(tal1,tal2){
  
    return tal1 + tal2;
}




// const addFunc = (tal1,tal2)=>{
//     return tal1+tal2;
// }

// let x2 = addFunc(111,222)

let x = add(12,13)

let i = 12;

console.log('Start')

i = i + 1;

if(i !== '13'){
    console.log('13')
}else{
    console.log('ej 13')
}


i = "Stefan";

;
