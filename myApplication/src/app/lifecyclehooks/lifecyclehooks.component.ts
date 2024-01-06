import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
 
  styleUrls: ['./lifecyclehooks.component.css'],

})
export class LifecyclehooksComponent {

  name: any ; //normal property
  @Input() surName :any; //input property

  constructor( private dataService: DataService){
    console.log("constructor calling..");
    
  }

  //A component instance has a lifecycle that starts when Angular
  // instantiates the component class and renders the component view and its child views. 
  //ngOnchange() if component is having @input bound properties then ngOnChanges lc h get triiger first
  //ngOnInit()
  //ngDoCheck()
  //ngAfterContentInit()
  //ngOnDestroy()
  //ngAfterContentChecked()
  //ngAfterViewInit()
  //ngAfterViewChecked()
 
   ngOnchanges(){
    console.log("onchanges calling");
    
   }
 ngOnInit(){

  this.name =this.dataService.userName;
  console.log("oninit calling");
  
 }

 ngDoCheck(){
  console.log("do chk calling");
  
 }
 
 ngAfterContentCheckedInit(){
  console.log("ngAfterContentCheckedInit");

 }
 
 ngAfterViewInit(){
  console.log("ngAfterViewInit");
  
 }
 ngAfterViewChecked(){
  console.log("ngAfterViewChecked");
  
 }
  ngOnDestroy() {
    console.log("ngOnDestroy");
    
  }
 }


