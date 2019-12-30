import { Component, OnInit, Input } from '@angular/core';
import { EmployeeList } from '../employee.module';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Input('jsonData') jsonData:EmployeeList[];
  constructor(){}
  title="Json data to Accordion using Bootstrap"

  ngOnInit() {
  }

}
