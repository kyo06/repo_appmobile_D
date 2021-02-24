import React from 'react';
import MOCK_DATA from '../data/MOCK_DATA.json';
import { useState } from 'react';

const SearchDestination = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (

        <div className="Home">
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
                        <p>  {val.Ville}, {val.Pays} </p>
                    </div>
                );
            })}
        </div>

    );
};

export default SearchDestination;