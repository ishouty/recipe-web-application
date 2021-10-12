import React from 'react';
import { render } from '@testing-library/react';
import RecipeList from './RecipesList';

jest.mock('next/image', () => {
  return () => null;
});
describe('RecipeList', () => {
  it('Should render component with mock details', async () => {
    const mock = [
      {
        id: 1,
        title: 'mock 1',
        instructions: 'instructions 1',
        duration: 200,
        image_768px_768px: 'http://dummyimage.com/250x250.png/dddddd/000000',
        image_320px_320px: 'http://dummyimage.com/250x250.png/dddddd/000000',
        image_1000px_400px: 'http://dummyimage.com/250x250.png/dddddd/000000',
      },
      {
        id: 2,
        title: 'mock 2',
        instructions: 'instruction 2',
        duration: 600,
        image_768px_768px: 'http://dummyimage.com/250x250.png/dddddd/000000',
        image_320px_320px: 'http://dummyimage.com/250x250.png/dddddd/000000',
        image_1000px_400px: 'http://dummyimage.com/250x250.png/dddddd/000000',
      },
    ];

    const { getAllByText, findByText } = await render(
      <RecipeList data={mock} />
    );

    expect(getAllByText(mock[0].title)).toBeTruthy();
    expect(getAllByText(mock[1].title)).toBeTruthy();
    expect(await findByText(/200/)).toBeTruthy();
    expect(await findByText(/600/)).toBeTruthy();
  });
});
