import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() count: number;

  @Output() parentComponent: EventEmitter<any> = new EventEmitter();
  
  @Output() countChanged: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.parentComponent.emit("Hello")
  }

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }

}
