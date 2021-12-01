import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.css']
})
export class ReactiveFormBuilderComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private fb:FormBuilder){}

  adminssionForm=this.fb.group({
    name:["",Validators.required],
    courses: this.fb.group({
      courseOne: "Java",
      courseTwo :"CPP",
      courseThree :"C",
      courseFour:"Salesforce"
    })
  })

  submitForm():void{
      console.log(this.adminssionForm.value)
  }
}
