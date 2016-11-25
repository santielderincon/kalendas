import { KalendasPage } from './app.po';

describe('kalendas App', function() {
  let page: KalendasPage;

  beforeEach(() => {
    page = new KalendasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
