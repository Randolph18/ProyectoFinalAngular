import { createInjectableType } from '@angular/compiler';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  
  constructor(@Inject(DOCUMENT) public document:Document, public auth:AuthService ){}
  
}
