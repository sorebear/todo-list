<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAll } from "../actions/index";
import Header from "./header";
import ListItem from "./list_item";
import BackgroundPattern from "./imgs/background_pattern";
import "./list_style.css";

class TodoList extends Component {
	componentWillMount() {
		this.props.getAll();
	}

	renderTodos() {
		if (!this.props.todos.length) {
			return (
				<li className="collection-item">You Currently Have No Items</li>
			);
		}
		return this.props.todos.map((item, index) => {
			return <ListItem todoItem={item} key={index} />;
		});
	}

	render() {
		return (
			<div className="mt-5" style={{ position: "relative" }}>
				<BackgroundPattern index={this.props.background} />
                <Header title="To-Do List"/>
                <ul className="collection">
                    {this.renderTodos()}
                </ul>
				<Link to="/add-todo">
					<button className="btn-floating btn-large red my-3">
                        <i className="material-icons">
                            add
                        </i>
                    </button>
				</Link>
			</div>
		);
	}
=======
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
>>>>>>> 293110f4d54bfd7c396e4f5771d273550bcad2d1
}

function mapStateToProps(state) {
	return {
		todos: state.todos.all,
		background: state.background.background
	};
}

export default connect(mapStateToProps, { getAll })(TodoList);
