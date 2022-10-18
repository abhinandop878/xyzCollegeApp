import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  constructor() { }
  name=""
  department=""
  designation=""
  dob=""
  educationQualifaction=""
  address=""
  mobileNo=""
  doj=""
  addFaculty=()=>{
    let data={
      "name":this.name,
      "department":this.department,
      "designation":this.designation,
      "dob":this.dob,
      "educationQualifaction":this.educationQualifaction,
      "address":this.address,
      "mobileNo":this.mobileNo,
      "doj":this.doj
    }
    console.log(data)
    alert("Successfully Added")
    this.name=""
    this.department=""
    this.designation=""
    this.dob=""
    this.educationQualifaction=""
    this.address=""
    this.mobileNo=""
    this.doj=""
  }
  ngOnInit(): void {
  }

}
