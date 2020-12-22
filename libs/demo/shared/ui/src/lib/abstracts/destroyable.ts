import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class Destroyable implements OnDestroy {
  protected $destroy = new Subject();

  ngOnDestroy(): void {
    this.$destroy.next();
  }
}
