import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  
  name:'rohit' | undefined
  journey: any;
  url ='http://localhost:3000'

  constructor( private   httpClient :   HttpClient){}

 postApiCall( endpoint :string,formData:any){
  let url=this.url +'/' +endpoint;
  return this.httpClient.post(url,formData)
 }
  }
 

