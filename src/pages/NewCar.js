import { useState } from 'react';
import './style/newCar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const NewCar = () => {
  const navigate = useNavigate();
  const [car, setCar] = useState({
    make: '',
    model: '',
    year: 0,
    color: '',
    body_type: '',
    engine_capacity: 0.0,
    engine_cylinders: 0,
    turbo: false,
    horsepower: 0,
    torque: 0,
    weight: 0,
    drivetrain: '',
    transmission: '',
    fuel_type: '',
    doors: 0,
    seats: 0,
    mileage: 0,
    price: 0,
    description: '',
    image: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setCar((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    setCar((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('https://drivewise.up.railway.app/api/v1/cars', car);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="page_container">
      <Navbar />
      <div className="newCar_container">

        <div className="inner-newCar">
          <div className="all-newCar">
            <form onSubmit={handleSubmit} className="new-car-form">
              <h2>Car Details</h2>

              <label htmlFor="image-url">
                Image URL:
                <input type="text" id="image-url" name="image" onChange={handleChange} />
              </label>

              <label htmlFor="make">
                Make:
                <input type="text" id="make" name="make" onChange={handleChange} />
              </label>

              <label htmlFor="model">
                Model:
                <input type="text" id="model" name="model" onChange={handleChange} />
              </label>

              <label htmlFor="description">
                Description:
                <textarea id="description" name="description" rows="3" maxLength="150" onChange={handleChange} />
              </label>

              <label htmlFor="price">
                Price:
                <input type="number" id="price" name="price" onChange={handleChange} />
              </label>

              <label htmlFor="year">
                Year:
                <input type="number" id="year" name="year" onChange={handleChange} />
              </label>

              <label htmlFor="color">
                Color:
                <input type="text" id="color" name="color" onChange={handleChange} />
              </label>

              <label htmlFor="body-type">
                Body Type:
                <input type="text" id="body-type" name="body_type" onChange={handleChange} />
              </label>

              <label htmlFor="engine-capacity">
                Engine Capacity:
                <input type="number" id="engine-capacity" name="engine_capacity" onChange={handleChange} />
              </label>

              <label htmlFor="engine-cylinders">
                Engine Cylinders:
                <input type="number" id="engine-cylinders" name="engine_cylinders" onChange={handleChange} />
              </label>

              <label htmlFor="horsepower">
                Horsepower:
                <input type="number" id="horsepower" name="horsepower" onChange={handleChange} />
              </label>

              <label htmlFor="torque">
                Torque:
                <input type="number" id="torque" name="torque" onChange={handleChange} />
              </label>

              <label htmlFor="weight">
                Weight:
                <input type="number" id="weight" name="weight" onChange={handleChange} />
              </label>

              <label htmlFor="drivetrain">
                Drivetrain:
                <input type="text" id="drivetrain" name="drivetrain" onChange={handleChange} />
              </label>

              <label htmlFor="transmission">
                Transmission:
                <input type="text" id="transmission" name="transmission" onChange={handleChange} />
              </label>

              <label htmlFor="turbo">
                Turbo:
                <input type="checkbox" id="turbo" name="turbo" onChange={handleCheckboxChange} />
              </label>

              <label htmlFor="fuel-type">
                Fuel Type:
                <input type="text" id="fuel-type" name="fuel_type" onChange={handleChange} />
              </label>

              <label htmlFor="doors">
                Doors:
                <input type="number" id="doors" name="doors" onChange={handleChange} />
              </label>

              <label htmlFor="seats">
                Seats:
                <input type="number" id="seats" name="seats" onChange={handleChange} />
              </label>

              <label htmlFor="mileage">
                Mileage:
                <input type="number" id="mileage" name="mileage" onChange={handleChange} />
              </label>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCar;
