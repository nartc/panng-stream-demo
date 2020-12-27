import { Directive, Input, TemplateRef } from '@angular/core';
import { DemoTemplate } from './demo-template.type';

@Directive({
  selector: 'ng-template[demoTemplate]',
})
export class DemoTemplateDirective {
  @Input() set demoTemplate(value: DemoTemplate) {
    if (!value) {
      throw new Error('Template cannot be empty');
    }

    this._template = value;
  }

  private _template!: DemoTemplate;
  get template(): DemoTemplate {
    return this._template;
  }

  constructor(public readonly demoTemplateRef: TemplateRef<unknown>) {}
}
