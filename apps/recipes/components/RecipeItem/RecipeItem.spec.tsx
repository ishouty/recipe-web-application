import React from 'react';
import { render } from '@testing-library/react';
import RecipeItem from './RecipeItem';

jest.mock('next/image', () => {
  return () => null;
});
describe('RecipeItem', () => {
  it('Should render component with mock details', async () => {
    const mock = {
      id: 12,
      title: 'hdjkhfdsjkhds jkh sdfj',
      instructions: 'hdskjh dasj',
      duration: 21,
      image_768px_768px: 'http://dummyimage.com/250x250.png/dddddd/000000',
      image_320px_320px: 'http://dummyimage.com/250x250.png/dddddd/000000',
      image_1000px_400px: 'http://dummyimage.com/250x250.png/dddddd/000000',
    };

    const { getByText, findByText, container } = render(
      <RecipeItem
        id={mock.id}
        title={mock.title}
        instructions={mock.instructions}
        duration={mock.duration}
        image_768px_768px={mock.image_768px_768px}
        image_320px_320px={mock.image_320px_320px}
      />
    );

    expect(getByText(mock.title)).toBeTruthy();
    expect(await findByText(/21/)).toBeTruthy();
  });
});
