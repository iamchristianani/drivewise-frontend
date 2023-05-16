import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewCar from '../pages/NewCar';

describe('NewCar', () => {
  test('renders form fields', () => {
    render(
      <BrowserRouter>
        <NewCar />
      </BrowserRouter>,
    );

    expect(screen.getByLabelText(/Image URL:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Make:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Model:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description:/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Price:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Year:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Color:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Body Type:/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Engine Capacity:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Engine Cylinders:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Horsepower:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Torque:/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Weight:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Drivetrain:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Transmission:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Turbo:/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Fuel Type:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Doors:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Seats:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mileage:/i)).toBeInTheDocument();
  });

  test('updates carData state when input values change', () => {
    render(
      <BrowserRouter>
        <NewCar />
      </BrowserRouter>,
    );

    const makeInput = screen.getByLabelText(/Make:/i);
    fireEvent.change(makeInput, { target: { value: 'Toyota' } });
    expect(screen.getByLabelText(/Make:/i)).toHaveValue('Toyota');

    const modelInput = screen.getByLabelText(/Model:/i);
    fireEvent.change(modelInput, { target: { value: 'Camry' } });
    expect(screen.getByLabelText(/Model:/i)).toHaveValue('Camry');
  });

  test('submits form data on submit button click', () => {
    render(
      <BrowserRouter>
        <NewCar />
      </BrowserRouter>,
    );

    const submitButton = screen.getByText(/Submit/i);
    fireEvent.click(submitButton);
  });
});
