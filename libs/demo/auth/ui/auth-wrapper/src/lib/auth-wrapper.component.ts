import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { DemoTemplateDirective } from '@panng-stream/demo/shared/ui/demo-template';
import { Destroyable } from '@panng-stream/demo/shared/ui/destroyable';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'demo-auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthWrapperComponent
  extends Destroyable
  implements AfterContentInit {
  @Input() title!: string;

  @ContentChildren(DemoTemplateDirective)
  templates!: QueryList<DemoTemplateDirective>;

  contentTemplate?: TemplateRef<unknown>;

  ngAfterContentInit(): void {
    this.templates.changes
      .pipe(startWith(this.templates), takeUntil(this.$destroy))
      .subscribe((templates: DemoTemplateDirective[]) => {
        templates.forEach(({ template, demoTemplateRef }) => {
          switch (template) {
            case 'content':
              this.contentTemplate = demoTemplateRef;
              break;
          }
        });
      });
  }
}
