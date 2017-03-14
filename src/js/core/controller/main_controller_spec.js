import MainController from './main_controller';

describe('The main controller', () => {
  let controller;

  beforeEach(() => {
    controller = new MainController();
  });

  it('should be defined', () => {
    controller.should.be.defined;
  });

  it('should share data to the view', () => {
    controller.data.should.equal('hello');
  });
});
