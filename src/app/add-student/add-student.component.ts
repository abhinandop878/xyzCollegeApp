import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }
  name=""
  rollNo=""
  admissionNo=""
  college=""
  department=""
  bloodGroup=""
  dob=""
  parentName=""
  parentEmail=""
  guardianName=""
  guardianAddress=""
  addStudent=()=>{
    let data={
      "name":this.name,
      "rollNo":this.rollNo,
      "admissionNo":this.admissionNo,
      "college":this.college,
      "department":this.department,
      "bloodGroup":this.bloodGroup,
      "dob":this.dob,
      "parentName":this.parentName,
      "parentEmail":this.parentEmail,
      "guardianName":this.guardianName,
      "guardianAddress":this.guardianAddress
    }
    console.log(data)
    alert("Successfully Added")
    this.name=""
    this.rollNo=""
    this.admissionNo=""
    this.college=""
    this.department=""
    this.bloodGroup=""
    this.dob=""
    this.parentName=""
    this.parentEmail=""
    this.guardianName=""
    this.guardianAddress=""    
  }
  ngOnInit(): void {
  }

}
