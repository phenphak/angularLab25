import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BackendService } from '../backend.service';
import { Product } from '../models/product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products :Product[];
  @ViewChildren(ProductItemComponent)
  productItems :QueryList<ProductItemComponent>
  constructor(private backservice :BackendService) {
    this.products = [];
   }

  ngOnInit(): void {
    this.products=this.backservice.getProducts();
  }

  // selectedProduct(product: Product) {
  //   alert(`Product ${product.name} selected`);
  //   }

   selectedProduct(productComponent :ProductItemComponent){
       alert(`Product ${productComponent.product.name} selected`);
       this.productItems.forEach(p=>{
         p.isSelected =false;
       });
       productComponent.isSelected=true
   }

}
