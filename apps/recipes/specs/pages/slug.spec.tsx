import RecipeSlug from '../../pages/recipe/[slug]';
import { render } from '@testing-library/react';
import mockRecipes from '../../mock/recipes.json';
describe('[slug]', () => {
  it('should render the page', () => {
    const { baseElement } = render(<RecipeSlug id="1" data={mockRecipes[0]} />);
    expect(baseElement).toBeTruthy();
  });
});
