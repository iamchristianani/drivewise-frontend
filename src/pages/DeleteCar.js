import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './style/DeleteCar.css';
import { BiLeftArrow } from 'react-icons/bi';
import Navbar from '../components/Navbar';
import { fetchCars, removeCarAction } from '../redux/cars/cars';
import { AiFillCar } from 'react-icons/ai';

const DeleteCar = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeCarAction(id));
  };

  return (
    <div className="page_container">
      <Navbar />
      <div className="details_container">
        <div className="inner-details">
          <div className="home_header">
            <h1>DELETE A CAR</h1>
            <p>Remove car from the list</p>
            <div className="dot_divider">.............................</div>
          </div>
          <div className="delete-car-box">
            <table className="delete-car-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Cars</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {
                  cars.cars.length ? (
                    cars.cars.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>
                          {item.make}
                          {' '}
                          {item.model}
                        </td>
                        <td><button type="button" className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button></td>
                      </tr>
                    ))
                  ) : (
                    <tr className="no-data-box">
                      <td colSpan="3" className="no-data-td">
                        <AiFillCar className="no-data-icon" />
                        <br />
                        No car available
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

export default DeleteCar;
