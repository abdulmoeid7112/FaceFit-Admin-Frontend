import React, { Component } from "react";
import "./App.css";

import { Route, Link, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import AddFrame from "./components/AddFrame";
import booking from "./components/booking";
import frames from "./components/frames";
import users from "./components/users";
import EditFrame from "./components/editFrame";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            height: "100px",
            marginLeft: "18%",
            marginTop: 0,
            borderBottom: "1px solid #d6d6d1",
            backgroundColor: "rgb(201, 217, 228)"
          }}
        >
          <header>
            <div
              align="left"
              style={{
                paddingTop: "25px",
                marginLeft: "20px",
                fontSize: "1.2em"
              }}
            >
              <h1
                className="title"
                style={{
                  color: "rgb(50, 120, 167)",
                  textShadow: "1px 1px #74818a"
                }}
              >
                Admin Dashboard
              </h1>
            </div>
          </header>
        </div>

        <div
          style={{
            backgroundColor: "rgb(61, 138, 189)",
            top: "0px",
            height: "100%",
            position: "fixed",
            width: "18%"
          }}
        >
          <div
            Align="center"
            style={{
              paddingBottom: "1px",
              borderBottom: "1px solid #6eb0dc",
              marginBottom: "40px",
              backgroundColor: "rgb(52, 152, 219)",
              paddingTop: "16px"
            }}
          >
            <img id="imlogo" src="logo.svg" alt="logo"></img>
            <h1
              id="logo"
              style={{ textShadow: "1px 1px black", color: "white" }}
            >
              Face{" "}
              <span
                style={{ color: "black", textShadow: "0.01px 0.01px white" }}
              >
                Fit
              </span>
            </h1>
          </div>

          <div>
            <ul
              style={{
                textDecoration: "none",
                textAlign: "left",
                Color: "#fff"
              }}
            >
              {/* <hr></hr> */}
              <li>
                <Link to="/">
                  <span>
                    <img
                      style={{
                        display: "inline-block",
                        width: "30px",
                        marginRight: "20px"
                      }}
                      src="home.png"
                    ></img>
                  </span>
                  Home
                </Link>{" "}
              </li>
              {/* <hr></hr> */}
              <li>
                {" "}
                <Link to="/users">
                  {" "}
                  <span>
                    <img
                      style={{
                        display: "inline-block",
                        width: "30px",
                        marginRight: "20px"
                      }}
                      src="users.png"
                    ></img>
                  </span>
                  Users
                </Link>{" "}
              </li>
              {/* <hr></hr> */}
              <li>
                {" "}
                <Link className="small" to="/frames">
                  <span>
                    <img
                      style={{
                        display: "inline-block",
                        width: "30px",
                        marginRight: "20px"
                      }}
                      src="frames.png"
                    ></img>
                  </span>
                  Frames
                </Link>{" "}
              </li>
              {/* <hr></hr> */}
              <li>
                {" "}
                <Link className="small" to="/booking">
                  <img
                    style={{
                      display: "inline-block",
                      width: "30px",
                      marginRight: "20px"
                    }}
                    src="booking.png"
                  ></img>
                  Bookings
                </Link>{" "}
              </li>
              {/* <hr></hr> */}
              {/* <li > <Link style={{textDecoration:"none" , color:"white" }} to="/about">About us</Link> </li> */}
              {/* <hr></hr> */}
            </ul>
          </div>
        </div>
        <div
          className="App-intro"
          style={{
            width: "82%",
            backgroundColor: "#f7f7f7",
            height: "580px",
            overflowY: "scroll",
            marginLeft: "18%"
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={users} />
            <Route exact path="/frames" component={frames} />
            <Route path="/booking" component={booking} />
            <Route path="/frames/addFrame" component={AddFrame} />
            <Route path="/frames/editFrame" component={EditFrame} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
