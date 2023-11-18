//= >> assignment operator -- to assign value to the variable,
// == >> Equality operator -- to comapare value of two variables,
// ===>> Equality operator -- it will compare values as well as data type 


let a= 40; // assignment oprtr 

 let b= "30";

 console.log(a==b); //only value 
 console.log(a===b); // it wii strickly check value & data type 

let c= 20;
var d= 30;

 console.log(c!=d); // ! not operator !true >> false ; ! false >> true 

 console.log(c==d); // false

let isFav = true ;
console.log(!isFav); // false


let e =40;
 let f = "50";
console.log(">",f<e); // false it will check only for values 
console.log("<",e<f);// true 

console.log("<=",e<=f); // less than or equal to oprtr

// // && AND : T--> T ,else F

// console.log(e<f  && f==e);

// //  || OR F || F--> F ,else True

console.log( e < f || f == e );
 console.log( e < f || f == e && a!=b  );

 console.log( a !== b); //value & DT

 let x =20;
 let y =30;
 let res = x+y;
 console.log(res);