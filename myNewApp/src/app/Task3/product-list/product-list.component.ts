import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private ProductService:ProductService) { }
products : any[]=[];
favoriteProducts: any[]=[];
  ngOnInit(): void {

    this.products=this.ProductService.getAllProduct();
  }
  print(produ:any)
  {
    this.favoriteProducts.push(produ);
  
  }
}
