import { useState } from 'react';
import Navbar from '../components/Navbar';
import './style/newCar.css';

const IMAGE_REGEX = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i;

const NewCar = () => {
  const [carData, setCarData] = useState({
    id: 20,
    make: '',
    model: '',
    year: '',
    color: '',
    body_type: '',
    engine_capacity: '',
    engine_cylinders: '',
    turbo: false,
    horsepower: '',
    torque: '',
    weight: '',
    drivetrain: '',
    transmission: '',
    fuel_type: '',
    doors: '',
    seats: '',
    mileage: '',
    price: '',
    description: '',
    image: '',
    created_at: '',
    updated_at: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!IMAGE_REGEX.test(carData.image)) {
      alert('un vaild image url');
    }
    // Do something with the carData, e.g. submit it to a server
    console.log(carData);
  }

  return (
    <div className="page_container">
      <Navbar />
      <form onSubmit={handleSubmit} className="newCar_container">

        <div className="inner-newCar">
          <div className="all-newCar">
            <div className="image-box">
              <label htmlFor="newcar-image">
                Image URL:
                <input id="newcar-image" type="text" name="image" value={carData.image} onChange={handleChange} required />
              </label>
              <img src={carData.image} alt={carData.model} />
            </div>
            <div className="all-text-box">
              <div className="title-x-desc">
                <p>
                  <label htmlFor="newcar-make">
                    Make:
                    <input id="newcar-make" type="text" name="make" value={carData.make} onChange={handleChange} required />
                  </label>
                </p>
                <p className="newCar-model">

                  <label htmlFor="newcar-model">
                    Model:
                    <input id="newcar-model" type="text" name="model" value={carData.model} onChange={handleChange} required />
                  </label>
                </p>
                <p className="desc-text">
                  <label htmlFor="newcar-description">
                    Description:
                    <textarea id="newcar-description" name="description" value={carData.description} onChange={handleChange} required />
                  </label>
                </p>
              </div>
              <label className="price-box" htmlFor="newcar-price">
                <p>Price:</p>
                <p className="newCar-amount">
                  $
                  <input id="newcar-price" type="number" name="price" value={carData.price} onChange={handleChange} required />
                </p>
              </label>
              <div className="newCar-table-container">
                <table className="newCar-table">
                  <tbody>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-year">
                          <span className="table-left-text">Year</span>
                          <input className="table-right-text" id="newcar-year" type="number" name="year" value={carData.year} onChange={handleChange} min="1800" max="2023" required />
                        </label>
                      </td>
                    </tr>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-color">
                          <span className="table-left-text">Color</span>
                          <input className="table-right-text" id="newcar-color" type="text" name="color" value={carData.color} onChange={handleChange} required />
                        </label>
                      </td>
                    </tr>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-body-type">
                          <span className="table-left-text">Body Type</span>
                          <input className="table-right-text" id="newcar-body-type" type="text" name="body_type" value={carData.body_type} onChange={handleChange} required />
                        </label>
                      </td>
                    </tr>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-engine-capacity">
                          <span className="table-left-text">Engine Capacity</span>
                          <input className="table-right-text" id="engine-capacity" type="number" name="engine_capacity" value={carData.engine_capacity} onChange={handleChange} required />
                        </label>
                      </td>
                    </tr>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-engine-cylinders">
                          <span className="table-left-text">Engine Cylinders</span>
                          <input className="table-right-text" id="newcar-engine-cylinders" type="number" name="engine_cylinders" value={carData.engine_cylinders} onChange={handleChange} required />
                        </label>
                      </td>
                    </tr>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-horsepower">
                          <span className="table-left-text">horsepower</span>
                          <input className="table-right-text" id="newcar-horsepower" type="number" name="horsepower" value={carData.horsepower} onChange={handleChange} required />
                        </label>
                      </td>
                    </tr>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-torque">
                          <span className="table-left-text">torque</span>
                          <input className="table-right-text" id="newcar-torque" type="number" name="torque" value={carData.torque} onChange={handleChange} />
                        </label>
                      </td>
                    </tr>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-weight">
                          <span className="table-left-text">weight</span>
                          <input className="table-right-text" id="newcar-weight" type="number" name="weight" value={carData.weight} onChange={handleChange} required />
                        </label>
                      </td>
                    </tr>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-drivetrain">
                          <span className="table-left-text">drivetrain</span>
                          <input className="table-right-text" id="newcar-drivetrain" type="text" name="drivetrain" value={carData.drivetrain} onChange={handleChange} required />
                        </label>
                      </td>
                    </tr>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-transmission">
                          <span className="table-left-text">transmission</span>
                          <input className="table-right-text" id="newcar-transmission" type="text" name="transmission" value={carData.transmission} onChange={handleChange} required />
                        </label>
                      </td>
                    </tr>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-turbo">
                          <span className="table-left-text">Turbo</span>
                          <input className="table-right-text" id="newcar-turbo" type="checkbox" name="turbo" checked={carData.turbo} onChange={handleCheckboxChange} required />
                        </label>
                      </td>
                    </tr>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-fuel-type">
                          <span className="table-left-text">Fuel Type</span>
                          <input className="table-right-text" id="newcar-fuel-type" type="text" name="fuel_type" value={carData.fuel_type} onChange={handleChange} required />
                        </label>
                      </td>
                    </tr>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-doors">
                          <span className="table-left-text">Doors</span>
                          <input className="table-right-text" id="newcar-doors" type="number" name="doors" value={carData.doors} onChange={handleChange} required />
                        </label>
                      </td>
                    </tr>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-seats">
                          <span className="table-left-text">Seats</span>
                          <input className="table-right-text" id="newcar-seats" type="number" name="seats" value={carData.seats} onChange={handleChange} required />
                        </label>
                      </td>
                    </tr>
                    <tr className="newCar-table-row">
                      <td>
                        <label htmlFor="newcar-mileage">
                          <span className="table-left-text">Mileage</span>
                          <input className="table-right-text" id="newcar-mileage" type="number" name="mileage" value={carData.mileage} onChange={handleChange} required />
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button type="submit" className="newCar-reserve-btn">submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewCar;
