import { DiretivasExamplesPage } from './app.po';

describe('diretivas-examples App', () => {
  let page: DiretivasExamplesPage;

  beforeEach(() => {
    page = new DiretivasExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
