import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
userlist:any[]=[]
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe((x)=>{
    this.userlist=x;})
    
  }

}
