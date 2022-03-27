import React from "react";

function ProjectItem({ name, about, technologies }) {
  // console.log(technologies);
  const techArr = technologies.map((tech, index) => {
    return (<span id="span" key={tech + index}>{tech}</span>)
  })

    return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
          {techArr}
      </div>
    </div>
  );
}


export default ProjectItem;
