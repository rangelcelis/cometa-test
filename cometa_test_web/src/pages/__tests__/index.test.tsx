import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../index';
import { describe } from 'node:test';

describe("Home's test", () => {
  test('render Home page', () => {
    render(<Home />);

    expect(screen.getByText(/welcome/i)).toBeDefined();
    expect(screen.getByRole('heading', { level: 1, name: 'Bar Tolo' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Order' })).toBeDefined();
  });
});
