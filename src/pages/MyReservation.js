import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './style/MyReservation.css';
import { BiLeftArrow } from 'react-icons/bi';
import { BsBookmarks } from 'react-icons/bs';
import Navbar from '../components/Navbar';
import { getReservationsAction } from '../redux/reservations/reservations';
import { fetchCars } from '../redux/cars/cars';
import ReservationsTable from '../components/ReservationsTable';

const MyReservation = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
    dispatch(getReservationsAction());
  }, [dispatch]);

  const getCarName = (carId) => {
    const car = cars.cars.find((c) => c.id === carId);
    return car ? car.make : 'Unknown Car';
  };

  return (
    <div className="page_container">
      <Navbar />
      <div className="details_container">
        <div className="inner-details">
          <div className="home_header">
            <h1>MY RESERVATIONS</h1>
            <p>Showing all your test drive reservations</p>
            <div className="dot_divider">.............................</div>
          </div>
          <div className="reservation-box">
            <table className="reservation-table">
              <thead>
                <tr>
                  <th>Car Name</th>
                  <th>City</th>
                  <th>Reservation Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  reservations.length ? (
                    reservations.map((item) => (
                      <ReservationsTable
                        key={item.id}
                        id={item.id}
                        carName={getCarName(item.car_id)}
                        city={item.city}
                        reservationDate={item.reservation_date}
                      />
                    ))
                  ) : (
                    <tr className="no-data-box">
                      <td colSpan="3" className="no-data-td">
                        <BsBookmarks className="no-data-icon" />
                        <br />
                        No reservations available
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
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

export default MyReservation;
