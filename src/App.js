import React, {Component} from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'get a rope',
        isCompleted: true,
      },
      {
        id: 2,
        title: 'tie the rope to cieling',
        isCompleted: false,
      },
      {
        id: 3,
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

  render(){
    return(
      <div>
        <Todos
        todo = {this.state.todos} 
        setComplete = {this.setComplete}
        delTodo = {this.delTodo}
        />
    </div>
    );
  }
}

export default App;
