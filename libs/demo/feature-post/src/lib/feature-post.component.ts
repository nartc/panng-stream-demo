import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'demo-feature-post',
  template: `
    <p>
      feature-post works!
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturePostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
