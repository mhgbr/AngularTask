import { Component, ContentChild, ContentChildren, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
 
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
users:string[]=[];
users2:string[]=[];
  constructor() { }
  @ViewChild('mydiv') el? :ElementRef
  @ViewChild('home') homecom? : HomeComponent
   
  adduser(user:string){
    this.users.push(user);
    this.users2=this.users;

  }
  delete(e:any) 
  {
    this.users.splice(e,1)
    this.users2=this.users;
  }
    
  search(name:string)
  {
this.users2=this.users.filter(i=>(i.includes(name)));
//console.log(this.users2)
  }

   














  ngOnInit(): void {
  }
  ngAfterViewInit(){
//console.log((this.el?.nativeElement as HTMLDivElement).innerHTML)
 
 {

 }
  }

}
