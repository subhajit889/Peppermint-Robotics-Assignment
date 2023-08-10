import React, { useState } from "react";
import "./careers.css";
import fresher from "../Assets/fresh.png";
import experience from "../Assets/experience.png";
import { jobOpenings } from "../Assets/Jobs_Data/JobData";
import { useNavigate } from "react-router-dom";
import FreshGraduate from "./Freshers/FreshGraduate";

const Career = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showJobBox, setShowJobBox] = useState(true);
  const navigate = useNavigate();

  const hanldleApply = (id) => {
    navigate(`/form/${id}`);
  };

  const handleFreshGraduateClick = () => {
    setShowDialog(!showDialog);
    setShowJobBox(true);
  };

  return (
    <>
      <div className="career">
        <header>
          <center>
            <h1>Careers</h1>
          </center>
        </header>
        <div className="hiringBox">
          <h3 className="excitedText">
            <span className="animation">WE'RE HIRING!</span>
          </h3>
          <h1>Current Openings</h1>

          <div className="portal">
            <div className="experience">
              <div className="experiences">
                <img src={experience} alt="professional" className="lg-img" />
                <h1>Experience Professionals</h1>
              </div>
            </div>
            <div className="fresher">
              <div className="freshers" onClick={handleFreshGraduateClick}>
                <img src={fresher} alt="freshers" className="lg-img" />
                <h1>For Fresh Graduate</h1>
              </div>
            </div>
          </div>
          {showDialog && <FreshGraduate />}
          {showJobBox && (
            <div className="jobBox">
              {jobOpenings.map((job, index) => (
                <div className="vacancy" key={job.id}>
                  <div className="jobTitle">{job.title}</div>
                  <div className="jobType">{job.position}</div>
                  <hr />
                  <div className="jobRequirement">
                    <ul>
                      {job.techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                    <div className="buttonContainer">
                      <button className="detailsButton">
                        More Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Career;
