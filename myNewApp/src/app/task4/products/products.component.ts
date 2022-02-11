import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( private productservice:ProductService) { }
  productform= new FormGroup(
{
title: new FormControl('',[Validators.required,Validators.minLength(3)]),
description: new FormControl('',[Validators.required]),
image: new FormControl('',[Validators.required])
}

)
  ngOnInit(): void {
  }
get title(){
   return this.productform.get("title") as FormControl
}
get description()
{
  return this.productform.get("description") as FormControl
}
get image()
{
  return this.productform.get("image") as FormControl
}
Addproduct(pro:any){
this.productservice.Add(pro)
}

}

