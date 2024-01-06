import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() cityName :any;
 @Output()data=new EventEmitter<any>
 state ="maharashta";


 dataFromChild(){
  this.data.emit(this.state);
 }
}
