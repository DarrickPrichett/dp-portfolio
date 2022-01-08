import React from "react";
import image1 from "../../image/download.jpg";
import Project from "../Project";

const Projects = () => {
  const projectData = [
    {
      title: 'RunBuddy',
      image: image1,
      GitHub: 'GitHub.com',
      liveSite: 'Heroku.com'
    },
    {
      title: 'RunBuddy2',
      image: image1,
      GitHub: 'GitHub.com',
      liveSite: 'Heroku.com'
    }
  ]
  return (
    <div>
      <h1>Projects Page</h1>
      {projectData.map(project => (
       <Project project = {project} />
      ))}

    </div>
  );
}
export default Projects;
