import { useNavigate } from 'react-router-dom';

//Config page, move to race by calling startTimer() after hitting start button
function Configuration(props) {
  let navigateTo = useNavigate();
  const handleStart = () => {
    props.startTimer();
    navigateTo('/timer');
  };
  return (
    <div data-testid="configuration">
      {/*Input area for setting timer */}
      <label>Length of Timer:</label>
      <input
        type="text"
        value={props.length}
        onChange={(e) => props.setLength(e.target.value)}
      />
      <br />
      {/*Input area for setting number of contestents */}
      <label>Number of Contestants:</label>
      <input
        type="number"
        value={props.numPlayers}
        onChange={(e) => props.setNumPlayers(e.target.value)}
      />
      <button onClick={handleStart}>Start the Timer!</button>
    </div>
  );
}
export default Configuration;
