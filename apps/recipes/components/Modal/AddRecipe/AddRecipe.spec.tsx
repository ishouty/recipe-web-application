import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AddRecipe from './AddRecipe';
import mockRecipes from '../../../mock/recipes.json';
import TEXT from '../../../constants/text';

jest.mock('next/image', () => {
  return () => null;
});
describe('AddRecipe', () => {
  it('should display modal', async () => {
    const { getByText, container } = await render(
      <AddRecipe
        show={true}
        recipes={mockRecipes}
        setRecipes={jest.fn()}
        setShow={jest.fn()}
      />
    );

    expect(container.querySelectorAll('.modal-content')).not.toBeNull();
    expect(getByText('Title *')).toBeTruthy();
    expect(getByText('Instructions *')).toBeTruthy();
  });

  it('should not display modal', () => {
    const { container } = render(
      <AddRecipe
        show={false}
        recipes={mockRecipes}
        setRecipes={jest.fn()}
        setShow={jest.fn()}
      />
    );

    expect(container.querySelector('.modal-content')).toBeNull();
  });

  describe('Validation', () => {
    it('Should appear error messages if fields are empty', async () => {
      const { getAllByText, getByText } = await render(
        <AddRecipe
          show={true}
          recipes={mockRecipes}
          setRecipes={jest.fn()}
          setShow={jest.fn()}
        />
      );

      await waitFor(async () => {
        fireEvent.click(getByText('ADD RECIPE'));
      });

      expect(getAllByText(TEXT.VALIDATION.ERRORS.REQUIRED).length).toEqual(2);
      expect(getByText(TEXT.VALIDATION.ERRORS.DURATION_NUMBER)).toBeTruthy();
    });
  });
});
