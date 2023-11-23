import React from "react";

const Skills = (props) => {
  if (props.sharedSkills && props.resumeBasicInfo) {
    var sectionName = props.resumeBasicInfo.section_name.skills;
    var skills = props.sharedSkills.icons.map(function (skill, i) {
      return (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center skills-title">
              <i className={skill.class} style={{ fontSize: "300%" }}>
                <p
                  className="text-center"
                  style={{ fontSize: "30%", marginTop: "4px" }}
                >
                  {skill.name}
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
          <h1 className="section-title" style={{fontSize: "2.5em"}}>
            <span className="text-white">{sectionName}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{skills}</ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
