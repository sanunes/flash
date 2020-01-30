import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { IFlash } from './flash.model';
import { FlashService } from './flash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('flashForm', {static: true}) flashForm: NgForm;
  editing = false;
  editingId: number;

  flash: IFlash = {
    id: -1,
    question: '',
    answer: '',
    show: false
  };

  flashs$: Observable<IFlash[]>;
  flashs;

  constructor(private flashService: FlashService) {
    this.flashs$ = flashService.flashs$;
  }

  ngOnInit() {
    this.flashs$ = this.flashService.flashs$;
  }

  trackByFlashId(index, flash) {
    return flash.id;
  }

  handleSubmit(): void {
    this.flashService.addFlash(this.flash);
    this.handleClear();
  }

  handleClear() {
    this.flash = {
      id: -1,
      question: '',
      answer: '',
      show: false
    };

    this.flashForm.reset();
  }

  handleToggleCard(id: number) {
    this.flashService.toggleFlash(id);
  }

  handleDelete(id: number)  {
    this.flashService.deleteFlash(id);
  }

  handleEdit(id: number) {
    this.flash = this.flashService.getFlash(id);
    this.editing = true;
    this.editingId = id;
  }

  handleRememberedChange({id, flag}) {
    this.flashService.rememberedChange(id, flag);
  }

  handleUpdate() {
    this.flashService.updateFlash(this.editingId, this.flash);
    this.handleCancel();
  }

  handleCancel() {
    this.editing = false;
    this.editingId = undefined;
    this.handleClear();
  }

}

