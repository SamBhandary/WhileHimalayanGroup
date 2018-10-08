import { Component, OnInit } from '@angular/core';

import {Address} from './address';
import { AddressService } from '../service/address.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  addresses: Address[];

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses(): void {
    this.addressService.getAddresses()
        .subscribe(heroes => this.addresses = heroes);
  }

}
