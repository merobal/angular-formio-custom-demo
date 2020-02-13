import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  builder = true;
  form: any = {};

  onChange(event: any) {
    console.log(event);
    if (['addComponent', 'saveComponent', 'deleteComponent'].indexOf(event.type) > -1) {
      this.form = event.form;
    }
  }
}
