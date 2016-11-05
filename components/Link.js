import React from 'react';
import css from 'next/css';

const styles = {
  a: css({
    display: 'block',
    color: 'blue',
    fontSize: 16,
  }),
  li: css({
    padding: 5,
  }),
};

const Link = ({ name, href }) => (
  <li className={styles.li}>
    <a
      href={href}
      className={styles.a}
    >
      {name}
    </a>
  </li>
)

export default Link;
