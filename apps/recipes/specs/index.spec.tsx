import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';

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

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index data={mock} />);
    expect(baseElement).toBeTruthy();
  });
});
