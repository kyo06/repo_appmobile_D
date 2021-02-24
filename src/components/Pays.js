import React, { Component } from 'react'

export default class Pays extends Component {
    render() {
        let { name, date, price, info, picture } = this.props.item;

        return (
            <div>
                <h3 className="Title">{name}</h3>
                <img className="bookingImg" src={picture} />
                <p> {date} </p>
                <p> {price}</p>

                <span className="info">{info}</span>


            </div >
        );
    }
}
