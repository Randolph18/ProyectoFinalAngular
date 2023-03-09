import { Component, OnInit , Input , EventEmitter , Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() dataInput: any = {name:"", precio:"", image:""};
  @Input() indexInput: number = 0;
  @Output() selectProduct = new EventEmitter<any>;

  constructor (private router: Router){
    this.selectProduct = new EventEmitter();
  }

  ngOnInit(): void {}

  buyGame (){

  }

}
