import * as React from 'react';

import { render } from '@testing-library/react';

import Login from './Login';

test("renders Sign up", () => {
  const { getByRole } = render(<Login />);
  const linkElement = getByRole("button", {
    name: /Sign up/i,
  });
  expect(linkElement).toBeInTheDocument();
});

test("renders Sign in", () => {
  const { getByRole } = render(<Login />);
  const linkElement = getByRole("link", {
    name: /Sign in/i,
  });
  expect(linkElement).toBeInTheDocument();
});

test("renders terms", () => {
  const { getByRole } = render(<Login />);
  const linkElement = getByRole("link", {
    name: /terms/i,
  });
  expect(linkElement).toBeInTheDocument();
});
