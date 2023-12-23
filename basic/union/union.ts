let age: number | string = "false";
age = 23;

type poin = {
  x: number;
  y: number;
};

type loc = {
  long: number;
  lati: number;
};

const coordinateaa: poin | loc = { x: 10, y: 11 };

function qage(age: number | string): void {
  console.log(`you are ${age}`);
}

qage("23");

function calculatePayout(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", " "));
  }
  console.log(price * tax);

  return price * tax;
}

calculatePayout("$25", 10);


const num1 : number[] = [1,2,3,4,5,6,7,8,9];


//write code norrowunion for array 
const stuff : (number | string)[] = [2,"asc",3,"desc"]

let types : (poin | loc) [] =[];
 types.push({x:1,y:1})
 types.push({long:2,lati:2})

 console.log(stuff , types);
 

 //literals union types
 let zero : 0 =0;
 let mood : "happy" | "sad" = "happy";
 console.log(mood);
 mood = "sad"
console.log(mood);

type todayday = "monday" | "tuesday" | "wednesday";

let today : todayday = "tuesday";
console.log(today);

