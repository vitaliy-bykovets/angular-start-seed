import { AngularStartSeedPage } from './app.po';

describe('angular-start-seed App', () => {
  let page: AngularStartSeedPage;

  beforeEach(() => {
    page = new AngularStartSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
