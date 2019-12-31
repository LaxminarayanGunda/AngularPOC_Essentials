import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';

@Injectable()
export class MyOrdersService {
     
    constructor( ) {
        
    }
     
    addOrdersToCart(requisitionId:number){
        return 'Your Order ' + requisitionId + ' placed successfully';

        ///api calls.
    }
}