import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IFlash } from './flash.model';
function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flash';
  editing = false;
  editingId: number;
  flash = {
    question: '',
    answer: '',
    show: false
  };
  @ViewChild('flashForm', {static: true}) flashForm: NgForm;

  flashs: IFlash[] = [{
    id: getRandomNumber(),
    question: 'QQQQQQQQQQQQQQQQQ1?',
    answer: 'RRRRRRRRRRRRRRRRR1',
    show: false,
  }, {
    id: getRandomNumber(),
    question: 'QQQQQQQQQQQQQQQQQ2?',
    answer: 'RRRRRRRRRRRRRRRRR2',
    show: false,
  }, {
    id: getRandomNumber(),
    question: 'QQQQQQQQQQQQQQQQQ3?',
    answer: 'RRRRRRRRRRRRRRRRR3',
    show: false,
  }, {
    id: getRandomNumber(),
    question: 'QQQQQQQQQQQQQQQQQ4?',
    answer: 'RRRRRRRRRRRRRRRRR4',
    show: false,
  }];

  trackByFlashId(index, flash) {
    return flash.id;
  }

  handleToggleCard(id: number) {
    const flash = this.flashs.find(flash => flash.id === id);
    flash.show = !flash.show;
  }

  handleDelete(id: number)  {
    //  @todo: use another way to get index, indexOf not getting index
    let index = 0;
    for (const flash of this.flashs) {if (flash.id !== id) {  index++; } else { break; }}
    this.flashs.splice(index, 1);
  }

  handleEdit(id: number) {
    this.editing = true;
    this.editingId = id;
    const flash = this.flashs.find(flash => flash.id === id);
    this.flash.question = flash.question;
    this.flash.answer = flash.answer;
  }

  handleRememberedChange({id, flag}) {
    console.log('ID: ', id);
    const flash = this.flashs.find(flash => flash.id === id);
    console.log('FLASH: ', flash);
    flash.remembered = flag;
  }

  generateId(): number {
    return getRandomNumber();
  }

  handleSubmit(): void {
    this.flashs.push({
      id: this.generateId(),
      ...this.flash,
    });
    this.handleClear();
  }

  handleClear() {
    this.flash = {
      question: '',
      answer: '',
      show: false
    };

    this.flashForm.reset();
  }

  handleUpdate() {
    const flash = this.flashs.find(flash => flash.id === this.editingId);
    flash.question = this.flash.question;
    flash.answer = this.flash.answer;
    this.handleCancel();
  }

  handleCancel() {
    this.editing = false;
    this.editingId = undefined;
    this.handleClear();
  }

}

