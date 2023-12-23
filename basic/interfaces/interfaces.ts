interface Person {
  readonly id: number;
  name: string;
  age: number;
  girlfriend?: boolean;
  methods: () => string;
  // methods1 ():string
}

const pt: Person = {
  id: 1,
  name: "bond",
  age: 12,
  methods: () => {
    return "bond";
  },
};
const pt2: Person = {
  id: 2,
  name: "james",
  age: 13,
  girlfriend: false,
  methods: () => {
    return "james";
  },
};

console.log(pt, pt2);

//
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes1: Product = {
  name: "shoes",
  price: 100,
  applyDiscount(amount: number) {
    let newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

shoes1.applyDiscount(0.2);
console.log(shoes1.price);

//reopening interface
interface person {
  name: string;
}
interface person {
  designation: string;
  skill(): string;
}

const userq: person = {
  name: "james",
  designation: "developer",
  skill() {
    return "javascript";
  },
};

console.log(userq);

interface devType extends person {
    _type: "software"| "IOT" | "Blockchain";

}

const userJob: devType = {
    name: "james",
    designation: "developer",
    skill() {
      return "javascript";
    },
    _type: "IOT"
}
console.log(userJob);

//interface inheritance 
interface human {
    readonly id : number;
    name: string;
}

interface Employee {

readonly userid : number;
designation: string;
}

interface Engineer extends human , Employee{
    skill : string[];
    expirience: number;
}

const user4 : Engineer ={
name : "user4",
id : 1,
userid : 1,
designation : "developer",
skill : ["javascript", "javascript", "javascript", "javascript"],
expirience : 10
}

console.log(user4);
