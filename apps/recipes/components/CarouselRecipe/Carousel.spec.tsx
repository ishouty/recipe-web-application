import React from 'react';
import { render, screen } from '@testing-library/react';
import CarouselRecipe from './CarouselRecipe';
import mockRecipes from '../../mock/recipes.json';

jest.mock('next/image', () => {
  return () => null;
});
describe('CarouselRecipe', () => {
  it('should render component with mock details', () => {
    const { baseElement } = render(<CarouselRecipe recipes={mockRecipes} />);
    expect(baseElement).toBeTruthy();
  });
});
