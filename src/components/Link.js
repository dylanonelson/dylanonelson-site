import React from 'react';
import { style } from 'glamor';

const styles = {
  a: style({
    display: 'block',
    color: 'blue',
    fontSize: 16,
  }),
  li: style({
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
