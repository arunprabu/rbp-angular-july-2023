import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-info',
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Employee Name: {{employeeName}}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Employee Phone: {{employeePhone}}</h6>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class EmployeeInfoComponent implements OnInit {

  // Step 1 of Custom Prop Binding: create custom property
  @Input() employeeName = ''; // @Input() will make this variable a custom property
  @Input() employeePhone!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
