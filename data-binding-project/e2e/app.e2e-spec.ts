import { DataBindingProjectPage } from './app.po';

describe('data-binding-project App', () => {
  let page: DataBindingProjectPage;

  beforeEach(() => {
    page = new DataBindingProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
