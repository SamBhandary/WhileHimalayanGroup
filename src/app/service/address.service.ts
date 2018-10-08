import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Address } from '../contact/address';
import { ADDRESSES } from '../contact/mock.address';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
  })
  export class AddressService {
  
    constructor(private messageService: MessageService) { }
  
    getAddresses(): Observable<Address[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('HeroService: fetched heroes');
      return of(ADDRESSES);
    }
  }
  