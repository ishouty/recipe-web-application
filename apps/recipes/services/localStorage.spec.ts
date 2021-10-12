import { getClientRecipes, setClientRecipes } from './localStorage';

describe('localStorage', () => {
  describe('getClientRecipes', () => {
    it('should return you recipe items ', () => {
      const getSpy = jest.spyOn(localStorage, 'getItem');
      getClientRecipes();
      expect(getSpy).toHaveBeenCalledWith('recipes');
    });
  });

  describe('setClientRecipes', () => {
    it('should set recipe items', () => {
      const setSpy = jest.spyOn(localStorage, 'setItem');
      setClientRecipes('recipes', '[{ id: 1 }]');
      expect(setSpy).toHaveBeenCalledWith('recipes', '[{ id: 1 }]');
    });
  });
});
