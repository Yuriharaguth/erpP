import { ErpPPage } from './app.po';

describe('erp-p App', () => {
  let page: ErpPPage;

  beforeEach(() => {
    page = new ErpPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
