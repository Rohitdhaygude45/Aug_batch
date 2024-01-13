import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, searchText:any): any {
    console.log("pipe calling..");
 
      let text = searchText?.toLowerCase();
      console.log(text);
      return data.filter((ele:any)=>{
       return JSON.stringify(ele).toLowerCase().includes(text)
       })

  }
//Pipes are simple functions that accept an input and return a transformed value 
// /A pure change is when the change detection cycle detects a change to either a primitive input value (such as String, Number, Boolean, 
//or Symbol) or object reference (such as Date, Array, Function, or Object)

//impure pipe:
//An impure function depends on any state, data, or change during the execution and may not return the 
//same result if the same inputs are passed into the respective function. 
}
