import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeListComponent {
  employees = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Software Developer',
      department: 'Engineering'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'UI/UX Designer',
      department: 'Design'
    },
    {
      id: 3,
      name: 'Michael Brown',
      role: 'Project Manager',
      department: 'Management'
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'HR Specialist',
      department: 'Human Resources'
    },
    {
      id: 5,
      name: 'David Wilson',
      role: 'QA Engineer',
      department: 'Engineering'
    }
  ];
}