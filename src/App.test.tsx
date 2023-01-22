import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import App from './App';

describe('App', () => {
  it('Renders Hello World', () => {
    // Arrange / Setup
    render(<App />);
    // Act
    // Expect
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello World'
    );
    // expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
