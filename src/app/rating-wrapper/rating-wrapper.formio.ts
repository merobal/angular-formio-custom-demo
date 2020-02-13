import { Injector } from '@angular/core';
import { FormioCustomComponentInfo, registerCustomFormioComponent } from 'angular-formio';
import { RatingWrapperComponent } from './rating-wrapper.component';

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'myrating',
  selector: 'my-rating',
  title: 'Rating',
  group: 'basic',
  icon: 'fa fa-star',
};

export function registerRatingComponent(injector: Injector) {
  registerCustomFormioComponent(COMPONENT_OPTIONS, RatingWrapperComponent, injector);
}
