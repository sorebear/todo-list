import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteItem } from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
    deleteSingleItem() {
        console.log("Delete Item: ", this.props)
        this.props.deleteItem(this.props.todoItem['_id']);
    }
    render() {
        const { title, complete, _id } = this.props.todoItem;
        return (
            <li className={`list-group-item text-${complete ? 'success' : 'danger'} justify-content-between`}>
                <Link to={`/view-item/${_id}`} className={complete ? 'text-success' : 'text-danger'}>
                    {title}
                </Link>
                <Link to={`/view-item/${_id}`}>
                    <button className="btn btn-sm btn-primary">
                        More Info
                    </button>
                </Link>
                {/* <i className="fa fa-times" onClick={() => this.deleteSingleItem()}></i> */}
            </li>
        )
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todos.single,
    }
}

export default connect(mapStateToProps, { deleteItem })(ListItem);
