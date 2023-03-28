import React from 'react';
import './project-shortcut.css';

function ProjectShortcut({title}:{title: string}) {
  const shortcutLetter = title.slice(0,1)
  return (
    <div className="wrapper">
        <div className="circle">
          <div className="letter">{shortcutLetter}</div>
        </div>
        <p className="title">
          {title}
        </p>
    </div>
  );
}

export default ProjectShortcut;
