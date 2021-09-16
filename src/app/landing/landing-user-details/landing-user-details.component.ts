import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators'
import { UserService } from 'src/app/core/services/user.service';
import { UserDetails } from 'src/app/core/models/user-details.model';

@Component({
  selector: 'app-landing-user-details',
  templateUrl: './landing-user-details.component.html',
  styleUrls: ['./landing-user-details.component.less'],
  providers: [UserService]
})
export class LandingUserDetailsComponent implements OnInit {

  userDetails$: Observable<UserDetails>;

  constructor(private userService: UserService) {
    this.userDetails$ =this.userService.getCurrentUser();
   }

  ngOnInit(): void {
  }
}

