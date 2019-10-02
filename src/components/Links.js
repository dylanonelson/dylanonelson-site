import React from 'react';
import Link from './Link';

const styles = {
  nav: {
    width: '25%',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: 50,
  },
  ul: {
    listStyle: 'none',
    padding: 0,
  },
  h2: {
    fontWeight: 300
  },
}

const Links = ({ mobile }) => (
  <nav style={styles.nav} >
    <h2 style={styles.h2}>
      {mobile ? null : 'Click here.'}
    </h2>
    <ul style={styles.ul}>
      <Link
        name="GitHub"
        href="https://github.com/dylanonelson"
      />
      <Link
        name="LinkedIn"
        href="https://www.linkedin.com/in/dylan-nelson-b00b2133"
      />
      <Link
        name="resume"
        href="/dylan-nelson-resume.pdf"
      />
    </ul>
  </nav>
)

export default Links;
