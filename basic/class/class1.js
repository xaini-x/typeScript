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
  //static on main class only cant access or change 
  static description = "Players with names  ";
  // #score represents the player's score, access only inside of class
  #score = 0;
  numLife = 10;
  constructor(fName, lName) {
    console.log("cfuck off js--------");
    this.fname = fName;
    this.lName = lName;
  }
   getScore() { return this.#score}
  updateScore(newScore) { this.#score  = newScore; }
  loseLife() {
    this.numLife -= 1;
  }
  name() {
    console.log("xaini");
  }
  taunt() {
    console.log("funck this");
  }

  //getter in class
get fullName() { return `${ this.fname} ${this.lName}` }
get CurrentScore() { return this.#score}
//setter in class
set score(newScore){ if(newScore < 0) {
  throw new Error("greater than 0");
}
this.#score = newScore;
}
}
const player1 = new Players("check", "ing");
player1.taunt();
console.log("fname --", player1.fname);

const player2 = new Players("check", "thing");
player2.name();
player2.loseLife();
const player3 = new Players();
player3.taunt();
console.log(player2.getScore());
player2.updateScore(28)
console.log(player2.getScore())
console.log("fullname ",player1.fullName);
console.log(player2.CurrentScore);
player2.score = 22
console.log(player2.CurrentScore);
console.log(Players.description);

class adminPlayer extends Players {
isAdmin = true;
}
const admin = new adminPlayer("high" ,"on-weed");
console.log(admin);