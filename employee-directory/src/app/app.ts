import { Component } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [EmployeeListComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'employee-directory';
}
