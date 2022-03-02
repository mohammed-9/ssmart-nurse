import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  numofplus: number = 0;
  numofplusstop: any = setInterval(() => {
    this.numofplus++;
    if(this.numofplus == 100) {
      clearInterval(this.numofplusstop);
    }
  }, 150);

  numofplus2: number = 0 ;
  numofplusstop2: any = setInterval(() => {
    this.numofplus2++;
    if(this.numofplus2 == 100) {
      clearInterval(this.numofplusstop2);
    }
  }, 1);

  numofplus3: number = 0 ;
  numofplusstop3: any = setInterval(() => {
    this.numofplus3++;
    if(this.numofplus3 == 100) {
      clearInterval(this.numofplusstop3);
    }
  }, 1);
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
