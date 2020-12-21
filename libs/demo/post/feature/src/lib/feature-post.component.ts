import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApolloAngularSDK } from '../../../../sdk/src/generated/graphql';

@Component({
  selector: 'demo-feature-post',
  template: `
    <pre>{{ postsResponse$ | async | json }}</pre>
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
export class FeaturePostComponent {
  postsResponse$ = this.sdk.posts().pipe(map((result) => result.data.posts));

  constructor(private readonly sdk: ApolloAngularSDK) {
    this.sdk.createPost({ input: { text: 'noice' } }).subscribe(console.log);
  }
}
