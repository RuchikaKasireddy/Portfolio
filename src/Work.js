import React, { useState, useEffect } from "react";
import workExperienceData from "./workExperienceData.json";
import parse from "html-react-parser";

function Work() {
  const [workExperience, setWorkExperience] = useState([]);

  useEffect(() => {
    setWorkExperience(workExperienceData);
  }, []);

  function toggleCollapse(id) {
    const updatedWorkExperience = [...workExperience];
    const index = updatedWorkExperience.findIndex((item) => item.id === id);
    updatedWorkExperience[index].collapsed =
      !updatedWorkExperience[index].collapsed;
    setWorkExperience(updatedWorkExperience);
  }

  return (
    <div id="work">
      <div className="workheader">
        <p className="orangehighlight">Work Experience</p>
      </div>
      {workExperience &&
        workExperience.map((item) => (
          <div key={item.id}>
            <div className="workitem" onClick={() => toggleCollapse(item.id)}>
              <div className="worktitle">
                <div>
                  <p className="bluehighlight">{item.companyName}</p>
                  <p className="yellowhighlight">{item.jobTitle}</p>
                </div>
                <div className={`arrow${item.collapsed ? "down" : "up"}`} />
              </div>
              <div className={`workdetails ${item.collapsed ? "" : "visible"}`}>
                <p>
                  {item.startDate} - {item.endDate}
                </p>
                <p>{item.location}</p>
                <div className="responsibilitieslist">
                  <div className="listicon" />
                  <ul>
                    {item.responsibilities.map((responsibility, index) => (
                      <div key={index}>
                        <li>
                          {parse(
                            responsibility.replace(
                              /<mark>(.*?)<\/mark>/g,
                              '<span class="orangehighlight">$1</span>'
                            )
                          )}
                        </li>
                        <br />
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <br />
          </div>
        ))}
    </div>
  );
}

export default Work;
