import * as React from 'react';

import { render } from '@testing-library/react';

import { Page } from './index.page';

test("renders Get started button", () => {
  const { getByRole } = render(<Page />);
  const linkElement = getByRole("button", {
    name: /Get started/i,
  });

  expect(linkElement).toBeInTheDocument();
});

test("renders Sign in link", () => {
  const { getByRole } = render(<Page />);
  const linkElement = getByRole("link", {
    name: /Sign in/i,
  });

  expect(linkElement).toBeInTheDocument();
});

test("renders terms link", () => {
  const { getByRole } = render(<Page />);
  const linkElement = getByRole("link", {
    name: /terms/i,
  });

  expect(linkElement).toBeInTheDocument();
});
