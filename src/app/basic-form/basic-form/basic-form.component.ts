import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  myForm: FormGroup
  programmingLanguages = ["Python","Java","JS"];

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl("",[Validators.required,
        Validators.minLength(3)]),
      lastName: new FormControl("",[Validators.required,
        Validators.minLength(3)]),
      isExperienced: new FormControl("", Validators.required),
      angular: new FormControl("", Validators.required),
      favouriteLanguage: new FormControl("",Validators.required),
      jsversion: new FormControl("",Validators.required)
    });



    this.myForm.get('favouriteLanguage').valueChanges.subscribe( (value: string) => {
      const jsversion =this.myForm.get('jsversion');
      if (value === "JS") {
        jsversion.setValidators(Validators.required);
        } else {
          jsversion.clearValidators();
        }
        jsversion.updateValueAndValidity();
      })
  }

  formSubmit(form:FormGroup){
    if (!form.valid) {
      return;
    }
    console.log(form.value);
  }
  
}


