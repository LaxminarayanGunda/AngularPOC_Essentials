import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { 
  UndefinedToNAText
} from './UndefinedToNA.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    UndefinedToNAText,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 
