import React from 'react';

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

const initials = 
`
   /DDDDD    /NN   /NN 
  | DD  DD  | NNNN  NN 
  | DD  DD  | NN NN NN 
  | DD  DD  | NN  NNNN 
  | DD  DD  | NN \\  NN 
  | DDDDD   | NN  | NN 
  |____/    |__/  |__/ 
`

const styles = {
  fullName: {
    fontSize: 26,
    fontWeight: 300,
  },
  name: {
    display: 'inline-block',
  },
  container: {
    textAlign: 'center'
  },
};

const Name = ({ mobile }) => (
  <div style={styles.container}>
    <pre style={styles.name}>
      {mobile ? initials : name}
    </pre>
    {mobile ? <h3 style={styles.fullName}>DYLAN NELSON</h3> : null}
  </div>
);

export default Name;
