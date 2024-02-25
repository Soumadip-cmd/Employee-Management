import React from "react";
import Footer from "./Footer";

export default function ApplyLeave() {
  let boxstyle={
    background: 'white',
    padding: '21px',
    borderTop: '5px solid #004dffe8',
    borderRadius: '5px',
  }
  // function call()
  // {
  //   let reason=document.getElementById('reason').value;
  //   localStorage.setItem("coz",reason)
  // }
  return (
    <>
        <div className="container my-2 pt-3">
          <h2>Leave Management</h2>
        </div>
        <div className="container-fluid pt-3" style={{padding:'100px'}}>
          <div className="row d-flex justify-content-evenly" style={boxstyle}>
            <h5 style={{fontSize:'20px',}} className="px-2">Apply Leave</h5>
            <hr/>
            <div className="col-sm-12 col-md-6 col-lg-5">
              
                <div className="mb-3">
                  <b>Reason</b>
                  <input
                    type="text"
                    className="form-control"
                    id="reason"
                    placeholder="Reason" style={{border: '1px solid'}}
                  />
                </div>
                <div className="mb-3">
                  <b>Leave From</b>
                  <input
                    type="date"
                    className="form-control"
                    id="startdate" style={{border: '1px solid'}}
                  />
                </div>
              
            </div>
            <div className="col-sm-12 col-md-4 col-lg-5">
              
                <div className="mb-3">
                  <b>Leave To</b>
                  <input
                    type="date"
                    className="form-control"
                    id="enddate"
                     style={{border: '1px solid'}}
                  />
                </div>
                <div className="mb-3">
                  <b>Description</b>
                  <textarea  className="form-control" placeholder="Description" id="description" style={{border: '1px solid'}}/>
                  
                </div>
                <button type="submit" className="btn btn-primary float-end" id="applyleave" >
                  Submit
                </button>
              
            </div>
          </div>
        </div>
        <Footer footerstyle="fixed-bottom"/>
      </>
    
  );
}
