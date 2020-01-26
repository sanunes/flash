import { Component } from '@angular/core';
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

  handleToggleCard(id: number) {
    const flash = this.flashs.find(flash => flash.id === id);
    flash.show = !flash.show;
  }
}
