import React from "react";
import image1 from "../../image/e-commercePhoto.png";
import image2 from "../../image/readmePhoto.png";
import image3 from "../../image/photo-port-image.jpg";
import image4 from "../../image/employee-tracker-image.jpg";
import image5 from "../../image/team-profile-generator.png";
import image6 from "../../image/note-taker-image.jpg";
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
      image: image2,
      GitHub: 'https://github.com/DarrickPrichett/Professional-READMe-Generator',
      liveSite: 'Heroku.com'
    },
    {
      title: 'Photo-port',
      image: image3,
      GitHub: 'https://github.com/DarrickPrichett/photo-port',
      liveSite: 'https://darrickprichett.github.io/photo-port/'
    },
    {
      title: 'Employee-Tracker',
      image: image4,
      GitHub: 'https://github.com/DarrickPrichett/Employee-Tracker',
      liveSite: 'https://watch.screencastify.com/v/ZbjI4gaz7GpX2ZMJrS8s'
    },
    {
      title: 'Team-Profile-Generator',
      image: image5,
      GitHub: 'https://github.com/DarrickPrichett/Team-Profile-Generator',
      liveSite: 'https://watch.screencastify.com/v/M5xpR2pluhPyH7930jMe'
    },
    {
      title: 'Note-Taker',
      image: image6,
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
