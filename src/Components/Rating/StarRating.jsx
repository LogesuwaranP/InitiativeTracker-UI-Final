import React from 'react';
import './StarRating.css';

const StarRating = ({ selected, onSelect }) => {
  return (
    <div
      className={`star-rating ${selected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      {selected ? '★' : '☆'}
    </div>
  );
};

export default StarRating;
