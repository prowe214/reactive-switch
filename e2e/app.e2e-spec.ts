import { ReactiveSwitchPage } from './app.po';

describe('reactive-switch App', function() {
  let page: ReactiveSwitchPage;

  beforeEach(() => {
    page = new ReactiveSwitchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
