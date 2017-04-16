import { ProjectApplicationPage } from './app.po';

describe('project-application App', () => {
  let page: ProjectApplicationPage;

  beforeEach(() => {
    page = new ProjectApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
