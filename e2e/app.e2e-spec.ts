import { RecipeShoppingPage } from './app.po';

describe('recipe-shopping App', () => {
  let page: RecipeShoppingPage;

  beforeEach(() => {
    page = new RecipeShoppingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
