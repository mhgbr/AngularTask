import { Component, OnInit } from '@angular/core';
 
import { Iuser } from 'src/app/_model/iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user:Iuser={username:'',password:''}
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
  console.log (this.user)
  }
}
