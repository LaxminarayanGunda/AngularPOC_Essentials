import {
    Pipe,
    PipeTransform
} from '@angular/core'
 
@Pipe({ name: "undefinedToNAText" })
export class UndefinedToNAText implements PipeTransform {
    naText: string ='N.A'; 

    transform(value: any) {
        if (value && (typeof value !== 'undefined')) {
            return value;
        }
        else {
            return this.naText; 
        }
    }
}
