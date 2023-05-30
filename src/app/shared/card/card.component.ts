import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  @Input('heading') heading: string = '';
  @Input('subtitle') subtitle: string = '';
  @Input('paragraph') paragraph: string = '';
  @Input('buttonLabel') buttonLabel: string = '';
}
