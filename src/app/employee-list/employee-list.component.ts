import { Component, OnInit, Input } from '@angular/core';
import { EmployeeList } from '../employee.module';
import * as sparkmd5 from 'spark-md5';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Input('jsonData') jsonData:EmployeeList[];
  generatedHash: any = null;
  email: string;
  avatar: string;
  constructor(){
    console.log(this.jsonData);
  }
  title="";
  public searchText : string;
  panelOpenState = false;
  oneAtATime: boolean = true;

  ngOnInit() {
   // this.generatedHash = sparkmd5.hash(this.jsonData[0]);
   // this.avatar = this.createIdenticon(this.generatedHash);
    console.log(this.jsonData);
  }
   // Generate identicon
   createIdenticon(emailHash: any): string {
    return 'https://www.gravatar.com/avatar/' + emailHash + '?d=identicon';
  }

}
