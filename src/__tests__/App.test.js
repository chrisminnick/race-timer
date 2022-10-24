import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders a config link', () => {
  render(<App />);
  const configLink = screen.getByText(/Config Screen/i);
  expect(configLink).toBeInTheDocument();
});
