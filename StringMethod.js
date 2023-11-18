let text ="user live in mumbai ,i like mumbai i like satara i love mango";

let textlength = text.length;
console.log(textlength);
console.log(text.length);

let slicedText = text.slice(2,6);  //start index : inclusive, end index : exclusive
console.log(slicedText);
console.log(text.slice(10,16));
console.log(text.slice(5));
console.log(text.slice(-13,-5));//start index : exclusive, end index : inclusive
console.log(text.slice(-13));


console.log(text.substring(-1,10));//negative value is treated as 0 here, end index is exclusive

console.log(text.substr(2,6)); //start index ,length

console.log(text.replace('mumbai','pune')); //method replaces only the first match

console.log(text.replace('jjbkjbkj','Pune')); //original string

console.log(text.replace('mumbai','Pune')); // original string: replace is case sensitive

console.log(text.replace(/mumbai/i,'Pune'));
console.log(text.replace(/mumbai/ig,'Pune')); //insensitve / globally replace

console.log(text.replaceAll('Mumbai ','nashik'));  //case sensitive
console.log(text.replaceAll(/mumbai/ig,'nashik'));

console.log(text.replace(/user live in Mumbai , i like Mumbai/i, "rohit"));
console.log(text.replace('i like','lkjll'));


//concat()

let firstName = 'rohit';
let lastName = 'dhaygude';
let no =60036;

// let fullName =firstName + " "+last Name;
let fullName = firstName.concat('',no,'',lastName,'',4000);
console.log(fullName);

console.log('lwr->',text.toLowerCase(),'upr->',text.toUpperCase());
//The trim() method removes whitespace from both sides of a string:
let data = '     kjjmn    '
console.log(data.trim());

var string ="  this should become       something     else     too   ";
stringData = string.trim().replace(/\s+/g, " ");
console.log(stringData);


//toString()
let num = 65656565;
let data1 = num.toString();
console.log(data1);


let text1 = "hello world";
let char = text1.charAt(3);
console.log(char);
let d = text1.charAt(20);
console.log(d);       // it will return empty



//split()
let date = "28-oct-2002";
let newDate = date.split ('-') ////it splits out data and will return array
console.log(newDate);
console.log(newDate[1]);

let num2 = "656543";
let m = parseInt(num2)
console.log(m);

let text4 = "cvvvv vjjhcsjaaj kvv,jb rohit";
t5 = text4.split(" ");
console.log(t5);

let add = "bxhhh cwjb rohit jbcbj";
console.log(add.includes("rohit")); //include method returns true if value is include in data else will return false

  
 {
 "status","success", 
"statusCode","100256",
 "massage", "data submited successfully"
 }

   let statuscode="100256";
   let a =statuscode.startsWith("100");
   console.log(a);
   console.log(statuscode.endsWith("55"));

 let text6 = "Mr. Blue has a blue house";
 //let text =text6.search("blue");
 let position = text6.search(/blue/i); //we can add regex patteren 
 console.log(position); //diff betw search and indexOf method : we cannot pass reg ex pattern to indexOf


// The search() cannot take a start position argument.
// The indexOf() method cannot search against a regular expression.
// The search() method returns the position of the first match.
// The match() method returns an array of matches.


 
let text5 = "Hello to world, welcome to the to universe.";
// let result = text5.indexOf("to");  //it should return first match of index 
let result = text5.indexOf("tooo"); //-1
console.log(text5.lastIndexOf("to"));
console.log(text5.lastIndexOf("tooooo")); //-1


let text7 ="The rain in SPAIN stays mainly in the plain";
let g =text7.search("rain")
console.log(g);
console.log(text7.search(/rain/g));