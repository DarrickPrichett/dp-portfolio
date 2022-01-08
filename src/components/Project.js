import React from "react";

const Project = ({project}) => (
    <div>
        <h3>
            {project.title}
        </h3>
        <a target='_blank' href={project.liveSite}>
            <img src={project.image}></img>
        </a>
        <br></br>
        <a target='_blank' href={project.GitHub}>GitHub Link</a>
    </div>
);

export default Project;
