import React from 'react';
import './project-list.css';

function ProjectList({children}:{children: any}) {
  return (
    <div className="grid-container">
        {children}
    </div>
  );
}

export default ProjectList;
