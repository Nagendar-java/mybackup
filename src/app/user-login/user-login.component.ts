import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  employee:Employee=new Employee;
  constructor(private employeeservice: EmployeeService , private route:Router) { }

  ngOnInit(): void {
  }

  userLogin()
  {
    console.log(this.employee);
    this.employeeservice.loginUser(this.employee).subscribe(data=>{
    
      this.route.navigate(['/employees'])
      
    }, error=>alert("please enter correct username and password"));
  }

  

}
