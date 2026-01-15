import React from 'react';
import Ending from './Ending';

const EndingGood: React.FC = () => (
  <Ending
    title="Victory!"
    message="You won — congratulations!"
    imageUrl="/images/endings/good.png"
    cta="Play again"
    variant="ending-good"
  />
);

export default EndingGood;
