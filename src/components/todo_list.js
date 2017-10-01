import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { getAll, changeBackground } from '../actions/index';
import ListItem from './list_item';
import BackgroundPattern from './imgs/background_pattern';
import './list_style.css';

class TodoList extends Component {
    componentWillMount() {
        this.props.getAll();
    }

    changeBackground() {
        this.props.changeBackground(Math.floor(Math.random() * 22))
    }

    render() {
        console.log("Props in Todo List: ", this.props)
        const { todos } = this.props;
        if(!todos.length) {
            return (
            <div>
                <BackgroundPattern index={this.props.background} />
                <button onClick={() => this.changeBackground()} className="my-5 btn btn-lg btn-secondary" style={{fontFamily: 'Oswald'}}>
                    TO-DO LIST
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
            <div className="mt-5" style={{position: "relative"}}>
                <BackgroundPattern index={this.props.background} />
                <button onClick={() => this.changeBackground()} className="mb-5 btn btn-lg btn-secondary" style={{fontFamily: 'Oswald'}}>
                    TO-DO LIST
                </button>
                {/* <button type="button" className="btn btn-primary" style={{position: "absolute", right: 0}} onClick={() => this.changeBackground()}>Change BG</button> */}
                <ul className="list-group">{todoList}</ul>
                <Link to="/add-todo" style={{textDecoration: "none"}}>
                    <button className="btn btn-success my-3">Add Item</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log()
    return {
        todos : state.todos.all,
        background : state.background.background
    }
} 

export default connect(mapStateToProps, {getAll, changeBackground})(TodoList);