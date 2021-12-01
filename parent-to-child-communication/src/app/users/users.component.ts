import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() data: any ;
  @Input() employee: any;
  @Input() dataCount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
