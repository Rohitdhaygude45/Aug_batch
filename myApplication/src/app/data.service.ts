import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userName: any;
  data= new Subject<any>()
  url ='http://localhost:3000'

  constructor( private httpClient :HttpClient) { }

  //service :to declare global property , reusable functions logic 

 postApiCall( endPoint:any,formData:any){
  let url=this.url+ '/' +endPoint
  return this.httpClient.post(url,formData);
 }


 getApiCall(urlEndPoint : string){
  let apiUrl = this.url + '/' + urlEndPoint + '/' + 2;
 return this.httpClient.get(apiUrl);
}
}







