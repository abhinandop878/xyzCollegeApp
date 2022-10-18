import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-faculty',
  templateUrl: './view-all-faculty.component.html',
  styleUrls: ['./view-all-faculty.component.css']
})
export class ViewAllFacultyComponent implements OnInit {

  constructor() { }
  facultyData=[
    {
    "name":"Dr. Ramesh ",
    "designation":"Professor",
    "department":"IT",
    "educationQualifaction":"PHD",
    "address":"Thrissur",
    "mobileNo":"8590562209",
    "dob":"05/04/1989",
    "doj":"05/04/2015"
  },
  {
    "name":"Dr Havin",
    "designation":"Associate Professor",
    "department":"ME",
    "educationQualifaction":"PHD",
    "address":"Kozhikode",
    "mobileNo":"9645365423",
    "dob":"04/08/1995",
    "doj":"04/02/2018"
  },
  {
    "name":"Prof. Surya",
    "designation":"Head of Department",
    "department":"CS",
    "educationQualifaction":"PHD",
    "address":"Kollam",
    "mobileNo":"8590565423",
    "dob":"02/03/1992",
    "doj":"11/06/2013"
  },
  {
    "name":"Prof. Riya",
    "designation":"Assistant Professor",
    "department":"EEE",
    "educationQualifaction":"M-TECH",
    "address":"Kannur",
    "mobileNo":"9645362209",
    "dob":"24/03/1996",
    "doj":"30/03/2018"
  },
  {
    "name":"Prof. Abhinand",
    "designation":"Assistant Professor",
    "department":"EC",
    "educationQualifaction":"M-TECH",
    "address":"Waynad",
    "mobileNo":"8596904556",
    "dob":"04/07/1992",
    "doj":"04/07/2018"
  },
  {
    "name":"Dr. Anuruth",
    "designation":"Associate Professor",
    "department":"IT",
    "educationQualifaction":"PHD",
    "address":"Kottayam",
    "mobileNo":"8596904523",
    "dob":"09/02/1989",
    "doj":"08/12/2017"
  },
  {
    "name":"Dr. Basith",
    "designation":"Professor",
    "department":"CS",
    "educationQualifaction":"PHD",
    "address":"Malappuram",
    "mobileNo":"8596904556",
    "dob":"05/04/1989",
    "doj":"05/04/2015"
  },
  {
    "name":"Dr. Akshay",
    "designation":"Assistant Professor",
    "department":"ME",
    "educationQualifaction":"M-TECH",
    "address":"Kannur",
    "mobileNo":"8590565423",
    "dob":"04/08/1995",
    "doj":"04/02/2018"
  },
  {
    "name":"Dr. Hafis",
    "designation":"Professor",
    "department":"EEE",
    "educationQualifaction":"PHD",
    "address":"Malappuram",
    "mobileNo":"8590562209",
    "dob":"02/03/1992",
    "doj":"11/06/2013"
  },
  {
    "name":"Dr. Manjima",
    "designation":"Associate Professor",
    "department":"CS",
    "educationQualifaction":"PHD",
    "address":"Kozhikode",
    "mobileNo":"9645365423",
    "dob":"24/03/1996",
    "doj":"30/03/2018"
  }
]
  ngOnInit(): void {
  }

}
