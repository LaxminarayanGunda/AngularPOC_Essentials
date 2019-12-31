import { Component } from '@angular/core';
import { KeyValue } from '@angular/common';
import { 
  UndefinedToNAText
} from './UndefinedToNA.pipe';
import { 
  HighlightDirective
} from './highlight.directive';


import {
  MyOrdersService
} from './MyService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyOrdersService]
})
 

export class AppComponent {
  title = 'Angule KeyValue Pipe Demo';
  name = 'Angular-KeyValue Pipe Demo';
   firstNumber:number = 5;
   secondNumber:number = 8;
   color: string;
   definedName:string = 'ABCDEF';
   undefinedName:string = '';
  
   myOrderStatus:string = '';

   constructor(
    private myOrderService: MyOrdersService){}

  object: {[key: number]: string} = {
    2: 'foo', 
    1: 'bar',
    5: 'hello',
    3: 'world',
    4: 'earth'};

  // Preserve original property order
originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
  return 0;
}

// Order by ascending property value
valueAscOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
  return a.value.localeCompare(b.value);
}

// Order by descending property key
keyDescOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
  return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0); 
}

//Arrow Functions..
getAddition = (firstNumber:number, secondNumber: number): number => {
 return firstNumber + secondNumber;
}

getMyOrders(){

  this.myOrderStatus = this.myOrderService.addOrdersToCart(123);
}


}

 


  
