import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tooltip',
  template: `
      <div *ngIf="tooltipMessage" class="tooltip-box float-left">
              {{tooltipMessage}} 

            <span   (click)="closeMessage()">[OK]</span>
        </div>
        
        `,
  styles: [`
   .float-right { float:right; }  
   .tooltip-box{ 
     background:rgba(100,100,100,.5); 
   }
   span{
     cursor:pointer;
   }`]
})
export class TooltipComponent {
  @Input() tooltipMessage: string;
  @Output('dismiss') dismiss: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    console.log("tooltipMessage", this.tooltipMessage);
  }
  closeMessage() {
    this.dismiss.emit({ "isDismiss": true, "messageFromChild": "Already dismiss at child component" });
  }
}
