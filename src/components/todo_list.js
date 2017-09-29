import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { getAll } from '../actions/index';
import ListItem from './list_item';
import BackgroundPattern from './imgs/background_pattern';
import './list_style.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index : 0
        }
    }
    componentWillMount() {
        this.props.getAll();
    }
    changeBackground() {
        const newIndex = Math.floor(Math.random() * 24)
        this.setState({
            index : newIndex
        })
    }
    render() {
        console.log("Current Index: ", this.state.index)
        const { todos } = this.props;
        if(!todos.length) {
            return (
            <div>
                <BackgroundPattern index={this.state.index} />
                <button onClick={() => this.changeBackground()} className="my-5 btn btn-lg btn-secondary">
                    Todo List
                </button>
                <ul className="list-group">{todoList}</ul>
                <Link to="/add-todo" style={{textDecoration: "none"}}>
                    <button className="btn btn-secondary my-3">Add Task</button>
                </Link>
            </div>
            )
        }
        const todoList = this.props.todos.map((item, index) => {
            return <ListItem todoItem={item} key={index} />
        })

        return (
            <div>
                <BackgroundPattern index={this.state.index} />
                <button onClick={() => this.changeBackground()} className="my-5 btn btn-lg btn-secondary">
                    Todo List
                </button>
                <ul className="list-group">{todoList}</ul>
                <Link to="/add-todo" style={{textDecoration: "none"}}>
                    <button className="btn btn-secondary my-3">Add Task</button>
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