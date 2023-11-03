import { Component, Input } from '@angular/core';
import { DemoItem } from '../demo-item';

@Component({
  selector: 'app-assed-body',
  templateUrl: './assed-body.component.html',
  styleUrls: ['./assed-body.component.css']
})
export class AssedBodyComponent {

  @Input()
  asset?: DemoItem;

  constructor() {
   }
}
