import { render, screen } from '@testing-library/react';
import Configuration from '../components/Configuration';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders the configuration component', () => {
  render(
    <Router>
      <Configuration />
    </Router>
  );
  const configurationId = screen.getByTestId('configuration');
  expect(configurationId).toBeInTheDocument();
});
