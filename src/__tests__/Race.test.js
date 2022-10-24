import { render, screen } from '@testing-library/react';
import Race from '../components/Race';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders the race component', () => {
  render(
    <Router>
      <Race
        contestants={[{ id: '0', name: 'Ola', xpos: 500, ypos: 0 }]}
        setContestants={jest.fn()}
      />
    </Router>
  );
  const raceId = screen.getByTestId('race');
  expect(raceId).toBeInTheDocument();
});

test('renders the race component', () => {
  const setContestants = jest.fn();
  render(
    <Router>
      <Race
        contestants={[{ id: '0', name: 'Ola', xpos: 500, ypos: 0 }]}
        setContestants={setContestants}
      />
    </Router>
  );

  expect(setContestants).toHaveBeenCalled();
});
