const number = [45,4,9,6,12,43,28,88];

// Using simple loop
let num =[];
for (let i =0;i< number.length;i++){
    if (number[i]!=9){
        num.push(number[i])
    }
}
console.log(num);

//using forEach() array itr method  // break and contiue kaywords we cannot apply with forEach
let num2=[];
number.forEach(item => {
    if (item !=9){
        num2.push(item)
    }
})
console.log(num2);


//break/continue

num =[];
for(let i=0; i<number.length;i++){
    num.push(number[i]);
    if (number[i]==12){
        break;     //breaks out looping
    }
}
console.log(num);

for (let i =1 ; i <=50;i++){
    if (i>=31 && i<=40){
        console.log(i);
    }
}

const item = [1,2,3,4,5,6,7,8,9,10];
item.forEach(ele=>{
    if(ele>=3 && ele <=9){
        console.log(ele);
    }
})
item.push(44)
console.log(item)

// const n = [1,2,3,4,5,6,7,8,9,10]
// n =[20,55]
// console.log(n);


//find() it will return fist match that passess your test condition

let no = item.find(item=>{
    return item >7;
})
console.log(no);

//indexOf() : case sensitive //will return -1 if no match found
const fruits =["Apple","Orange","Mango","Orange"];
console.log(fruits.indexOf("orange")); //1
console.log(fruits.indexOf("orange")); //-1

//lastIndexOf() case sensitive //will return -1 if no match found
console.log(fruits.lastIndexOf("Orange"));

//map()

emp=[
    {
        empname:"rohit",city:"Satara",age:30
    },
    {
        empname :"Pravin", city: "pune",age:20
    },
    {
        empname:"Sagar", city: "Nashik",age:40
    }
]
let names=emp.map(empData=>{   //return array['sagar,'pravin']})
    return empData.empname;
})
console.log(names);

let nameObj = emp.map(({empName,city})=>({empName,city}))
  console.log(nameObj);
  let nameobj =emp.map(({empName})=>({empName}))  //[{empName:"Sagar"},{}]
  console.log(nameObj);

  let chars = [50,55,44,11,44,22,33,44,77];

  //  Objects are used for storing keyed collections.
//  Arrays are used for storing ordered collections.

const array =[10,20,30,40,20,50,88,20];
const searchElement =20;
let foundIndex=[];

array.forEach((element,index)=>{
    if (element===searchElement){
        foundIndex.push(index);
    }
    }
);

console.log(foundIndex);



//includes()//true/false

const array1 = [10, 20, 30,20,20, 50,88,20];
console.log(array1.includes(40));//false