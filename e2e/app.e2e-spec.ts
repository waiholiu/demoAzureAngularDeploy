import { DemoAzureAngularDeployPage } from './app.po';

describe('demo-azure-angular-deploy App', () => {
  let page: DemoAzureAngularDeployPage;

  beforeEach(() => {
    page = new DemoAzureAngularDeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
