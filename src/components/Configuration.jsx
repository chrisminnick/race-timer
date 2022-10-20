import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Configuration(props) {
  let navigateTo = useNavigate();
  const [newLength, setNewLength] = useState(60);

  function handleChange(newTime) {
    setNewLength(newTime);
    props.setLength(newTime);
  }

  const handleStart = () => {
    props.startTimer();
    navigateTo('/timer');
  };
  return (
    <div>
      <label>Length of Timer:</label>
      <input
        type="text"
        value={newLength}
        onChange={(e) => handleChange(e.target.value)}
      />
      <br />
      <label>Number of Contestants:</label>
      <input
        type="number"
        value={props.numPlayers}
        onChange={(e) => props.setNumContestants(e.target.value)}
      />
      <button onClick={handleStart}>Start the Timer!</button>
    </div>
  );
}
export default Configuration;
