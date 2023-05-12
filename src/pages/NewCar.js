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
    console.log(carData);
    if (!IMAGE_REGEX.test(carData.image)) {
      alert('un vaild image url');
    }
    // Do something with the carData, e.g. submit it to a server
    console.log(carData);
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
                <input type="text" id="image-url" name="image-url" required onChange={handleChange} />
              </label>

              <label htmlFor="make">
                Make:
                <input type="text" id="make" name="make" required onChange={handleChange} />
              </label>

              <label htmlFor="model">
                Model:
                <input type="text" id="model" name="model" required onChange={handleChange} />
              </label>

              <label htmlFor="description">
                Description:
                <textarea id="description" name="description" rows="3" maxLength="150" required onChange={handleChange} />
              </label>

              <label htmlFor="price">
                Price:
                <input type="number" id="price" name="price" required onChange={handleChange} />
              </label>

              <label htmlFor="year">
                Year:
                <input type="number" id="year" name="year" required onChange={handleChange} />
              </label>

              <label htmlFor="color">
                Color:
                <input type="text" id="color" name="color" required onChange={handleChange} />
              </label>

              <label htmlFor="body-type">
                Body Type:
                <input type="text" id="body-type" name="body-type" required onChange={handleChange} />
              </label>

              <label htmlFor="engine-capacity">
                Engine Capacity:
                <input type="number" id="engine-capacity" name="engine-capacity" required onChange={handleChange} />
              </label>

              <label htmlFor="engine-cylinders">
                Engine Cylinders:
                <input type="number" id="engine-cylinders" name="engine-cylinders" required onChange={handleChange} />
              </label>

              <label htmlFor="horsepower">
                Horsepower:
                <input type="number" id="horsepower" name="horsepower" required onChange={handleChange} />
              </label>

              <label htmlFor="torque">
                Torque:
                <input type="number" id="torque" name="torque" required onChange={handleChange} />
              </label>

              <label htmlFor="weight">
                Weight:
                <input type="number" id="weight" name="weight" required onChange={handleChange} />
              </label>

              <label htmlFor="drivetrain">
                Drivetrain:
                <input type="text" id="drivetrain" name="drivetrain" required onChange={handleChange} />
              </label>

              <label htmlFor="transmission">
                Transmission:
                <input type="text" id="transmission" name="transmission" required onChange={handleChange} />
              </label>

              <label htmlFor="turbo">
                Turbo:
                <input type="checkbox" id="turbo" name="turbo" onChange={handleCheckboxChange} />
              </label>

              <label htmlFor="fuel-type">
                Fuel Type:
                <input type="text" id="fuel-type" name="fuel-type" required onChange={handleChange} />
              </label>

              <label htmlFor="doors">
                Doors:
                <input type="number" id="doors" name="doors" required onChange={handleChange} />
              </label>

              <label htmlFor="seats">
                Seats:
                <input type="number" id="seats" name="seats" required onChange={handleChange} />
              </label>

              <label htmlFor="mileage">
                Mileage:
                <input type="number" id="mileage" name="mileage" required onChange={handleChange} />
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
