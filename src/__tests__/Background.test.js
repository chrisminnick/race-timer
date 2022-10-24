import { render, screen } from '@testing-library/react';
import Background from '../components/Background';

test('renders the background component', () => {
  render(<Background />);
  const backgroundId = screen.getByTestId('background');
  expect(backgroundId).toBeInTheDocument();
});
