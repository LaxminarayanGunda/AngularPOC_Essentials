import { Component, Input } from '@angular/core';

@Component({
  selector: 'textbox',
  template: `
  <div>
  Value from App : {{name}}
  <p>Fill in  values, blank field value or press ok button to dismiss/toggle tooltip</p>
  <label>Username:</label>
  <input (keyup)="handleKeyup($event)" id="userName" type="text" />
  <tooltip 
   [tooltipMessage]=" generalTooltipMessage"
   (dismiss)="handleMessageFromChild($event)" >
  </tooltip>
<br/>
  Message From Tooltip Component: {{callBackTooltipMessage}}
 </div>`,
  styles: []
})
export class TextboxComponent {
  @Input() name: string;
  generalTooltipMessage = 'User name cannot be empty'
  callBackTooltipMessage = '';

  handleKeyup(_event) {
    const inputValue = _event.target.value;
    this.generalTooltipMessage = '';
    if (!inputValue) {
      this.generalTooltipMessage = 'User name cannot be empty';
    }

  }
  handleMessageFromChild(_event) {
    console.log('_event', _event);

    if (_event.isDismiss) {
      this.callBackTooltipMessage = _event.messageFromChild;
    }
  }
}
