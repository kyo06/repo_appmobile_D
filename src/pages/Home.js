import React from 'react';
import BookingAlert from '../components/BookingAlert';
import Navigation from '../components/Navigation';
import SearchDestination from '../components/SearchDestination';



const Home = () => {

    return (
        <div>
            <Navigation />
            <div className="Home container mx-auto">
                <div className="Search container mx-auto">
                    <h1 className="Title1">Voyager partout dans le monde</h1>
                    <SearchDestination />
                </div>
                <BookingAlert />


            </div>




        </div >
    );
};

export default Home;