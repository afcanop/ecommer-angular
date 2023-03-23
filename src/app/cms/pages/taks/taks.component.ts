import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-taks',
  templateUrl: './taks.component.html',
  styleUrls: ['./taks.component.scss']
})
export class TaksComponent implements OnInit {


  newField = new FormControl(null,[ Validators.required, Validators.maxLength(10)], )

  get isNameFieldIvalid() {
    return this.newField.touched && this.newField.valid
  }

  get isNameFieldInvalid(){
    return this.newField.touched && this.newField.invalid
  }

  ngOnInit() {
    console.log("hola")
    this.newField.valueChanges.subscribe( data => {console.log(data)})

  }
}
