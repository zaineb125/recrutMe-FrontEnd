import React from "react";
import "./Jobs.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import img2 from "../../images/jobs/job-search.png";
import { Button } from "react-bootstrap";
function Jobs() {
  const [allJobs, setallJobs] = useState([]);

  const getAllJobs = () => {
    axios.get("http://localhost:8000/recrutme/jobs").then((result) => {
      setallJobs(result.data);
    });
  };

  const FilterResultBySector = (type) => {
    axios
      .get("http://localhost:8000/recrutme/jobs/sector/" + type)
      .then((result) => {
        setallJobs(result.data);
      });
  };

  const FilterResultByContract = (contract) => {
    axios
      .get("http://localhost:8000/recrutme/jobs/contract/" + contract)
      .then((result) => {
        setallJobs(result.data);
      });
  };

  React.useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div>
        <div className="col-md-40">
          <div className="grid search">
            <fieldset>
              <div className="grid-body">
                <div style={{ display: "flex", alignItems: "stretch" }}>
                  <div className="col-md-3">
                    <h2 className="grid-title">
                      <i className="fa fa-filter"></i> Filters
                    </h2>
                    <hr />
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="job"
                          className="icheck"
                          onClick={() => {
                            getAllJobs();
                          }}
                        />
                        ALL Jobs
                      </label>
                    </div>
                    <h4>Par secteur :</h4>

                    <div>
                      <label>
                        <input
                          type="radio"
                          name="job"
                          className="icheck"
                          onClick={() => FilterResultBySector("santé")}
                        />
                        Santé
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="job"
                          className="icheck"
                          onClick={(event) => {
                            FilterResultBySector("developpement");
                          }}
                        />
                        Developpement
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="job"
                          className="icheck"
                          onClick={() => FilterResultBySector("Justice")}
                        />{" "}
                        Justice
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="job"
                          className="icheck"
                          onClick={() => FilterResultBySector("Management")}
                        />{" "}
                        Management & Finance
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="job"
                          className="icheck"
                          onClick={() => FilterResultBySector("Restauration")}
                        />{" "}
                        Restauration
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="job"
                          className="icheck"
                          onClick={() => FilterResultBySector("Architecture")}
                        />{" "}
                        Architecture
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="job"
                          className="icheck"
                          onClick={() => FilterResultBySector("Biologie")}
                        />
                        Biologie & Chimie
                      </label>
                    </div>

                    <div className="padding"></div>
                    <h4>Par type de contrat :</h4>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="job"
                          className="icheck"
                          onClick={() =>
                            FilterResultByContract("Full Time contract")
                          }
                        />
                        Full Time contract
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="job"
                          className="icheck"
                          onClick={() =>
                            FilterResultByContract("Part Time contract")
                          }
                        />
                        Part Time contract
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="job"
                          className="icheck"
                          onClick={() =>
                            FilterResultByContract("Fixed Time contract")
                          }
                        />
                        Fixed Time contract
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="job"
                          className="icheck"
                          onClick={() =>
                            FilterResultByContract("Temporary contract")
                          }
                        />
                        Temporary contract
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          className="icheck"
                          name="job"
                          onClick={() =>
                            FilterResultByContract("Agency contract")
                          }
                        />
                        Agency contract
                      </label>
                    </div>
                    <div className="padding"></div>
                  </div>

                  <div className="col-md-9">
                    <h2>
                      <i className="fa fa-file-o"></i> Result
                    </h2>
                    <hr />

                    <div className="padding"></div>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <tbody>
                          {allJobs ? (
                            allJobs.map((job) => (
                              <tr>
                                <td className="image">
                                  <div  > 
                                    <img src="https://img.icons8.com/plasticine/100/undefined/new-job.png" /> 
                                  </div> 
                                </td>
                                <td className="product">
                                  <strong style={{ color: "#1c8090", fontSize: "20px", textTransform: "uppercase" }}>{job.secteur}</strong>
                                  <br />
                                  <br />
                                  <p style={{ color: "grey", fontSize: "16px" }}>{job.description}</p>

                                  <br />
                                  <br />
                                </td>
                                <td>
                                  <Link
                                    to={`/job/${job._id}`}
                                    style={{
                                      fontSize: "15px",
                                      color: "#ad0e88",
                                      fontWeight: "bold",
                                      marginLeft: "-70px",
                                    }}
                                  >
                                    Job Details
                                  </Link>

                                </td>
                              </tr>
                            ))
                          ) : (
                            <p>Not loaded yet</p>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
