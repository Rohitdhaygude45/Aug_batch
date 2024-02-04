import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  
  
  
  journey: any;
  url ='http://localhost:3000'
  getApicall: any;
  userName:any;
  dataById: any;
  deleteApiCal:any;
  
  

  constructor( private   httpClient :   HttpClient){}

 postApiCall( endpoint :string,formData:any){
  let url=this.url +'/' +endpoint;
  return this.httpClient.post(url,formData)
 }

 getApiCall(journey:any , id?:any){
  let url = id ? this.url + '/' + journey +'/' + id : this.url + '/' + journey;
  return this.httpClient.get(url)
}

updateData(endpoint:any,id:any,body:any) {
 let url=this.url+'/'+endpoint +'/' + id;
 return this.httpClient.patch(url,body)
}

deleteApiCall(endpoint:any,id:any){
  let url=this.url+'/'+endpoint +'/' + id;
  return  this.httpClient.delete(url)
}
}


