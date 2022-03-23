import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent  {

  @Input()
  orderVision: string = 'visibility: hidden';

  orderVisionON():void {
    this.orderVision = 'visibility: visible';
  }
}
