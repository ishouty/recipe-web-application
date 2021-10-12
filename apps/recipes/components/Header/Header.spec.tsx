import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  const mock = {
    title: 'My name is mock man',
  };
  it('Should render component and call callback', async () => {
    const mockCall = jest.fn();

    const { getByText } = await render(
      <Header title={mock.title} setShow={mockCall} />
    );
    await fireEvent.click(screen.getByText(/ADD NEW RECIPE/i));
    expect(mockCall).toBeCalled();
    expect(getByText(mock.title)).toBeTruthy();
  });
});
