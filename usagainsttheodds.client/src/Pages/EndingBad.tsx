import React from 'react';
import Ending from './Ending';

const EndingBad: React.FC = () => (
  <Ending
    title="Game Over"
    message="You lost — better luck next time."
    imageUrl="/assets/images/endings/bad.png"
    cta="Try again"
    variant="ending-bad"
  />
);

export default EndingBad;
