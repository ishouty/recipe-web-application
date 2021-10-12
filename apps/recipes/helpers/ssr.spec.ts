import { isSSR } from './ssr';

describe('isSSR', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return false if window is defined', () => {
    expect(isSSR()).toEqual(false);
  });
  it('should return true if window is undefined', () => {
    delete global.window;
    expect(isSSR()).toEqual(true);
  });
});
