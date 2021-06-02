import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User, UserDetail, AcctData } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  users: User[];
  userData: UserDetail;
  acctData: AcctData[] = [];
  dataFetched: boolean = false;
  displayedColumns: string[] = ["date", "description", "amount"];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.retrieveUserDetails().pipe(first()).subscribe(userData => {
      this.userData = userData;
      this.acctData = this.userData.userInfo.acctData;
      this.dataFetched = true;
      console.log(this.userData);
    });  
    
  }

}
