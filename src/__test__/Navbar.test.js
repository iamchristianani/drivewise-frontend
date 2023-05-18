import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  window.history.pushState({}, '', '/');

  test('renders logo correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
        ,
      </BrowserRouter>,
    );

    const logoElement = screen.getByAltText('Drivewise');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders menu items correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const menuItems = ['Cars', 'Add Reservation', 'My Reservations', 'Add Car', 'Delete Car'];
    menuItems.forEach((item) => {
      const menuItemElement = screen.getByText(item);
      expect(menuItemElement).toBeInTheDocument();
    });
  });

  test('toggles the mobile menu correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const menuButtonElement = screen.getByTestId('mobile-button');
    fireEvent.click(menuButtonElement);
    const mobileMenuElement = screen.getByTestId('mobile-menu');
    expect(mobileMenuElement).toHaveClass('active');

    fireEvent.click(menuButtonElement);
    expect(mobileMenuElement).not.toHaveClass('active');
  });
});
