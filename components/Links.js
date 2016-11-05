import React from 'react';
import Link from './Link';
import css from 'next/css';

const styles = {
  nav: css({
    width: '25%',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: 50,
  }),
  ul: css({
    listStyle: 'none',
    padding: 0,
  }),
  h2: css({
    fontWeight: 300
  }),
}

const Links = () => (
  <nav className={styles.nav} >
    <h2 className={styles.h2}>
      Click here.
    </h2>
    <ul className={styles.ul}>
      <Link
        name="GitHub"
        href="https://github.com/dylanonelson"
      />
      <Link
        name="LinkedIn"
        href="https://www.linkedin.com/in/dylan-nelson-b00b2133"
      />
      <Link
        name="Twitter"
        href="https://twitter.com/dylanonelson"
      />
    </ul>
  </nav>
)

export default Links;
