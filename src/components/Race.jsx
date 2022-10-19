import { useState, useEffect } from 'react';
import Contestant from './Contestant.jsx';
import { contestantStyles } from '../styles';
import { contestants } from '../assets/data';

function Race(props) {
  const [everyContestant, setAllContestants] = useState(contestants)

  useEffect(() => {
    for(contestant in everyContestant) {
      contestant.xpos += 50;
    }
  });

  return (
    <div style={contestantStyles.contestantList}>
      {props.currentTime}
      {contestants.map((contestant) => (
        <Contestant
          key={contestant.id}
          name={contestant.name}
          xpos={contestant.xpos}
        />
      ))}
    </div>
  );
}

export default Race;
