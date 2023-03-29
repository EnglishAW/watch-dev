import React from 'react';
import { Link } from 'react-router-dom';
import ProjectShortcut from '../../components/project-icon/project-shortcut';
import ProjectList from '../../components/project-list/project-list';
import './home.css'

function Home() {

  return (
    <ProjectList>
        <Link className="link" to="up-down">
            <ProjectShortcut title="Up Down"/>
        </Link>
        <Link className="link" to="random-dog">
            <ProjectShortcut title="Random Dog"/>
        </Link>
        
        <ProjectShortcut title="Demo"/>
        <ProjectShortcut title="Mock"/>
        <ProjectShortcut title="Nothing"/>
        <ProjectShortcut title="Icon"/>
        <ProjectShortcut title="Test"/>
        <ProjectShortcut title="Demo"/>
        <ProjectShortcut title="Mock"/>
        <ProjectShortcut title="Nothing"/>
        <ProjectShortcut title="Icon"/>
        <ProjectShortcut title="End"/>
    </ProjectList>
  );
}

export default Home;
