import { My4Page } from './app.po';

describe('my4 App', () => {
  let page: My4Page;

  beforeEach(() => {
    page = new My4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
