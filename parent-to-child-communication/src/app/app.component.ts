import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-to-child-communication';
  counter = 5;
  data1="Angular Parent Conponent";

  emp={
    id:123,
    name:"Rahul",
    address:"Pune"
  }

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }


}
