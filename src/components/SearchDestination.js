import React from 'react';

const SearchDestination = () => {
    return (
        <div className="container mx-auto">
            <form>
                <input className="search" type="text" placeholder="Rechercher une destination..."></input>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>

    );
};

export default SearchDestination;