import React from "react";
import "./main.css";
import "./util.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";

const API = "http://localhost:4000/admin/frames";
const deleteRequest = 'http://localhost:4000/admin/deleteFrame';



 class FrameList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      frames: []
    };

    this.editHander = this.editHander.bind(this);
    this.deleteFrame =  this.deleteFrame.bind(this);
    this.getData = this.getData.bind(this);
  }
  getData() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({ frames: data }));
  }
  componentDidMount() {
    this.getData();
  }

  editHander() {
    alert("sorry this feature is not implemented yet");
  
  }

  deleteFrame(brand,name){
    if (window.confirm("Are you sure you wish to delete this frame?")) {
      
      var done = this;
      fetch(deleteRequest, {
        method: "DELETE",
        body: JSON.stringify({brand,name}),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(response) {
        if (response.ok) {
          done.getData();
        } else {
          alert("FRAME CANNOT BE DELETED");
        }
      });




    }

  }




  render(){
    function placeFrames(frame,th){

      if(frame.name != "deleted")
      return (
        <div className="row b">
          <div className="cell" data-title="frame id">
            <img
              style={{ width: "60px", height: "60px" }}
              alt=""
              src={frame.imgUrl}
            ></img>
            <div style={{ textAlign: "center", width: "63px" }}>
              {" "}
              <h4>{frame.brand + " " + frame.id}</h4>
            </div>
          </div>
          <div className="cell" data-title="Name">
            <p className="fonte">{frame.name + " " + frame.brand}</p>
          </div>
          <div className="cell" data-title="Color">
            <p className="fonte">{frame.weight}</p>
          </div>
          <div className="cell" data-title="Action">
            <button
              className="round"
              style={{
                backgroundColor: "red",
                fontFamily: "Montserrat",
                padding: "5px",
                marginRight: "5px",
                color: "white"
              }}
              onClick={() => th.deleteFrame(frame.brand,frame.name)}
            >
              Delete
            </button>
            <button
              className="round"
              style={{
                backgroundColor: "green",
                fontFamily: "Montserrat",
                padding: "0px",
                marginTop: "5px",
                color: "white"
              }}
             
            >
              <Link style={{textDecoration:"none" , padding: "5px", color:"white" }} to={{
                pathname: '/frames/editFrame',
                state: {
                  frameInfo : frame
                }
              }}>Edit</Link>
              
            </button>
          </div>
        </div>
      );
            }


            return (
            <div Align="center" >
            <div Align="Right" className="wrap-table100 pad">
              <button
                className="fonte"
                style={{
                  backgroundColor: "green",
                  fontSize: "1em",
                  borderRadius: "35px",
                  padding: "2px",
                  color: "white"
                }}
              > <Link style={{textDecoration:"none" , color:"white" }} to={{
                pathname: '/frames/addFrame',
              }}> ADD New Frame</Link>
              </button>
            </div>
     
     
     
            <div style={{ marginTop: "1%" }} className="wrap-table100">
              <div className="table">
                <div className="row header">
                  <div className="cell">Frames</div>
                  <div className="cell">Name and brand</div>
                  <div className="cell">Weight</div>
                  <div className="cell">Action</div>
                </div>
     
                {this.state.frames.map((frame, index) => {
                   
                  return placeFrames(frame,this)
     
                })}
              </div>
            </div>
       </div>
            );

  }
}



 export default class frames extends React.Component{
 
  constructor(props) {
    super(props);
  
  }



render(){
    return (
      <div Align="center" style={{ color: "black" }}>
       <div Align="left" className="wrap-table100 pad">
         <h1
            className="pad"
            style={{ marginRight: "70%", display: "inline-block" }}
          >
            Frames 
          </h1>
          </div>

     <FrameList /> 
     
     
      </div>
    );


    }
  
}








// export default frames;
