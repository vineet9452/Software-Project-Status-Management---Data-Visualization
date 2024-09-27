import React, { useState } from 'react';
import Project from './Project';
import projectData from '../project_data.json';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectData.projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="my-4">Project Dashboard</h1>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredProjects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Dashboard;
