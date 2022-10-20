function Configuration(props) {
  // Removed navigation so that Configuration and App are on same page
  const handleStart = () => {
    props.startTimer();
  };

  return (
    <div>
      <label>Length of Timer:</label>
      <input
        type="text"
        value={props.length}
        onChange={(e) => props.setLength(e.target.value)}
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
