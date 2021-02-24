import React, { Component } from 'react'

export default class Pays extends Component {
    render() {
        let { name, date, price, info, picture } = this.props.item;

        return (
            <div className="booking2 container mx-auto">
                <h3 className="Title">{name}</h3>
                <img className="bookingImg" src={picture} />
                <p className="text"> {date} </p>
                <p className="text"> {price}</p>

                <span className="info">{info}</span>  <br /> <br /> <br /> <br />


            </div >
        );
    }
}
