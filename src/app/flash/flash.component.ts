import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFlash } from './../flash.model';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent {
  @Input() flash: IFlash = {
    id: 1,
    question: 'Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1Q1?',
    answer: 'R1R1R1R1R1R1R1R1R1R1R1R1R1',
    show: false,
  };

  @Output() onToggleCard = new EventEmitter();
  toggleCard() {
    this.onToggleCard.emit(this.flash.id);
  }

}
