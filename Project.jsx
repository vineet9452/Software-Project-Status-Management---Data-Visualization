import React from 'react';
import SDLCStage from './SDLCStage';
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = ({ project }) => {
  if (!project || !project.stages) {
    return <div>Invalid Project Data</div>;
  }

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h3>{project.name}</h3>
      </div>
      <div className="card-body">
        {project.stages.map((stage) => (
          <SDLCStage key={stage.name} stage={stage} />
        ))}
      </div>
    </div>
  );
};

export default Project;
