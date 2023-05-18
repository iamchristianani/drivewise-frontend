import React from 'react';
import PropTypes from 'prop-types';

const truncateDescription = (description, maxWords) => {
  const words = description.split(' ');
  if (words.length <= maxWords) {
    return description;
  }
  const truncatedWords = words.slice(0, maxWords);
  return `${truncatedWords.join(' ')}...`;
};

const CarsCard = ({
  id, model, make, description, image, clickCar,
}) => {
  const truncatedDescription = truncateDescription(description, 15);
  return (
    <div className="car_box" id={`car-${id}`}>
      <div className="car_img">
        <img src={image} alt={id} />
      </div>
      <div className="car_info">
        <div className="car_name">
          <h3>{make}</h3>
          <p>{model}</p>
        </div>
        <div className="dot_divider">.............................</div>
        <div className="car_description">
          <p>{truncatedDescription}</p>
        </div>
        <div className="car-details">
          <button type="button" className="carDetailsButton" title="carDetailsButton" onClick={() => (clickCar(id))}>Details</button>
        </div>
      </div>
    </div>
  );
};

CarsCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}.isRequired;

export default CarsCard;
