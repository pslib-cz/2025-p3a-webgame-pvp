import React from 'react';
import Ending from './Ending';

const EndingThirsty: React.FC = () => (
  <Ending
    title="Thirsty Ending"
    message="You couldn't find any drinks — you left thirsty and weak."
    imageUrl="/assets/images/endings/thirsty.png"
    cta="Find water"
    variant="ending-thirsty"
  />
);

export default EndingThirsty;
