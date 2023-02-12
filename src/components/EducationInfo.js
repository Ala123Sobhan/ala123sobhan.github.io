import React, { Component } from "react";

class EducationInfo extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div>
          <h3
            className="education-title"
            style={{ fontFamily: "Sofia", marginTop: "50px" }}
          >
            Education
          </h3>
          <h5 style={{ fontFamily: "Sofia" }}>
            City University of New York – Lehman College, Bronx, NY{" "}
            <span style={{ marginLeft: "50px" }}>
              {this.props.startYear} - {this.props.endYear}
            </span>
          </h5>
          <p style={{ fontFamily: "Sofia" }}>B.S. Computer Science, 4.0 GPA </p>
        </div>
      </div>
    );
  }
}

export default EducationInfo;
