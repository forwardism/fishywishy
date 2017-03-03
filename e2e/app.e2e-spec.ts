import { MyfishPage } from './app.po';

describe('myfish App', () => {
  let page: MyfishPage;

  beforeEach(() => {
    page = new MyfishPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
