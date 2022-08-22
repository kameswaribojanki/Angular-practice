import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  constructor(private formBuilder:FormBuilder){

  }
  signUpForm:FormGroup=this.formBuilder.group({
    name:["",Validators.required],
    email:["",[Validators.required, Validators.email]],
    hobbies:this.formBuilder.array([]),
  });
  // signUpForm:FormGroup=new FormGroup({
  //   name:new FormControl("", [Validators.required]),
  //   email:new FormControl("",[Validators.required, Validators.email]),
  //   hobbies:new FormArray([])
  // });
  get emailError(){
    let emailMessage="";
    let emailControl=this.signUpForm.get('email');
    if(emailControl?.touched){
      if(emailControl?.errors?.['required']){
        emailMessage="email should not be empty";
      }
      else if(emailControl?.errors?.['email']){   
        emailMessage="Email should not be valid";
      }
    }
    return emailMessage;
  }
  get nameError(){
    let nameMessage="";
    let nameControl=this.signUpForm.get('name');
    if(nameControl?.touched){
      if(nameControl?.errors?.['required']){
        nameMessage="Name should not be empty";
      }
      else if(nameControl?.errors?.['minlength']){
        nameMessage="Name should contain atleast 3 letters";
      }
      else if(nameControl?.errors?.['maxlength']){
        nameMessage="Name should not contain more than 8 letters";
      }
    }    
    return nameMessage;
  }
  get hobbiesControl(){
    return this.signUpForm.get('hobbies') as FormArray;
  }
  ngOnInit(): void {
  }
  onFormSubmit(){
    console.log(this.signUpForm);
  }
  onAddHobby(){
    (this.signUpForm.get('hobbies') as FormArray).push(this.formBuilder.control(''))
  }
}
