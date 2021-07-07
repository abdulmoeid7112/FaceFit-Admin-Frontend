import React from "react";
import "./main.css";
import "./util.css";
const API = "http://localhost:4000/admin/viewBooking";



class booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    };
    this.toBeImplemented = this.toBeImplemented.bind(this);
  }

  toBeImplemented() {
    alert("sorry this feature is not implemented yet");
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ bookings: data }));
  }

  render() {
    return (
      <div Align="center" style={{ color: "black" }}>
        <h1 className="pad">Booking</h1>

        <div style={{ marginTop: "2%" }} className="wrap-table100">
          <div className="table">
            <div className="row header">
              <div className="cell">Frame Booked</div>
              <div className="cell">User Info</div>
              <div className="cell">Price</div>
              <div className="cell">Status</div>
              <div className="cell">Action</div>
            </div>

            {this.state.bookings.map((booking, index) => {
              return (
                <div className="row b">
                  <div className="cell" data-title="Full Name">
                    <img
                      alt=""
                      style={{ width: "60px", height: "60px" }}
                      src={booking.imgUrl}
                    ></img>
                    <div style={{ textAlign: "center", width: "63px" }}>
                      {" "}
                      <h4>{booking.frame_name + " " + booking.brand_name} </h4>
                    </div>
                  </div>
                  <div className="cell" data-title="Email">
                    <p className="fonte">{booking.user_email}</p>
                  </div>
                  <div className="cell" data-title="price">
                    <p className="fonte">{booking.frame_price} </p>
                  </div>
                  <div className="cell" data-title="status">
                    <p style={{ color: "red", padding: "5px" }}>
                      {booking.status}
                    </p>
                  </div>
                  <div className="cell" data-title="action">
                    <button
                      className="round"
                      style={{
                        backgroundColor: "Green",
                        fontFamily: "Montserrat",
                        padding: "8px",
                        color: "white"
                      }}
                      onClick={this.toBeImplemented}
                    >
                      Generate Receipt
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default booking;
