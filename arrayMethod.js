let city = ['pune','nashik','mumbai','jaipur',2000]; //hetrogenous array
console.log(city.length); //length opr will return length of an array

//tostring()
console.log(city.toString());

//pop() // pops out/delete last item from array and will return the same
console.log(city);

let popedOutItem =city.pop();
console.log(popedOutItem);
console.log(city);

//push() to append/add items at the end of the array,will return length of the original array
let Push = city.push (6000,'rohit');
console.log(city);
console.log(Push);

//The shift() method removes the first array element and "shifts" all other elements to a lower index.
let color =['red','blue','black','yellow','pink'];
let shift =color.shift();
console.log(shift);
console.log(color);

// unshift() // Add the elements 
let color2 = ['pink','red','blue','black','yellow'];
let unshift =color2.unshift('black','orange');
console.log(unshift);
console.log(color2);

// join method

let v =['pink','red','blue','black','yellow'];
let v1=v.join('');
console.log(v1);

let name =["rohit","dhaygude"];
console.log(name);
let fname =name.join("/");
console.log(fname);

//concat()

cl2 = ['black','yellow'];
cl3=[];
let cl4 =cl2.concat(cl3,v,"white");
console.log(cl4);

//delete: undefined holes 
 //length remains same after deleting item

 const fruits =['banana','orange','apple','mango'];
 delete fruits[2];
 console.log('>>>',fruits);

 //splice(index(where u want to add item), count(how many elements want to delete, elements to be added))
 const fruit1 =["Banana", "Orange", "Apple", "Mango"];
 fruit1.splice(1,1,'kiwi');
 console.log(fruit1);

 // Slice

 const fruit2 =["Banana", "Orange", "Apple", "Mango",'kiwi'];
 let a = fruit2.slice(1,2);
 console.log(a);
 console.log(fruit2);


 // number Methods

 let no =233456;
 let no1=no.toString();
 console.log(no1);


 //tofixed()
 let weight = 4.56789;
 let w2= weight.toFixed(3);
 console.log(w2);

 // valueof()

 let r=5656;
 console.log(r.valueOf);