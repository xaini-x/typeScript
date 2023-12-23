const user = {
  name: "test",
  age: 18,
  boolean: true,
};

// objects in function arguments
function person(name: { firstName: string; lastName: string }): void {
  console.log(` hii ${name.firstName} " " ${name.lastName}`);
}

person({ firstName: "test", lastName: "test" });
//only defined objects are allowed
// person ({firstName :"test", lastName :"test", age :18})

// if initialize in var then provide to function are allowed but only defined object value will be read
let person1 = { firstName: "test", lastName: "test", age: 18 };
person(person1);

//define type for objects
type point = { x: number; y: number };
let coordinate: point = { x: 34, y: 34 };

//return object type
function makeRandomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

let detail = { name: "test", age: 18 };

/////////////////////////////////
const mysong: Song = {
  title: "unchained ",
  artist: "name",
  numStreams: 100,
  credits: {
    producer: "qwerty",
    writer: "asd",
  },
};
type Song = {
  title: "unchained ";
  artist: "name";
  numStreams: 100;
  credits: {
    producer: "qwerty";
    writer: "asd";
  };
};

// function printSongDetail(song:{title:string , artist:string , numStream:number, credits:{producer: string , writer:string}}){

// }

function _calculatePayout(song: Song): number {
  return song.numStreams * 0.033;
}

_calculatePayout(mysong);

function printSong(song: Song): void {
  console.log(mysong);
}

//optional value
type points = {
  x: number;
  y: number;
  z?: number;
};
const mypoint: points = {
  x: 1,
  y: 1,
  z: 1,
};
//not inclluding z
const mypoint1: points = {
  x: 1,
  y: 1,
};

//readonly parameter
type users = {
  readonly id: number;
  user: string;
};
const user1: users = {
  id: 1,
  user: "gaurav",
};
console.log(user1.id);
// user1.id = 11;
user1.user = "gauravjhantu";

//intersection

type Circle = {
  radius: number;
};
type Colorful = {
  color: string;
};
type ColorFulCirlce = Colorful & Circle;
const happyFace: ColorFulCirlce = {
  color: "blue",
  radius: 10,
};
console.log(happyFace);

type ColorCirlceSquare = ColorFulCirlce & {
    points: number
}

const total : ColorCirlceSquare = {
    color: "blue",
    radius: 10,
    points: 4
}

console.log(total);
