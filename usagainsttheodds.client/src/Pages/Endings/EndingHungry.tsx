import React from 'react';
import Ending from './Ending';

const EndingHungry: React.FC = () => (
  <Ending
    title="Hungry Ending"
    message="You ran out of resources and couldn't refuel — you left hungry."
    imageUrl="/images/endings/hungry.png"
    cta="Get food"
    variant="ending-hungry"
  />
);

export default EndingHungry;
