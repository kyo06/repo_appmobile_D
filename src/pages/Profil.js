import React from 'react';
import Navigation from '../components/Navigation';


const Profil = () => {
    return (
        <div className="UserProfil">
            <Navigation />
            <div className="profil container mx-auto">
                <h1 className="Title1">Profil utilisateur</h1>
                <h2 className="title">Mes préférences</h2> <br />
                <ul>
                    <li className="list"><i class="fas fa-suitcase"></i> Mes Réservations </li>
                    <li className="list"><i class="fas fa-money-check"></i> Mode de paiement </li>
                    <li className="list"><i class="fas fa-cog"></i> Paramètres </li>
                    <li className="list"><i class="fas fa-bell"></i> Notifications </li>
                </ul> <br />



                <h2 className="title">Vous avez des questions ?</h2> <br />

                <ul>
                    <li className="list"><i class="fas fa-suitcase"></i> Centre d'aide </li>
                    <li className="list"><i class="fas fa-money-check"></i> COVID-19 information voyage </li>
                    <li className="list"><i class="fas fa-cog"></i> Nous contacter </li>
                </ul>
            </div>

        </div >



    );
};

export default Profil;