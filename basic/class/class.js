//example class working
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet(otherPersonName) {
    return `Hello, ${this.name}! Meet ${otherPersonName}.`;
  }
}
const user = new Person("xaini", 25);
const greeting = user.greet("John");
console.log(greeting);

//class playes details
class Players {
    constructor(fName ,lName){
        console.log("fuck off js--------"); 
        this.fname  = fName;
        this.lName = lName;
    }
  name() {
    console.log("xaini");
  }
  taunt() {
    console.log("funck this");
  }
}
const player1 = new Players("check" ,"ing");
player1.taunt();
console.log("fname --",player1.fname)

const player2 = new Players();
player2.name();


//conatructor in class

const player3 = new Players();
player3.taunt();