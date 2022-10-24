import { useState, useEffect } from 'react';
import Contestant from './Contestant.jsx';
import { contestantStyles } from '../styles';
import { useNavigate } from 'react-router-dom';
import '../styles/race.css';

function Race(props) {
  let navigateTo = useNavigate();
  const handleStop = () => {
    props.stopTimer();
    navigateTo('/config');
  };

  useEffect(() => {
    let newContestantPos = props.contestants.map((contestant) => {
      return {
        ...contestant,
        xpos: contestant.xpos + Math.floor(Math.random() * 80) - 40,
      };
    });
    props.setContestants(newContestantPos);
    if (props.currentTime === 0) {
      props.stopTimer();
      alert(winner().name + ' is the winner!');
    }
  }, [props.currentTime]);

  function winner() {
    let winner = props.contestants[0];
    for (
      let i = 0;
      i <
      props.contestants.filter((contestant, index) => index < props.numPlayers)
        .length;
      i++
    ) {
      if (props.contestants[i].xpos > winner.xpos) {
        winner = props.contestants[i];
      }
    }
    return winner;
  }

  return (
    <div className="Finish-Line" style={contestantStyles.contestantList}>
      {props.contestants
        .filter((contestant, index) => index < props.numPlayers)
        .map((contestant) => (
          <Contestant
            key={contestant.id}
            name={contestant.name}
            xpos={contestant.xpos}
          />
        ))}
      <button onClick={handleStop}>Stop the Timer!</button>
    </div>
  );
}
export default Race;
