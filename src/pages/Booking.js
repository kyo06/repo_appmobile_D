import React from 'react';
import Navigation from '../components/Navigation';
import SearchList from '../components/SearchList';

const Booking = () => {
    return (
        <div>
            <Navigation />
            <div className="booking">
                <h1 className="Title">Mes réservations</h1>
                <SearchList />
            </div>
        </div>
    );
};

export default Booking;