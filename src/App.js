import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'get a rope',
        isCompleted: true,
      },
      {
        id: uuidv4(),
        title: 'tie the rope to cieling',
        isCompleted: false,
      },
      {
        id: uuidv4(),
        title: 'hang yourself',
        isCompleted: false,
      }
    ]
  }

  setComplete = (id) =>{
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.isCompleted = !todo.isCompleted
        }
        return todo;
      })
    });
  }

  delTodo = (id) =>{
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      isCompleted: false,
    }
    this.setState({todos : [...this.state.todos, newTodo]});
  }
  render(){
    return(
      <div>
        <div className="App">
          <Header />
          <AddTodo 
            AddTodo = {this.addTodo}
          />
          <Todos
          todo = {this.state.todos} 
          setComplete = {this.setComplete}
          delTodo = {this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
