import { newSpecPage } from '@stencil/core/testing';
import { AppFinal } from '../app-final';

describe('app-final', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppFinal],
      html: `<app-final></app-final>`,
    });
    expect(page.root).toEqualHtml(`
      <app-final>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-final>
    `);
  });
});
