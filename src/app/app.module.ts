import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { HeadingComponent } from './heading/heading.component';
import { ShapeComponent } from './shape/shape.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeadingComponent,
    ShapeComponent,
    ParagraphComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
