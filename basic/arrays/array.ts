let active :string[]= [];
active.push("active");
active.push("active1");
console.log(active);

let active1 :number[]= [];
active1.push(1);
active1.push(2);
console.log(active1);

// let active2 : Array<boolean>= [];
let active2 :boolean[]= [];
active2.push(true);
active2.push(false);
console.log(active2);

type point12345 = { x: number, y: number};

let active3 : point12345[]= [];
active3.push({x:1,y:1});
active3.push({x:2,y:2});
console.log(active3);


//write multidomensioal array code 
const board : string[][] = [[" board1", " board2", " board3"],[" board1", " board2", " board3"]]

const board1 : number[][][] = [[[1]]]

console.log(board,board1);
