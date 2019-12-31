import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextboxComponent } from './textbox.component';
import { TooltipComponent } from './tooltip.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TextboxComponent, TooltipComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
