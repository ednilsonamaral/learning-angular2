import { RotasExamplesPage } from './app.po';

describe('rotas-examples App', () => {
  let page: RotasExamplesPage;

  beforeEach(() => {
    page = new RotasExamplesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
