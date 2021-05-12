import { newSpecPage } from '@stencil/core/testing';
import { AppLanding } from '../app-landing';

describe('app-landing', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppLanding],
      html: `<app-landing></app-landing>`,
    });
    expect(page.root).toEqualHtml(`
      <app-landing>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-landing>
    `);
  });
});
