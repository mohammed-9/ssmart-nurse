import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ToHome() {
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }
  Toabout() {
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }
  Toservices() {
    document.getElementById("services")?.scrollIntoView({behavior:"smooth"});
  }
  Tonurses() {
    document.getElementById("nurses")?.scrollIntoView({behavior:"smooth"});
  }
  Tocontact() {
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }
}
