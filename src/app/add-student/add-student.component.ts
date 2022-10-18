import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }
  status:boolean=false
  addStudent=()=>{
    alert("Successfully Added")
    this.status=true
  }
  ngOnInit(): void {
  }

}
