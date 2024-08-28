import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Nav from './Nav';

test('it renders the Navbar component correctly', () => {
    render(
        <BrowserRouter>
            <Nav />
        </BrowserRouter>
    );

    expect(screen.getByAltText('logo')).toBeInTheDocument();

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Reservations')).toBeInTheDocument();
    expect(screen.getByText('Order Online')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
});