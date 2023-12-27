//generic
const arr: number[] = [];
const arr2: Array<number> = [];
const arr3: Array<string> = [];

//helloworld generics  function

function helloworld(msg: string): string {
  return msg;
}

const result = helloworld("hello");
console.log(result);

function identifyOne(val: boolean | number): boolean | number {
  return val;
}
function identifyTwo(val: any): any {
  return val;
}
//generics in function
function identifyThree<Type>(val: Type): Type {
  return val;
}

identifyThree("3");

//generics in array
interface bottle {
  name: string;
  price: number;
}
function identify4<T>(bottle: T[]): T {
  //returning a number of index
  const index = 1;
  return bottle[index];
}
// { , }for knowing this is  generic type
const getMoreSearch = <T>(bottle: T[]): T => {
  const myIndex = 1;
  return bottle[myIndex];
};

// extends , in generics
function getMore5<T, U extends number>(value: T, value2: U): object {
  console.log(value,value2);
  
  return { value, value2 };
}

getMore5(4,5.6);

interface database {
  connection : string;
  userName : string;
  password : string;
}

function getMore6<T , U extends database > (value: T, value2: U) : object {
  console.log(value , value2);
  
return { value, value2 };
}


getMore6(4 ,{
  connection: "qwerty",
  userName: "eee",
  password: "www"
})

//class use in generics

interface Quiz {
  name: string;
  Type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}


class Sellable <T> {
  public cart :T[] = [];

  addToCart(prod :T){
    this.cart.push(prod);
  }
}
