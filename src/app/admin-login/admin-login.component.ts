import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private myrouter:Router) { }
  username=""
  password=""
  status:boolean=false
  adminLogin=()=>{
    let data={
      "username":this.username,
      "password":this.password
    }
    if (this.username=="admin"&&this.password=="1234") {
      this.myrouter.navigate(["/addStudent"])
      this.status=true
    } else {
      alert("Invalid Credentials!")
    }
    console.log(data);
    this.username=""
    this.password=""
  }
  ngOnInit(): void {
  }

}
