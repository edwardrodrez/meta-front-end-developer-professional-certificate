import React, { useReducer, useState } from 'react';
import Input from '../../Input/Input';
import './ReservationForm.css';
import Button from '../../Button/Button';
import { submitAPI } from '../../../utils/api';
import Toast from '../../Toast/Toast';

const initialState = {
  fullName: '',
  email: '',
  date: '',
  time: '',
  guests: '',
  errors: {},
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD_VALUE':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: '' },
      };
    case 'SET_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

function ReservationForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    if (!state.fullName) {
      dispatch({ type: 'SET_ERROR', field: 'fullName', error: 'Full name is required' });
      hasErrors = true;
    }
    if (!state.email) {
      dispatch({ type: 'SET_ERROR', field: 'email', error: 'Email is required' });
      hasErrors = true;
    }
    if (!state.date) {
      dispatch({ type: 'SET_ERROR', field: 'date', error: 'Date is required' });
      hasErrors = true;
    }
    if (!state.time) {
      dispatch({ type: 'SET_ERROR', field: 'time', error: 'Time is required' });
      hasErrors = true;
    }
    if (!state.guests) {
      dispatch({ type: 'SET_ERROR', field: 'guests', error: 'Number of guests is required' });
      hasErrors = true;
    }

    if (!hasErrors) {
      const response = submitAPI(state);
      if (response) {
        setShowNotification(true);
        dispatch({ type: 'RESET_FORM' });
      };

    }
  };

  const handleChange = (e) => {
    dispatch({ type: 'SET_FIELD_VALUE', field: e.target.name, value: e.target.value });
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className='reservation-container'>
      <form onSubmit={handleSubmit}>
        <h1>New reservation</h1>
        <Input
          label="Full name"
          name="fullName"
          value={state.fullName}
          onChange={handleChange}
          error={state.errors.fullName}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={state.email}
          onChange={handleChange}
          error={state.errors.email}
        />
        <div className='form-group'>
          <Input
            label="Date"
            name="date"
            type="date"
            value={state.date}
            onChange={handleChange}
            error={state.errors.date}
          />
          <Input
            label="Time"
            name="time"
            type="time"
            value={state.time}
            onChange={handleChange}
            error={state.errors.time}
          />
        </div>
        <Input
          label="Number of guests"
          name="guests"
          type="number"
          value={state.guests}
          onChange={handleChange}
          error={state.errors.guests}
        />
        <Button type="submit">Submit</Button>
      </form>
      {showNotification && (
        <Toast
          message={`All set! Your reservation for ${state.fullName} has been successfully confirmed for ${state.date} at ${state.time}.`}
          onClose={handleCloseNotification}
        />
      )}

    </div>
  );
}

export default ReservationForm;
