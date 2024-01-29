import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  
  
  journey: any;
  url ='http://localhost:3000'
  getApicall: any;

  

  constructor( private   httpClient :   HttpClient){}

 postApiCall( endpoint :string,formData:any){
  let url=this.url +'/' +endpoint;
  return this.httpClient.post(url,formData)
 }

getApiCall(journey:any){
  let url =this.url +'/'+ journey;
  return this.httpClient.get(url)
}
}

