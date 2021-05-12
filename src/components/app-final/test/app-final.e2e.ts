import { newE2EPage } from '@stencil/core/testing';

describe('app-final', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-final></app-final>');

    const element = await page.find('app-final');
    expect(element).toHaveClass('hydrated');
  });
});
