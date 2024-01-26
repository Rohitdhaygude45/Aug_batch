import { Component } from '@angular/core';
import { ApicallService } from '../shared/apicall.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor( private ApicallService : ApicallService){}
     journey( journey : string ){
      this.ApicallService.journey=journey;
     }
    }    
  


