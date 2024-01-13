import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Viewchild2Component } from '../viewchild2/viewchild2.component';

@Component({
  selector: 'app-viewchild1',
  templateUrl: './viewchild1.component.html',
  styleUrls: ['./viewchild1.component.css']
})
export class Viewchild1Component {
  @ViewChild('city')cityNmae!:ElementRef
  @ViewChild(Viewchild2Component) viewCompo!:Viewchild2Component;
  @ViewChild('confirmation') confirmation!:ElementRef;


  constructor(private cdr:ChangeDetectorRef){ }


  name1:any;
  edit =false;
 ngAfterViewInit(){


  console.log(this.cityNmae.nativeElement.innerHTML);
  this.cityNmae.nativeElement.innerHTML ="satara";
  console.log(this.cityNmae.nativeElement.innerHTMLL);
 this.name1 =this.viewCompo.name; //get
 this.viewCompo.city ='Nashik'; //set
if(this.edit){
  this.confirmation.nativeElement.innerHTMLL ='are you want update this Record';

}

  this.cdr.detectChanges();
 }

}
