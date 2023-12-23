
function test (num: number) {
return num * num ;
}
test(27);
// test("should");
// test(true);


function greet(person : string){
    //cant do arethmatic with string values
    // person * person;
    return "hi " + person;
}
greet("user");
// greet(27);
// greet(true);

let greeting = (person : string , age:number , bool :boolean) => {
return ` hii name ${person} ,age${age} ,chutiya ${bool}`
}

greeting("gaurav" , 27, true);
// need to give all value
// greeting("qwerty" , 27);

function persons(person:string = "chutiya") :string {
    return `hii , ${person}`;
    // cant return number in string  
    // return 1;

}
// predefined string value
persons();


//return string|number
function random(n:number){
    if(Math.random() < 0.5){
        return n.toString();
    }
    return n*n;
}
random(5);


//returns a number type only
const add = (x:number, y:number):number => {
    return x + y;
}

//array use in ts
const color = ["asd","sdf","dfg"]
color.map(col =>{
    return col.toUpperCase()
})

function rintTwice(msg:string):void{
    console.log(msg);
    console.log(msg);
    // return "";
    
}

function makeError(msg:string):never{
    // return "";
    throw new Error(msg);
}


function loop():never{
    while(true){
console.log("in loop");
// return ;
    }
}