import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { getAll } from '../actions/index';
import ListItem from './list_item';
import './list_style.css';

class TodoList extends Component {
    componentWillMount() {
        this.props.getAll();
    }
    render() {
        const { todos } = this.props;
        if(!todos.length) {
            return (
            <div>
                <h3 className="my-5">To do List</h3>
                <Link to="/add-todo" style={{textDecoration: "none"}}>
                    <button className="btn btn-outline-info my-3">Add Task</button>
                </Link>
            </div>
            )
        }
        const todoList = this.props.todos.map((item, index) => {
            return <ListItem todoItem={item} key={index} />
        })

        return (
            <div>
                <h3 className="my-5">To Do List</h3>
                <ul className="list-group">{todoList}</ul>
                <Link to="/add-todo" style={{textDecoration: "none"}}>
                    <button className="btn btn-outline-info my-3">Add Task</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log()
    return {
        todos : state.todos.all
    }
} 

export default connect(mapStateToProps, {getAll})(TodoList);