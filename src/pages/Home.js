import React from 'react';
import Navigation from '../components/Navigation';
import MOCK_DATA from '../data/MOCK_DATA.json';
import { useState } from 'react';


const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div>
            <Navigation />

            <div className="Home">
                <h1 className="title">Voyager partout dans le monde</h1>
                <input className="search" type="text" placeholder="Rechercher une destination..." onChange={event => { setSearchTerm(event.target.value) }} />
                {MOCK_DATA.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.Ville.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <div className="user" key={key}>
                            <p> {val.Ville}, {val.Pays} </p>
                        </div>
                    );
                })}
            </div>

            <center>
                <button className="btnBooking py-2 px-4 rounded inline-flex items-center" type="submit"> Réserver votre vol flexible</button>
            </center>



        </div >
    );
};

export default Home;