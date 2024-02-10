import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
  msg: string = "Its Just starting";
  fName: String = "Rocklee"
  lName: String = "Gate  Of Death";
  age: Number = 28;
  gender: String = "Male"
  isEmployeed: boolean = true;

  marks: number = 10;
  color: string = "";
  myClass:string = "";
  b:boolean = false;

  country:string = "";
  cities:string[] = ["Ayodhya","kanpur","Lucknow","Noida"];


  constructor() {

    if (this.marks >= 10) {
      this.color = "green";
    } else {
      this.color = "red";
    }

    if (this.marks >= 50) {
      this.myClass = "class1";
    } else {
      this.myClass = "class2";
    }

    if (this.marks >= 50) {
      this.b = true;
      this.myClass = "class1";
    } else {
      this.b = false;
      this.myClass = "class2";
    }









  }






  handleSubmitButton() {
    this.fName = "Mighty Guy";
    this.lName = "TaiJutsu";
    this.age = 55;
    this.isEmployeed = true;
    this.gender = "Male";
  }




}
