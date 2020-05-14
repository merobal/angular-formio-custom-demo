import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormioCustomComponent } from 'angular-formio';

@Component({
  selector: 'app-rating-wrapper',
  templateUrl: './rating-wrapper.component.html',
  styleUrls: ['./rating-wrapper.component.scss']
})
export class RatingWrapperComponent implements FormioCustomComponent<number>, OnInit {
  @Input()
  value: number;

  @Output()
  valueChange = new EventEmitter<number>();

  @Input()
  disabled: boolean;

  ngOnInit() {
    console.log('onInit');
  }
}
