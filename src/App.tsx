import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectShortcut from './components/project-icon/project-shortcut';
import ProjectList from './components/project-list/project-list';

function App() {
  return (
    <div className="App">
      <ProjectList>
        <ProjectShortcut title="First"/>
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
    </div>
  );
}

export default App;
