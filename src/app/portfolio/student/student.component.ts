import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  userForm:any;
  constructor(public formbuilder:FormBuilder){
  
  }
  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
      name:['',Validators.required],
      email:['']
    })
  }
  onSubmit(){
    console.log("Form submitted", this.userForm.value)
  }
}
