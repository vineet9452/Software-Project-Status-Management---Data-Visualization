import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const SDLCStage = ({ stage }) => {
  if (!stage || !stage.steps) {
    return <div>Invalid Stage Data</div>;
  }

  const completedSteps = stage.steps.filter((step) => step.completed).length;
  const progress = Math.round((completedSteps / stage.steps.length) * 100); 

  return (
    <div className="mb-3">
      <h5>{stage.name}</h5>
      <ProgressBar now={progress} label={`${progress}%`} />
      <ul className="list-group mt-2">
        {stage.steps.map((step, index) => (
          <li
            key={index}
            className={`list-group-item ${
              step.completed ? 'list-group-item-success' : 'list-group-item-danger'
            }`}
          >
            {step.step_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SDLCStage;
