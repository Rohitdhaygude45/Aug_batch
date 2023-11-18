 function addNumber(){
     let number =parseInt(prompt("enter a number"));
     for (let i =1; i<=10; i++){
         res =number*1;
         console.log(res);
         document.write(res,"<br>");
     }
     Document.getElementById("table").innerHTML=res + '<br>'
 }