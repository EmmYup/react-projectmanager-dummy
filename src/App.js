import React, { Component } from 'react';
import uuid from 'uuid/v4';
import axios from 'axios';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: [],
    };
  }

  async getTodos() {
    const { data: todos } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    this.setState({ todos });
  }

  getProjects() {
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

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    projects.splice(projects.findIndex(project => project.id === id), 1);
    this.setState({ projects: projects });
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects
          projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)}
        />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
