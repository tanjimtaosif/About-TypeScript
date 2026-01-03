let a : string;
let b : number;

a = "Hello";
// a = 23; wrong input type
b = 24;

//----- array ---------
let x : string[] = [];
// x.push(34); wrong input type

// normal variable
let g : string | number; //Property push does not exist on type string | number
// g.push("Mahtab"); so this will give us error
g = "Mahtab"


let f : (string | number)[] = [];
f.push(34);

// Object------------

let h  : {
    name: string,
    age: number,
    adult: boolean
};

h = {
    name: "Mahtab",
    age: 34,
    adult: true
}