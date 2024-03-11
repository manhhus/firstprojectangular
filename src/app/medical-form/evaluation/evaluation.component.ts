import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [MatFormFieldModule,CommonModule,NgSelectModule,ReactiveFormsModule],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss'
})
export class EvaluationComponent {
  medicalForm:any;
  constructor(private formBuilder:FormBuilder) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initializeForm()
  }

  initializeForm(){
    this.medicalForm = this.formBuilder.group({
      name:['', [Validators.required]],
      age:['', [Validators.required, Validators.pattern('^[1-9][0-9]?$|^100$'), Validators.min(1), Validators.max(100)]],
      gender:['', Validators.required],
      address:['', Validators.required],
      diagnosis:['', Validators.required],
      contact:['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email:['', [Validators.required, Validators.email]], 
    })
  }
  submitForm(){
    if(this.medicalForm.valid){
      console.log("form is summitted", this.medicalForm.value)
    }
  }
}
