import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms'
import { MyValidators } from '../../../commons/validate/customValidate'
@Component({
  selector: 'app-taks',
  templateUrl: './taks.component.html',
  styleUrls: ['./taks.component.scss']
})
export class TaksComponent  {

  // @ts-ignore
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    ) {
    this.buildForm();
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      "celular": [null,[ Validators.required, Validators.maxLength(10), MyValidators.caracteresInvalidos]],
      "organizacion": ["organizacion", Validators.required],
      "organizacionNombre": ["", Validators.required],
      "fullName": this.formBuilder.group({
        "name": [null,[ Validators.required, Validators.maxLength(10)]],
        "last": [null,[ Validators.required, Validators.maxLength(10)]],
      }),
    }, {
      validators: MyValidators.caracteresInvalidos
    })

    this.organizacionField?.valueChanges
      .subscribe(value =>{
          if (value === 'organizacion'){
            this.organizacionNombreField?.setValidators([ Validators.required])
          } else {
            this.organizacionNombreField?.setValidators(null)
          }
          this.organizacionNombreField?.updateValueAndValidity()
      })

  }



  get nameField(){
    return this.form.get('fullName')?.get('name')
  }

  get lastField(){
    return this.form.get('fullName')?.get('last')
  }

  get celularField(){
    return this.form.get('celular')
  }

  get organizacionField(){
    return this.form.get('organizacion')
  }

  get organizacionNombreField(){
    return this.form.get('organizacionNombre')
  }

  get isNameFieldValid() {
    return this.nameField?.valid && this.nameField?.touched
  }

  get isNameFieldInvalid(){
    return this.nameField?.touched && this.nameField?.invalid
  }

  get isLastFieldValid() {
    return this.lastField?.valid && this.lastField?.touched
  }

  get isLastFieldInvalid(){
    return this.lastField?.touched && this.lastField?.invalid
  }

  get isCelularFieldValid() {
    return this.celularField?.valid && this.celularField?.touched
  }

  get isCelularFieldInvalid(){
    return this.celularField?.touched && this.celularField?.invalid
  }

  save(event: any){
    // console.log(event)
    console.log(this.form.value)
  }
}
