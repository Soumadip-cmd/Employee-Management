import React from "react";
import Footer from "./Footer";

export default function Addsalary() {
  let boxstyle = {
    background: "white",
    padding: "21px",
    borderTop: "5px solid #004dffe8",
    borderRadius: "5px",
  };
  function calculate() {
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    let sum = n1 + n2;
    //  console.log(sum
    document.getElementById("total").value = sum;
  }
  return (
    <>
    <div class="alert alert-success m-3" role="alert"  >
        A simple success alert—check it out!
      </div>
      
      <div className="container my-2">
        <h2>Salary</h2>
      </div> 
      
      <div className="container-fluid pt-3" style={{ padding: "100px" }}>
        <div className="row d-flex justify-content-evenly" style={boxstyle}>
          <h5 style={{ fontSize: "20px" }} className="px-2">
            Add Salary
          </h5>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <b className="">Department Name</b>
                  <select
                    className="form-control"
                    style={{ border: "1px solid" }}
                  >
                    <option disabled defaultValue={"--Department Name--"}>
                      --Department Name--
                    </option>
                    <option>Backend developement</option>
                    <option>Designing</option>
                    <option>Front-end developement</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="container m-3">
            <div className="row p-3">
              <table>
                <thead>
                  <tr>
                    <th className="col-md-3 text-center bg- p-1 px-2 tablestyle">
                      Staff
                    </th>
                    <th className="col-md-3 text-center bg- p-1 px-2 tablestyle">
                      Basic Salary($)
                    </th>
                    <th className="col-md-3 text-center bg- p-1 px-2 tablestyle">
                      Allowance($)
                    </th>
                    <th className="col-md-3 text-center bg- p-1 px-2 tablestyle">
                      Total($)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="col-md-3 bg- p-1 px-2 tablestyle">
                      Soumadip santra
                    </td>
                    <td className="col-md-3 bg- p-1 px-2 tablestyle">
                      <input
                        type="text"
                        id="num1"
                        onChange={calculate}
                        style={{ width: "100%" }}
                      />
                    </td>
                    <td className="col-md-3 bg- p-1 px-2 tablestyle">
                      <input
                        type="text"
                        id="num2"
                        onChange={calculate}
                        style={{ width: "100%" }}
                      />
                    </td>
                    <td className="col-md-3 bg- p-1 px-2 tablestyle">
                      <input type="text" id="total" style={{ width: "100%" }} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="container">
            <button
              type="submit"
              className="btn btn-success float-end"
              // onClick={show}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer footerstyle="fixed-bottom" />
    </>
  );
}
