import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  employee:Employee=new Employee;
  constructor(private _service:EmployeeService, private route:Router) { }

  ngOnInit(): void {
  }

  addUser(){

    this._service.addUser(this.employee).subscribe(data=>{
      alert("User Added SuccessFully");
     this.route.navigate(['/login'])
    }, error=>alert("please enter correct username and password"));
    }
}
