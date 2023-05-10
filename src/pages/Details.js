import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';

import './style/Details.css';
import { BiLeftArrow } from 'react-icons/bi';
import { getDetailsAction } from '../redux/cars/carDetails';
import Navbar from '../components/Navbar';

const Details = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.details);
  const { carId } = useParams();

  useEffect(() => {
    dispatch(getDetailsAction(carId));
  }, [dispatch, carId]);

  return (
    <div className="page_container">
      <Navbar />
      <div className="details_container">
        <div className="inner-details">
          <div className="all-details">
            <div className="image-box">
              <img src={data.image} alt={data.model} />
            </div>
            <div className="all-text-box">
              <div className="title-x-desc">
                <h2>{data.make}</h2>
                <p className="details-model">
                  (
                  {data.model}
                  )
                </p>
                <p className="desc-text">{data.description}</p>
              </div>
              <div className="price-box">
                <p>Price:</p>
                <p className="details-amount">
                  $
                  {data.price}
                </p>
              </div>
              <div className="details-table-container">
                <table className="details-table">
                  <tbody>
                    <tr className="details-table-row">
                      <td>
                        <span className="table-left-text">Year</span>
                        <span className="table-right-text">{data.year}</span>
                      </td>
                    </tr>
                    <tr className="details-table-row">
                      <td>
                        <span className="table-left-text">Color</span>
                        <span className="table-right-text">{data.color}</span>
                      </td>
                    </tr>
                    <tr className="details-table-row">
                      <td>
                        <span className="table-left-text">Body Type</span>
                        <span className="table-right-text">{data.body_type}</span>
                      </td>
                    </tr>
                    <tr className="details-table-row">
                      <td>
                        <span className="table-left-text">Engine Capacity</span>
                        <span className="table-right-text">{data.engine_capacity}</span>
                      </td>
                    </tr>
                    <tr className="details-table-row">
                      <td>
                        <span className="table-left-text">Engine Cylinders</span>
                        <span className="table-right-text">{data.engine_cylinders}</span>
                      </td>
                    </tr>
                    <tr className="details-table-row">
                      <td>
                        <span className="table-left-text">Turbo</span>
                        <span className="table-right-text">{typeof data.turbo === 'boolean' ? data.turbo.toString() : 'Not available'}</span>
                      </td>
                    </tr>
                    <tr className="details-table-row">
                      <td>
                        <span className="table-left-text">Fuel Type</span>
                        <span className="table-right-text">{data.fuel_type}</span>
                      </td>
                    </tr>
                    <tr className="details-table-row">
                      <td>
                        <span className="table-left-text">Doors</span>
                        <span className="table-right-text">{data.doors}</span>
                      </td>
                    </tr>
                    <tr className="details-table-row">
                      <td>
                        <span className="table-left-text">Seats</span>
                        <span className="table-right-text">{data.seats}</span>
                      </td>
                    </tr>
                    <tr className="details-table-row">
                      <td>
                        <span className="table-left-text">Mileage</span>
                        <span className="table-right-text">{data.mileage}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="back-button">
          <NavLink to="/">
            <button type="button" className="scroll left-scroll" aria-label="Scroll Left"><BiLeftArrow /></button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Details;
