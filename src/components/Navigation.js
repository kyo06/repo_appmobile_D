
import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navBar container mx-auto">
            <div className="">
                <div className="idContent">
                    <h1>Travel Destination</h1>
                </div>
            </div>

            <div className="navigation">
                <ul className="">
                    <li>
                        <NavLink exact to="/" activeClassName="nav-active">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="booking" activeClassName="nav-active">
                            <i className="fas fa-plane"></i>
                            <span> Réservations </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="profil" activeClassName="nav-active">
                            <i className="fas fa-user"></i>
                            <span>Profil</span>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink exact to="contact" activeClassName="nav-active">
                            <i className="fas fa-phone-alt"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

        </div>




    );
};

export default Navigation;