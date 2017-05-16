import { CyberPage } from './app.po';

describe('cyber App', () => {
  let page: CyberPage;

  beforeEach(() => {
    page = new CyberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
