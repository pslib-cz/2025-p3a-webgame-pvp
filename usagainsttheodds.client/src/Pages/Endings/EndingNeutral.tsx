import React from 'react';
import Ending from './Ending';

const EndingNeutral: React.FC = () => (
  <Ending
    title="The End"
    message="Thanks for playing!"
    imageUrl="/images/endings/neutral.png"
    cta="Back to menu"
    variant="ending-neutral"
  />
);

export default EndingNeutral;
