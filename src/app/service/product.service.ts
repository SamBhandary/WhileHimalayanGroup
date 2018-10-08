import { Observable, of} from 'rxjs';

import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { PRODUCTS } from '../product/mock-products';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {

    
  
    constructor(private messageService: MessageService) { }
  
    getProducts(): Observable<Product[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('ProductService: fetched products');
      return of(PRODUCTS);
    }

    public getProductById(id: number) {
      console.log("Searching for the product with Id: "+id);
      return PRODUCTS.filter(product=> product.id==id);
    }

  }
  