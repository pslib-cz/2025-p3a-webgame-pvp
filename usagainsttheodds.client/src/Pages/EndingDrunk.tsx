import React from 'react';
import Ending from './Ending';

const EndingDrunk: React.FC = () => (
  <Ending
    title="Drunk Ending"
    message="You drank too much — the night took its toll."
    imageUrl="/assets/images/endings/drunk.png"
    cta="Try to sober up"
    variant="ending-drunk"
  />
);

export default EndingDrunk;
