import * as React from 'react';

import { render } from '@testing-library/react';

import Layout from './Layout';

test("renders learn react link", () => {
  const { getByText } = render(<Layout />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("does not render an learn vue link", () => {
  const { queryByText } = render(<Layout />);
  const linkElement = queryByText(/learn vue/i);
  expect(linkElement).not.toBeInTheDocument();
});
