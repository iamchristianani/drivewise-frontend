import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style/ReservationForm.css';
import { BiLeftArrow } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { fetchCars } from '../redux/cars/cars';

const ReservationForm = () => {
  const { user } = useSelector((state) => state.authentications);
  const navigate = useNavigate();
  const [car, setCar] = useState([0, '']);
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const dispatch = useDispatch();
  const data = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (car === '' || date === '' || city === '') return;
    try {
      await axios.post(`https://drivewise.up.railway.app/api/v1/users/${user.id}/reservations`, { car_id: car, reservation_date: date, city });
      setCar(0);
      setDate('');
      setCity('');
      navigate('/my_reservations');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else {
        setErrMsg('Registration Failed');
      }
    }
  };

  return (
    <div className="container">
      <div className="background-wrapper">
        <div className="reserve-back-button">
          <NavLink to="/">
            <button type="button" className="rsv-scroll rsv-left-scroll" aria-label="Scroll Left"><BiLeftArrow /></button>
          </NavLink>
        </div>
        <div className="reserve-form-container">
          <div className="reserve-form-writeup">
            <h2>BOOK A TEST DRIVE ON DRIVEWISE</h2>
            <div className="horizontal-rule" />
            <p>
              On DriveWise, we have
              {' '}
              {' '}
              {data.cars.length}
              {' '}
              cars available, ranging from electric to diesel powered automobiles.
              You can select a car, choose a city,
              and then pick a date for a comprehensive test drive.
            </p>
          </div>
          <div className="reserve-form-box">
            <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">{errMsg}</p>
            <form className="reservation_form" onSubmit={handleSubmit}>

              <select
                id="car"
                onChange={(e) => setCar(e.target.value)}
                value={car}
                className="select_form_comp"
                required
              >
                <option value="" hidden>
                  Select Car
                </option>
                {data.cars.map((car) => (
                  <option key={car.id} value={car.id}>
                    {car.make}
                    {' '}
                    {' '}
                    {' '}
                    {car.model}
                  </option>
                ))}
              </select>

              <div className="reserve-form-inputs-box">
                <input
                  type="date"
                  id="date"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  className="date_form_comp reserve-form-inputs"
                  required
                />

                <input
                  type="text"
                  id="city"
                  autoComplete="off"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  className="city_form_comp reserve-form-inputs"
                  placeholder="Enter City"
                  required
                />
              </div>

              <button className="button_form_comp" type="submit" disabled={car === '' || city === '' || date === ''}>Reserve</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
