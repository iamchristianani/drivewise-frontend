import React, { useState } from 'react';
import './style/ReservationForm.css';
import cars from '../DumyData/cars.json';

const ReservationForm = () => {
  const [carName, setCarName] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (carName === '' || date === '' || city === '') return;
    try {
      setCarName('');
      setDate('');
      setCity('');
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
      <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">{errMsg}</p>
      <form className="reservation_form" onSubmit={handleSubmit}>

        <label className="date_label" htmlFor="date">
          Date:

          <input
            type="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            className="date_form_comp"
            required
          />
        </label>
        <label className="city_label" htmlFor="city">
          City:

          <input
            type="text"
            id="city"
            autoComplete="off"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            className="login_form_comp"
            required
          />
        </label>
        <label className="login_label" htmlFor="car">
          car:

          <select
            id="car"
            onChange={(e) => setCarName(e.target.value)}
            value={carName}
            className="login_form_comp"
            required
          >
            {cars.map((car) => (
              <option key={car.id} value={car}>{car.model}</option>
            ))}
          </select>
        </label>
        <button className="reservation_form_comp" type="submit" disabled={carName === '' || city === '' || date === ''}>Reserve</button>
      </form>
    </div>
  );
};

export default ReservationForm;
