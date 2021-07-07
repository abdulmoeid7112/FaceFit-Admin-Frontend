import React from "react";
import "./main.css";
import "./util.css";


const API = "http://localhost:4000/admin/viewUsers";
const statusRequest = "http://localhost:4000/admin/changeStatus";
class users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      reload: "yes",
      users: []
    };

    this.changeStatus = this.changeStatus.bind(this);
    this.getData = this.getData.bind(this);
  }

  getData() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }

  componentDidMount() {
    this.getData();
  }

  changeStatus(email, status) {
    if (window.confirm("Are you sure you wish to Change the Status?")) {
      var reqdata = {
        email: email,
        status: status
      };
      var done = this;
      fetch(statusRequest, {
        method: "PUT",
        body: JSON.stringify(reqdata),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(response) {
        if (response.ok) {
          done.getData();
          // window.location.reload(false);
        } else {
          alert("Status cannot be changed");
        }
      });
    }
  }

  render() {
    function changeButtonStatus(user, th) {
      let statusText,
        bgColor = "green";
      if (user.status == "enable") {
        statusText = "Enabled";
        bgColor = "green";
      } else {
        statusText = "Disabled";
        bgColor = "red";
      }

      return (
        <button
          className="round"
          style={{
            backgroundColor: bgColor,
            fontFamily: "Montserrat",
            padding: "5px",
            color: "white"
          }}
          onClick={() => th.changeStatus(user.email, user.status)}
        >
          {statusText}
        </button>
      );
    }

    return (

     
      
      <div style={{ color: "black" }} align="center">
        <h1 className="pad">App Users</h1>

        <div style={{ marginTop: "3%" }} className="wrap-table100">
          <div className="table">
            <div className="row header">
              <div className="cell">Users</div>
              <div className="cell">Contact Info</div>
              <div className="cell">Address</div>
              <div className="cell">Status</div>
            </div>

            {  this.state.users.map((user, index) => {
              return (
                <div className="row b">
                  <div className="cell" data-title="Full Name">
                    <img
                      alt=""
                      style={{ width: "60px", height: "60px" }}
                      src={user.imgUrl}
                    ></img>
                    <div style={{ textAlign: "center", width: "63px" }}>
                      {" "}
                      <h4>{user.first_name + "  " + user.last_name}</h4>
                    </div>
                  </div>
                  <div className="cell" data-title="Email">
                    <p className="fonte">{user.email}</p>
                    <p className="fonte">{user.phone_number}</p>
                  </div>
                  <div className="cell" data-title="Address">
                    <p className="fonte">{user.address} </p>
                  </div>
                  <div className="cell" data-title="Status">
                    {changeButtonStatus(user, this)}
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

export default users;
