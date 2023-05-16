import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import LoginWithUsername from './components/LoginWithUsername';
import SignupWithUsername from './components/SignupWithUsername';
import Home from './pages/Home';
import ReservationForm from './pages/ReservationForm';
import NewCar from './pages/NewCar';
import Details from './pages/Details';
import MyReservation from './pages/MyReservation';
import DeleteCar from './pages/DeleteCar';
import { USER_STORAGE_KEY, loginByUsername } from './redux/loginByUsername';

function App() {
  const dispatch = useDispatch();
  const { isLoading, username } = useSelector((state) => state.authentications);
  const user = localStorage.getItem(USER_STORAGE_KEY);

  useEffect(() => {
    const fetchUser = () => {
      dispatch(loginByUsername(user));
    };

    fetchUser();
  }, [dispatch, user, username]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!username) {
    return (
      <Routes>
        <Route path="*" element={<LoginWithUsername />} />
        <Route path="/signup" element={<SignupWithUsername />} />
      </Routes>
    );
  }

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/signup" element={<Navigate to="/" />} />
        <Route path="/reservation_form" element={<ReservationForm />} />
        <Route path="/my_reservations" element={<MyReservation />} />
        <Route path="/details/:carId" element={<Details />} />
        <Route path="/new_car" element={<NewCar />} />
        <Route path="/delete_car" element={<DeleteCar />} />
      </Routes>
    </main>
  );
}

export default App;
