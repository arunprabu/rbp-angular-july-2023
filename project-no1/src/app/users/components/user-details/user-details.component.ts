import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // read url param
    const userId: string | null  = this.route.snapshot.paramMap.get('userId');
    this.usersService.getUserById(userId)
      .subscribe((res: any) => {
        console.log(res);
        this.user = res;
      })
  }

}
