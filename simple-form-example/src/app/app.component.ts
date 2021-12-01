import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  ngOnInit(): void {
   
  }

  title = 'simple-form-example';
  loggedIn:boolean=false

  email:string=""
  password:string=""


  loginFrom(): void{
    console.log(this.email+" "+this.password)
    if(this.email==="admin" && this.password==="admin"){
      this.loggedIn=true;
    }else{
      console.log("Invalid credentials");
    }
  }
}
