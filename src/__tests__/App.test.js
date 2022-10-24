import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders a config link', () => {
  render(<App />);
  const configLink = screen.getByText(/Config Screen/i);
  expect(configLink).toBeInTheDocument();
});

function success(result) {
  expect(result).toBe(true);
}
function failure(err) {
  console.log('there was an error', err);
}
test('logs user in when they enter a good username and pass', () => {
  return authenticate('joe', 'fvknsaddflkdfk22232').then(success, failure);
});

function sum(num1, num2) {
  if (typeof num1 != 'number' || typeof num2 != 'number') {
    return 'Both arguments must be numbers.';
  }
  return num1 + num2;
}

describe('sum adds numbers', () => {
  it('returns the sum of two numbers', () => {
    const expected = 6;
    const actual = sum(4, 2);
    expect(actual).toEqual(expected);
  });

  it(`returns an error message when either argument isn't a number`, () => {
    const expected = 'Both arguments must be numbers.';
    const actual = sum('test', 3);
    expect(actual).toEqual(expected);
  });
});
