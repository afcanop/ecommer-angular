import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-taks',
  templateUrl: './taks.component.html',
  styleUrls: ['./taks.component.scss']
})
export class TaksComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.form.valueChanges.subscribe( data => {console.log(data)})

  }

  private buildForm(){
    this.form = this.formBuilder.group({
      "fullName": this.formBuilder.group({
        "name": [null,[ Validators.required, Validators.maxLength(10), Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]],
        "last": [null,[ Validators.required, Validators.maxLength(10), Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]],
      }),
      "celular": [null,[ Validators.required, Validators.maxLength(10)]],

    })
  }



  get nameField(){
    return this.form.get('fullName')?.get('name')
  }

  get lastField(){
    return this.form.get('fullName')?.get('last')
  }

  get isNameFieldIvalid() {
    return this.nameField?.valid && this.nameField?.touched
  }

  get isNameFieldInvalid(){
    return this.nameField?.touched && this.nameField?.invalid
  }



  save(event: any){
    console.log(event)
    console.log(this.form.value)
  }
}
