import React from "react";
import image1 from "../../image/download.jpg";
import Project from "../Project";

const Projects = () => {
  const projectData = [
    {
      title: 'E-Commerce-Back-End',
      image: image1,
      GitHub: 'GitHub.cohttps://github.com/DarrickPrichett/E-Commerce-Back-End',
      liveSite: 'https://budget-tracker-dp1.herokuapp.com/'
    },
    {
      title: 'Professional-READMe-Generator',
      image: image1,
      GitHub: 'https://github.com/DarrickPrichett/Professional-READMe-Generator',
      liveSite: 'Heroku.com'
    },
    {
      title: 'Photo-port',
      image: image1,
      GitHub: 'https://github.com/DarrickPrichett/photo-port',
      liveSite: 'https://darrickprichett.github.io/photo-port/'
    },
    {
      title: 'Employee-Tracker',
      image: image1,
      GitHub: 'https://github.com/DarrickPrichett/Employee-Tracker',
      liveSite: 'https://watch.screencastify.com/v/ZbjI4gaz7GpX2ZMJrS8s'
    },
    {
      title: 'Team-Profile-Generator',
      image: image1,
      GitHub: 'https://github.com/DarrickPrichett/Team-Profile-Generator',
      liveSite: 'https://watch.screencastify.com/v/M5xpR2pluhPyH7930jMe'
    },
    {
      title: 'Note-Taker',
      image: image1,
      GitHub: 'https://github.com/DarrickPrichett/Note-Taker',
      liveSite: 'https://serene-caverns-76543.herokuapp.com/'
    },
    {
      title: 'National Park Explorer',
      image: image1,
      GitHub: 'https://github.com/dustinturp/Project1',
      liveSite: 'https://dustinturp.github.io/Project1/'
    }
    // {
    //   title: 'Photo-port',
    //   image: image1,
    //   GitHub: 'https://github.com/DarrickPrichett/photo-port',
    //   liveSite: 'https://darrickprichett.github.io/photo-port/'
    // },

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
