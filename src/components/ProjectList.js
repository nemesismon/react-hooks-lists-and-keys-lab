import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  for (let project of projects) {
    console.log(project.name);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
        <ProjectItem name={project.name} about={project.about} technologies={project.technologies} key={project.id}/>
      </div>
    </div>
  );
}}

export default ProjectList;
