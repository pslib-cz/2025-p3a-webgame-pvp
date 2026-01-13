import React from 'react';
import Ending from './Ending';

const EndingBankrupt: React.FC = () => (
  <Ending
    title="Bankrupt Ending"
    message="You lost all your money — time to rethink your strategy."
    imageUrl="/assets/images/endings/bankrupt.png"
    cta="Restart"
    variant="ending-bankrupt"
  />
);

export default EndingBankrupt;
