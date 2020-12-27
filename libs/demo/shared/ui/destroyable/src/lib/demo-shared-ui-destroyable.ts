import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class Destroyable implements OnDestroy {
  protected $destroy = new Subject();

  ngOnDestroy(): void {
    this.$destroy.next();
  }
}
