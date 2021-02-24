import React, { Component } from 'react';
import { bookingData } from '../data/bookingData';
import Pays from '../components/Pays';

export default class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = { booking: bookingData };
    }

    render() {
        let { booking } = this.state;

        return (
            <div className="bookingContent ">
                <ul className="display ">

                </ul>

                <div className="booking ">
                    {
                        booking.map(item => {
                            return (
                                <Pays
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
