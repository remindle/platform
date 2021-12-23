import * as React from 'react';

import { render } from '@testing-library/react';

import { Page } from './index.page';

test("renders Sign in button", () => {
  const { getByRole } = render(<Page />);
  const linkElement = getByRole("button", {
    name: /Sign in/i,
  });

  expect(linkElement).toBeInTheDocument();
});

test("renders Sign up link", () => {
  const { getByRole } = render(<Page />);
  const linkElement = getByRole("link", {
    name: /Sign up/i,
  });

  expect(linkElement).toBeInTheDocument();
});
