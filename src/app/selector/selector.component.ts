import { Component } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent  {

  vision: string = 'visibility: hidden';

  visionON():void {
    this.vision = 'visibility: visible';
  }
}
