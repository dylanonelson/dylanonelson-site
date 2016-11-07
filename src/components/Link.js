import React from 'react';

const styles = {
  a: {
    display: 'block',
    color: 'blue',
    fontSize: 16,
  },
  li: {
    padding: 5,
  },
};

const Link = ({ name, href }) => (
  <li style={styles.li}>
    <a
      href={href}
      style={styles.a}
    >
      {name}
    </a>
  </li>
)

export default Link;
