import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }
  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid(),
          title: 'Business Website',
          category: 'Web Design',
        },

        {
          id: uuid(),
          title: 'Social App',
          category: 'Mobile Development',
        },
        {
          id: uuid(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development',
        },
      ],
    });
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
