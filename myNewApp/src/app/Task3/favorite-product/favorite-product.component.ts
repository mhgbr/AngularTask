import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
  styleUrls: ['./favorite-product.component.css']
})
export class FavoriteProductComponent implements OnInit {
 
  constructor() { }
  @Input() favoriteproducts: any[]=[];
  ngOnInit(): void {
  }
 

}
