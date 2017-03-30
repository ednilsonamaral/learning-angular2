import { ProjetoStylusPage } from './app.po';

describe('projeto-stylus App', () => {
  let page: ProjetoStylusPage;

  beforeEach(() => {
    page = new ProjetoStylusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
