import { render, screen } from '@testing-library/react';
import Timer from '../components/Timer';

test('it outputs the current time', () => {
  render(<Timer currentTime="12" />);
  const currentTime = screen.getByText(/12/i);
  expect(currentTime).toBeInTheDocument();
});
