import React from "react";
import "./Myleave.css";
import Footer from "./Footer";
export default function Myleave() {
  let boxstyle = {
    background: "white",
    padding: "21px",
    borderTop: "5px solid #004dffe8",
    borderRadius: "5px",
    height: "auto",
  };
  
  return (
    <>
      <div style={{minHeight:'100%'}}>
        <div className="container my-2 pt-3">
          <h2>Leave Management</h2>
        </div>
        <div className="container mt-3" style={boxstyle}>
          <h4>View Leave</h4>
          <br />
          Show
          <select className="p-2 m-1 px-3">
            <option value={1} id="num1">
              1
            </option>
            <option value={2} id="num2">
              2
            </option>
            <option value={3} id="num3">
              3
            </option>
            <option value={4} id="num4">
              4
            </option>
            <option value={5} id="num5">
              5
            </option>
            <option value={6} id="num6">
              6
            </option>
            <option value={7} id="num7">
              7
            </option>
            <option value={8} id="num8">
              8
            </option>
            <option value={9} id="num9">
              9
            </option>
            <option value={10} id="num10">
              10
            </option>
          </select>
          entries
          <form class="d-flex float-end">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search.."
              aria-label="Search"
            />
            <button class="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
          <div className="container m-2">
            <div className="row">
              <table>
                <thead>
                  <tr>
                    <th className="col-1 bg- p-1 px-2 tablestyle text-center">
                      #
                    </th>
                    <th className="col bg- p-1 px-2 tablestyle">Reason</th>
                    <th className="col bg- p-1 px-2 tablestyle">From</th>
                    <th className="col bg- p-1 px-2 tablestyle">To</th>
                    <th className="col bg- p-1 px-2 tablestyle">Status</th>
                    <th className="col-5 bg- p-1 px-2 tablestyle">
                      Description
                    </th>
                    <th className="col bg- p-1 px-2 tablestyle">Applied On</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="col-1 bg- p-1 px-2 tablestyle text-center">
                      1
                    </td>
                    <td className="col bg- p-1 px-2 tablestyle">Somereason</td>
                    <td className="col bg- p-1 px-2 tablestyle">22-1-24</td>
                    <td className="col bg- p-1 px-2 tablestyle">1-2-24</td>
                    <td className="col bg- p-1 px-2 tablestyle">
                      <span class="badge bg-success">Approved</span>
                    </td>
                    <td className="col-5 bg- p-1 px-2 tablestyle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae rerum, earum laborum minus aliquid atque quod beatae
                      fuga magnam a explicabo nesciunt iste saepe placeat dicta
                      possimus amet architecto! Quia?
                    </td>
                    <td className="col bg- p-1 px-2 tablestyle">20-12-23</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="container m-2"
            style={{ background: "white", height: "25px" }}
          >
            <p className="float-start my-2">Showing 1 to2 of 2 entries</p>
            <div
              class="btn-group float-end my-2"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" class="btn btn-outline-primary">
                &#11164;
              </button>
              <button type="button" class="btn btn-outline-primary active">
                1
              </button>
              <button type="button" class="btn btn-outline-primary">
                &#11166;
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer footerstyle="fixed-bottom" />
    </>
  );
}
