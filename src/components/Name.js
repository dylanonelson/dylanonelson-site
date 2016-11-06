import React from 'react';
import { style } from 'glamor';

const name =
`
         /DDDDD   /DD    DD  /DD       / DDD     /DD   /DD       
        | DD  DD  \\ DD  DD  | DD      / D   D   | DDDD  DD       
        | DD  DD   \\ DDDD   | DD     | DD   DD  | DD DD DD       
        | DD  DD    | DD    | DD     | DDDDDDD  | DD  DDDD       
        | DD  DD    | DD    | DD     | DD _ DD  | DD \\  DD       
        | DDDDD     | DD    | DDDDD  | DD | DD  | DD  | DD       
        |____/      |_/     |____/   |__/ |__/  |__/  |__/       
                                                                 
                                                                 
     /NN   /NN   /NNNNN   /NN       NNNN    / NNNN    /NN   /NN  
    | NNNN  NN  | NN  /  | NN     /NN  NN  | NN  NN  | NNNN  NN  
    | NN NN NN  | NNNNN  | NN     \\ NN _/  | NN  NN  | NN NN NN  
    | NN  NNNN  | NN__/  | NN      \\  NN   | NN  NN  | NN  NNNN  
    | NN \\  NN  | NN     | NN     /NN  NN  | NN  NN  | NN \\  NN  
    | NN  | NN  | NNNNN  | NNNNN  \\ NNNN    \\ NNNN   | NN  | NN  
    |__/  |__/  |_____/  |____/    \\___/     \\___/   |__/  |__/  
                                                                 
`;

const styles = {
  name: style({
    display: 'inline-block',
  }),
  container: style({
    textAlign: 'center'
  }),
};

const Name = () => (
  <div className={styles.container}>
    <pre className={styles.name}>
      {name}
    </pre>
  </div>
);

export default Name;