import { ServicosExamplesPage } from './app.po';

describe('servicos-examples App', () => {
  let page: ServicosExamplesPage;

  beforeEach(() => {
    page = new ServicosExamplesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
