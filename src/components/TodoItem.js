import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return{
      background: '#f3f3',
      padding: '10px',
      borderBottom: '2px #333 dotted',
      textDecoration: this.props.todo.isCompleted ? "line-through" : "none"
    }
  } 

  render() {
    const { id, title} = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.setComplete.bind(this, id)}/>{"    "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
} 

export default TodoItem