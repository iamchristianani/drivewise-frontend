import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { fetchCars } from '../../redux/cars/cars';

import CarsCard from './CarsCard';

const CarsList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cars);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const leftScroll = () => {
    const left = document.querySelector('.all_car_box');
    left.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const rightScroll = () => {
    const right = document.querySelector('.all_car_box');
    right.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  };

  const clickCar = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="scroll_container">
      <button type="button" className="scroll left-scroll" onClick={leftScroll} aria-label="Scroll Left"><BiLeftArrow /></button>
      <div className="all_car_box">
        {data.loading && <div>Loading....</div>}
        {!data.loading && data.error ? (
          <div>
            Error:
            {data.error}
          </div>
        ) : null}
        {!data.loading && data.cars.length ? (
          data.cars.map((car) => (
            <CarsCard
              key={car.id}
              id={car.id}
              model={car.model}
              make={car.make}
              description={car.description}
              image={car.image}
              clickCar={clickCar}
            />
          ))
        ) : null}
      </div>
      <button type="button" className="scroll right-scroll" onClick={rightScroll} aria-label="Scroll right"><BiRightArrow /></button>
    </div>
  );
};

export default CarsList;
