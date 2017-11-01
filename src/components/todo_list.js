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
}

function mapStateToProps(state) {
	return {
		todos: state.todos.all,
		background: state.background.background
	};
}

export default connect(mapStateToProps, { getAll })(TodoList);
