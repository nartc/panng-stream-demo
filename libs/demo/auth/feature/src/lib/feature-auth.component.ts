import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-feature-auth',
  template: `
    <p>feature-auth works!</p>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureAuthComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
