import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=10')
      .then(res => this.setState({ todos: res.data}))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    }));
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      isCompleted: false
    })
    .then(res => this.setState({todos : [...this.state.todos, res.data]}));
  }
  render(){
    return(
      <Router>
        <div>
          <div className="App">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo AddTodo = {this.addTodo}/>
                <Todos
                  todo = {this.state.todos} 
                  setComplete = {this.setComplete}
                  delTodo = {this.delTodo}
                />
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
