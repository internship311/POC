import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  groupForm : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.groupForm = new FormGroup({
      name : new FormControl('', Validators.required),
      password : new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  login(){
    console.log(this.groupForm);
  }

}
