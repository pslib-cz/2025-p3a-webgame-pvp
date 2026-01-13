import React from 'react';
import Ending from './Ending';

const EndingSecret: React.FC = () => (
  <Ending
    title="Secret Ending"
    message="You discovered the secret!"
    imageUrl="/assets/images/endings/secret.png"
    cta="Celebrate"
    variant="ending-secret"
  />
);

export default EndingSecret;
