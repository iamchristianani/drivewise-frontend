/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style-components/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import logo from '../images/drivewise_logo.png';
import { signoutByUsername } from '../redux/loginByUsername';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    setActiveItem(index);
  };

  const handleSignout = () => {
    dispatch(signoutByUsername());
    window.location.href = window.location.origin;
  };

  const menuItems = [
    { label: 'Cars', to: '/' },
    { label: 'Add Reservation', to: '/reservation_form' },
    { label: 'My Reservations', to: '/my_reservations' },
    { label: 'Add Car', to: '/new_car' },
    { label: 'Delete Car', to: '/delete_car' },
  ];
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Drivewise" />
      </Link>
      <FontAwesomeIcon icon={faBars} size="lg" className={showMenu ? 'not-active' : ''} onClick={handleMenuToggle} />
      <FontAwesomeIcon data-testid="mobile-button" icon={faX} className={showMenu ? '' : 'not-active'} onClick={handleMenuToggle} />
      <ul data-testid="mobile-menu" className={`mobile-menu ${showMenu ? 'active' : ''}`}>

        {menuItems.map((item, index) => (
          <li key={index} className={activeItem === index ? 'active' : ''}>
            <Link to={item.to} onClick={() => handleClick(index)}>{item.label}</Link>
          </li>
        ))}
        <button type="button" className="sing-out" onClick={handleSignout}>sign out</button>
      </ul>
    </nav>
  );
};

export default Navbar;
