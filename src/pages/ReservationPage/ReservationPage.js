import React from 'react';
import ReservationForm from '../../components/Forms/ReservationForm/ReservationForm';
import AboutPage from '../AboutPage/AboutPage';

function ReservationPage() {
  return (
    <div data-testid="reservation-page" >
      <ReservationForm />
      <AboutPage />
    </div>
  );
}

export default ReservationPage;
