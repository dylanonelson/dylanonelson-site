import React from 'react';
import Star from './Star';

const style = { overflowX: 'hidden' };

const getStars = () => {
  const stars = [];
  for (var i = 0; i < 25; i++) {
    stars.push(
      <Star key={i} />
    );
  }
  return stars;
}

const Stars = () => (
  <ul style={style}>{getStars()}</ul>
)

export default Stars;
