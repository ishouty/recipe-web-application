import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  it('Should render title and child component', () => {
    const mock = {
      title: 'My name is mock man',
    };

    const Component = () => {
      return <div>{mock.title}</div>;
    };
    const { getByText } = render(
      <Layout title={mock.title}>
        <Component />
      </Layout>
    );

    expect(getByText(mock.title)).toBeTruthy();
  });
});
