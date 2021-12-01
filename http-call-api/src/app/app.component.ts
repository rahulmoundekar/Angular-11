import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-call-api';
  usersData:any=[]
  constructor(private userservice: UsersService) {
      this.userservice.getUserData().subscribe(
          data=>{
            this.usersData=data
          }
        )
  }
}
