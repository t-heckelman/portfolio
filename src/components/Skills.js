import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i} style={{background: "#6D6D6D", borderTopLeftRadius: 20,
    borderTopRightRadius: 20, borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20}}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span>{sectionName}</span>
            </h1>
          </div>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto skill-icon">{skills}</ul>
            </div>
        </div>
      </section>
    );
  }
}

export default Skills;
