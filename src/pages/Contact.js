import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact container mx-auto">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1 className="Title1">Contactez-nous</h1>
                    <ul>
                        <li className="list">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Lyon</span>
                        </li>

                        <li className="list"> <i className="fas fa-mobile"></i>
                            <CopyToClipboard text="+335688876">
                                <span className="clickInput" onClick={() => { alert('Téléphone copié !'); }}>+335688876</span>
                            </CopyToClipboard>
                        </li>

                        <li className="list"> <i className="far fa-envelope"></i>
                            <CopyToClipboard text="lozano.elisa@hotmail.fr">
                                <span className="clickInput" onClick={() => { alert('Email copié !'); }}>Lozano.elisa@hotmail.fr</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;