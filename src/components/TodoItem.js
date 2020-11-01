import React, { Component } from 'react'
import { Checkbox, IconButton, Grid, Typography  } from '@material-ui/core';
import {DeleteForever} from '@material-ui/icons';

export class TodoItem extends Component {

  getStyle = () => {
    return{
      background: '#f3f3',
      padding: '10px',
      borderBottom: '2px #333 dotted',
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      
    }
  } 

  render() {
    let { id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={1}>
            <Checkbox 
              checked={this.props.todo.completed}
              onChange={this.props.setComplete.bind(this, id)}
            />
          </Grid>
          <Grid item xs={10}>
          <Typography justify="center" align="left">{title}</Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={this.props.delTodo.bind(this, id)} aria-label="delete">
              <DeleteForever color="secondary"/>
            </IconButton>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default TodoItem