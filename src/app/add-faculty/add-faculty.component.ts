import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  constructor() { }
  status:boolean=false
  addFaculty=()=>{
    alert("Successfully Added")
    this.status=true
  }
  ngOnInit(): void {
  }

}
