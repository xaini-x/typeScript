let movie: string = "movie"
movie = "qwerty"
// cant change string to number
// movie = 1
movie.toUpperCase()


//number types
let num : number =1234;
num+=1;
//cant assign string
// num = "qwerty" + num


//boolean types
let bool : boolean = true;
bool = false;
//cant assign string or number
// bool = "sdfff" + 1;


//type inference
let x = 27;
// x = "number"
let  str = "string";
// str = 27;
let bool1 = false;
// bool1 = 27 + str;

//any type inference

let any: any = false;
any = 27;
any = "string";

const movies =["movie"," movie1"," movie2"]
let foundMovie ;
for (let movie of movies){
    if (movie === "movie1"){
        foundMovie = movie;
        break;
    }
}

