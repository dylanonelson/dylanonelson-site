import React from 'react';
import Star from './Star';

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
  <ul>{getStars()}</ul>
)

export default Stars;
