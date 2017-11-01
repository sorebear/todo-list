import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteItem, getAll, toggleComplete } from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
    deleteSingleItem() {
        this.props.deleteItem(this.props.todoItem['_id']).then(this.props.getAll);
    }
    completeSingleItem() {
        this.props.toggleComplete(this.props.todoItem['_id']).then(this.props.getAll)
    }
    render() {
        const { title, complete, _id } = this.props.todoItem;
        return (
            <li 
                className={`collection-item align-items-center ${complete ? 'grey' : ''} lighten-4`}>
                <div className="text-left">  
                    <i 
                        className={`material-icons ${complete ? 'green' : 'grey'}-text`}
                        style={{paddingRight: "20px"}} 
                        onClick={() => this.completeSingleItem()}
                    >
                        check_circle
                    </i>
                    <Link 
                        to={`/view-item/${_id}`} 
                        style={{textDecoration: complete ? "line-through" : "none"}}>
                        {title}
                    </Link>
                    <div 
                        className="secondary-content" 
                        onClick={() => this.deleteSingleItem()}
                    >
                        <i className="material-icons secondary-content red-text">
                            cancel
                        </i>
                    </div>
                </div>
            </li>
        )
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todos.single,
    }
}

export default connect(mapStateToProps, { deleteItem, toggleComplete, getAll })(ListItem);
