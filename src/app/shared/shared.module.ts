import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { HeadingComponent } from './heading/heading.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { ShapeComponent } from './shape/shape.component';
import { SubtitleComponent } from './subtitle/subtitle.component';


@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    HeadingComponent,
    ParagraphComponent,
    ShapeComponent,
    SubtitleComponent
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    HeadingComponent,
    ParagraphComponent,
    ShapeComponent,
    SubtitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
