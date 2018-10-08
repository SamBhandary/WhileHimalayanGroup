import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../product/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) { 
   
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let id = params["id"];
      this.product = this.productService.getProductById(id)[0];
    })
    
  }

}
