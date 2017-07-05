import { PipesExamplesPage } from './app.po';

describe('pipes-examples App', () => {
  let page: PipesExamplesPage;

  beforeEach(() => {
    page = new PipesExamplesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
