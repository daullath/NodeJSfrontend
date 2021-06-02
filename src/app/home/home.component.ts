import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { NavigationComponent } from '../navigation/navigation.component';

import { User, UserDetail } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];
    userData: UserDetail;

    constructor(private userService: UserService) { 
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            console.log(users);
            this.loading = false;
            this.users = users;
            // this.getUserDetails();
        });

    }

    ngOnInit() {
        // this.loading = true;
        // this.userService.getAll().pipe(first()).subscribe(users => {
        //     console.log(users);
        //     this.loading = false;
        //     this.users = users;
            // this.getUserDetails();
        // });

    }

    getUserDetails() {
        this.userService.retrieveUserDetails().pipe(first()).subscribe(userData => {
            this.loading = false;
            this.userData = userData;
            console.log(this.userData);
        });
    }
}
