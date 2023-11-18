//1.string 
//2.Number 
//3.Bigint
//4.Boolean 
//5.undefined
//6.Null
//7.Symbol
//8.Oblect

// The object Datatype 
// The Object datatype can contain:

// 1. An object
// 2. An array
// 3. A date


let state = "";  //empty string

let city = "pune"; //string data type

console.log('city 1',city);

city = 'mumbai';
console.log('city2',city);

var marks = 90; // number 
console.log('marks',marks);

var mobNo= "1234546"; // string
console.log(mobNo);

var isFavFruits =false; // boolean true/false
console.log(isFavFruits);

var isFavFruits ='false'; // boolean true/false
console.log(isFavFruits);

//typeof() >it gives type of variable
console.log('data type of isfavFruit var',typeof(city));

const match = undefined;
console.log(match);

let abc ;
console.log(abc);
console.log(typeof(abc));

var myname =null;
console.log(myname);
console.log(typeof(myname));  //null/array value typeof will return >> object 


let a =9999999999;
console.log(a);

// let b = 5.3646666  >> 5.36

let c = 99999999;
console.log(BigInt(c));

let d = 999999999999;
console.log(d); hj

let k = null;

//*** Array : is used to store multiple items 
let name = "rohit hanmant Dhaygude, live in satara"
console.log(name);


let cities= []; // empty array 

// homogenous Array

cities = ['pune','mumbai','nashik','satara','kolhapur','sangali']
console.log(cities);

console.log(typeof(cities)); //array data typeis always object 

console.log(cities[4]); // kolhapur 
console.log(cities[10]); // undefined 
console.log(cities.length);
console.log(cities[cities.length -1]); // sangali
console.log('data type of cities>>' ,typeof(cities));


//heterogeous Array

let hetroArray =['rohit',58705, true,null,undefined,'rohit'];
console.log(hetroArray[2]);

function test(){
    //return 'rohit';
}
//let cars = {} //object >> {key:value}

let cars ={
    carName :"swift",
    carPrice:80000,
    carColor:"white"
}
console.log(cars.carName);
console.log(cars.carColor);
console.log(cars.carPrice);