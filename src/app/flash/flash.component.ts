import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFlash } from './../flash.model';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent {
  @Output() onToggleCard = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onRememberedChange = new EventEmitter();

  @Input() flash: IFlash = {
    question: '',
    answer: '',
    id: 0,
    show: false,
  };

  toggleCard() {
    this.onToggleCard.emit(this.flash.id);
  }

  deleteFlash() {
    console.log('THIS ID: ', this.flash.id);
    this.onDelete.emit(this.flash.id);
  }

  editFlash() {
    this.onEdit.emit(this.flash.id);
  }

  markCorrect() {
    console.log('marking correct');
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'correct',
    });
  }

  markIncorrect() {
    console.log('marking incorrect');
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'incorrect',
    });
  }
}
