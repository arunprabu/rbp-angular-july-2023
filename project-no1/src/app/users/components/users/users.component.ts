import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  users!: any[];

  constructor( private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe((res: any[]) => {
        console.log(res);
        this.users = res;
      })
  }

}
