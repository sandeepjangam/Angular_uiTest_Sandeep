import { EmployeeList } from './employee.module';
import { Component , OnInit  } from '@angular/core';
import { ApiService } from './api.service';
import * as sparkmd5 from 'spark-md5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularUITEST';
  //jsonData : EmployeeList[]
  jsonData: any =[];
  generatedHash: any = null;
  email: string;
  avatar: string;
  loading: boolean = false;
  constructor(private apiService: ApiService){}
  ngOnInit(){
    this.loading = true;
    this.apiService.getCustomersList().subscribe((res)=>{
      console.log(res);
      this.jsonData = res
      this.loading = false;
      for(let i = 0; i< this.jsonData.length ; i++){
        this.generatedHash = sparkmd5.hash(this.jsonData[i].email);
        this.avatar = this.createIdenticon(this.generatedHash);
        this.jsonData[i].emailHash = this.avatar; 
      }
  });
  }
   // Generate identicon
   createIdenticon(emailHash: any): string {
    return 'https://www.gravatar.com/avatar/' + emailHash + '?d=identicon';
  }
}
  
 
