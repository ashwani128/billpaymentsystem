import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';

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
  myClass: string = "";
  b: boolean = false;

  country: string = "";
  cities: string[] = ["Ayodhya", "kanpur", "Lucknow", "Noida"];
  employee: Employee[] = [new Employee("1", "test1", "50000"),
  new Employee("2", "Rocklee", "6000"),
  new Employee("3", "Rocklee", "6000")];

  newEmployee: Employee = new Employee("", "", "");

  // forusing pipes

  city:string = "Kanpur";
  newSalary:number = 2000;
  tds:number = 54.5;
  person:object = {firstname:"Rocklee",lastname:"gateofdeath"};
  dt:Date = new Date();

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

  onClickDelete(n: number) {
    alert("1")
    if (confirm("Are you sure you want to delete")) {
      this.employee.splice(n, 1);
    }
  }

  onClickInsert() {
    this.employee.push(new Employee(this.newEmployee.empId, this.newEmployee.empName, this.newEmployee.salary));
    this.newEmployee.empId = "0";
    this.newEmployee.empName = "";
    this.newEmployee.salary = "0";
  }
}
