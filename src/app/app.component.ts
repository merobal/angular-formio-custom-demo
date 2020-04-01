import { Component } from '@angular/core';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  builder = true;
  form: any = {};
  private _form: any = {};

  onChange(event: any) {
    console.log(event);
    if (['addComponent', 'saveComponent', 'deleteComponent'].indexOf(event.type) > -1) {
      this._form = cloneDeep(event.form);
    }
  }

  toggleBuilder() {
    this.builder = !this.builder;
    this.form = cloneDeep(this._form);
  }
}
