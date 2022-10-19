import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Configuration from './components/Configuration';
import Timer from './components/Timer';
import Race from './components/Race';
import { useState, useEffect } from 'react';
import Background from './components/Background';

function App() {
  let initialTime = 60;
  const [currentTime, setCurrentTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(currentTime - 1);
    }, 250);
    return () => clearInterval(interval);
  });

  return (
    <>
      <Router>
        <Link to="/config">Config Screen</Link> |{' '}
        <Link to="/game">Game Screen</Link>
        <Routes>
          <Route path="/config" element={<Configuration />} />
          <Route
            path="/game"
            element={
              <Background>
                <Timer currentTime={currentTime} />
                <Race currentTime={currentTime} />
              </Background>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
