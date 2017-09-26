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
                <h1 className="my-5">Todo List</h1>
                <Link to="/add-todo">
                    <button className="btn btn-ouline-info">Add Item</button>
                </Link>
            </div>
            )
        }
        const todoList = this.props.todos.map((item, index) => {
            return <ListItem todoItem={item} key={index} />
        })

        return (
            <div>
                <h1 className="my-5">Todo List</h1>
                <ul className="list-group">{todoList}</ul>
                <Link to="/add-todo" style={{textDecoration: "none"}}>
                    <div className="add-item">
                        <i className="fa fa-plus-circle text-success"></i>
                    </div>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos : state.todos.all
    }
} 

export default connect(mapStateToProps, {getAll})(TodoList);