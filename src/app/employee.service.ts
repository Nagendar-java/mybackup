import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "http://localhost:7689//api/v1/employees";
  private baseURLSignIn="http://localhost:7689/api/v1/login";
  private baseURLForSignup="http://localhost:7689/api/v1/employeeregister";

  constructor(private httpClient: HttpClient) { }
  loginUser(employee: Employee):Observable<object>{
    console.log(employee);
    return this.httpClient.post(`${this.baseURLSignIn}`, employee);
  }
  
  addUser(employee: Employee):Observable<object>{
    console.log(employee);
    return this.httpClient.post(`${this.baseURLForSignup}`, employee);
    
}
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURLForSignup}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
