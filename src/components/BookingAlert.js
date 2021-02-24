import React, { Component } from "react";


class BookingAlert extends Component {
    BookingAlert() {
        alert("Merci d'avoir sélectionné ce vol !");
    }

    render() {
        return <button onClick={this.BookingAlert} className="btnBooking py-2 px-4 rounded inline-flex items-center" type="submit"> Réserver votre vol flexible</button>;

    }


}


export default BookingAlert;