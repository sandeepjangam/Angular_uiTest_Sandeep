import { EmployeeList } from './employee.module';
import { Component , OnInit  } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularUITEST';
  //jsonData : EmployeeList[]
  jsonData: any =[]
  constructor(private apiService: ApiService){}
  ngOnInit(){
    this.apiService.getCustomersList().subscribe((res)=>{
      console.log(res);
      this.jsonData = res
  });
  }
}
  
 
