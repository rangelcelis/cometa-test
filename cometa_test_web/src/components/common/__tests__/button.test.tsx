import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import { describe } from 'node:test';

describe("Button's test", () => {
  test('render a normal button', () => {
    render(
      <Button shape="normal" onClick={() => {}}>
        Label
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Label' });
    expect(button).toBeDefined();
  });

  test('render a normal button disabled', () => {
    render(
      <Button shape="normal" onClick={() => {}} disabled>
        Label
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Label' });
    expect(button).toHaveProperty('disabled', true);
  });
});
