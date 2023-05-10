import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './style/Details.css';
import { BiLeftArrow } from 'react-icons/bi';

const Details = () => {
  return (
    <div className="page_container">
      <Navbar />
      <div className="details_container">
        <div className="inner-details">
          <div className="all-details">
            <div className="image-box">
              <img src="https://c8.alamy.com/comp/2AF282K/mclaren-650-street-or-racing-car-this-car-run-a-race-track-2AF282K.jpg" alt="Car Image" />
            </div>
            <div className="all-text-box">
              <div className="title-x-desc">
              <h2>Mercedes-Benz</h2>
              <p className="details-model">(AMG-GT)</p>
              <p className="desc-text">The Mercedes-AMG GT is a two-door sports car that offers a thrilling driving experience. The car's V8 engine produces an impressive amount of power and torque, and it can accelerate from 0 to 60 mph in just over 3 seconds. The AMG GT also features a luxurious and well-appointed interior, with high-quality materials and advanced technology.</p>
              </div>
              <div className="price-box">
                <p>Price:</p>
                <p className="details-amount">$140000</p>
              </div>
              <div className="details-table-container">
                <table className="details-table">
                  <tr className="details-table-row">
                    <td>
                      <span className="table-left-text" >Year</span>
                      <span className="table-right-text">2021</span>
                    </td>
                  </tr>
                  <tr className="details-table-row">
                    <td>
                      <span className="table-left-text" >Color</span>
                      <span className="table-right-text">Selenite Grey Metallic</span>
                    </td>
                  </tr>
                  <tr className="details-table-row">
                    <td>
                      <span className="table-left-text" >Body Type</span>
                      <span className="table-right-text">Coupe</span>
                    </td>
                  </tr>
                  <tr className="details-table-row">
                    <td>
                      <span className="table-left-text" >Engine Capacity</span>
                      <span className="table-right-text">4</span>
                    </td>
                  </tr>
                  <tr className="details-table-row">
                    <td>
                      <span className="table-left-text" >Engine Cylinders</span>
                      <span className="table-right-text">8</span>
                    </td>
                  </tr>
                  <tr className="details-table-row">
                    <td>
                      <span className="table-left-text" >Turbo</span>
                      <span className="table-right-text">true</span>
                    </td>
                  </tr>
                  <tr className="details-table-row">
                    <td>
                      <span className="table-left-text" >Fuel Type</span>
                      <span className="table-right-text">Gasoline</span>
                    </td>
                  </tr>
                  <tr className="details-table-row">
                    <td>
                      <span className="table-left-text" >Doors</span>
                      <span className="table-right-text">2</span>
                    </td>
                  </tr>
                  <tr className="details-table-row">
                    <td>
                      <span className="table-left-text" >Seats</span>
                      <span className="table-right-text">2</span>
                    </td>
                  </tr>
                  <tr className="details-table-row">
                    <td>
                      <span className="table-left-text" >Mileage</span>
                      <span className="table-right-text">0</span>
                    </td>
                  </tr>
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
  )
}

export default Details