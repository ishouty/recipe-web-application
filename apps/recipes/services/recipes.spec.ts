import { getRecipes, getRecipe } from './recipes';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios').default;
import mockRecipe from '../mock/recipes.json';
jest.mock('axios');

const errorResponse = { code: 'not-found' };

describe('recipes', () => {
  describe('getRecipes', () => {
    it('should return recipes', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: mockRecipe }));
      const response = await getRecipes();
      expect(response).toEqual(mockRecipe);
    });

    it('should return not found if not response', async () => {
      axios.get.mockImplementation(() => Promise.resolve({}));
      const response = await getRecipes();
      expect(response).toEqual(errorResponse);
    });
  });

  describe('getRecipe', () => {
    it('should return you response based on id', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: mockRecipe }));
      const response = await getRecipe(1);
      expect(response).toEqual(mockRecipe[0]);
    });

    it('should return not found if not response', async () => {
      axios.get.mockImplementation(() => Promise.resolve({}));
      const response = await getRecipe(1);
      expect(response).toEqual(errorResponse);
    });
  });
});
