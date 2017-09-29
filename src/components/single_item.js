import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem, toggleComplete, deleteItem } from '../actions';
import { Link } from 'react-router-dom';

class SingleItem extends Component {

    componentWillMount() {
        this.props.getSingleItem(this.props.match.params.id)     
    }

    handleToggle() {
        this.props.toggleComplete(this.props.match.params.id).then(() => {
            this.props.history.push('/');
        });
    }

    deleteSingleItem() {
        this.props.deleteItem(this.props.match.params.id).then(() => {
            this.props.history.push('/');
        });
    }

    render() {
        console.log("Single Item Props: ", this.props)
        const { todo } = this.props
        if (!todo) {
            return <h1>...Loading</h1>
        }
        return (
            <div>
                <h1 className="mt-5 mb-3">{todo.title}</h1>
                <Link to="/">
                    <button className="btn btn-outline-info">Back</button>
                </Link>
                <div className="my-5">
                    <h5>Details:</h5>
                    <p>{todo.details}</p>
                </div>
                <button className={`mr-5 btn btn-outline-${ todo.complete ? 'danger' : 'success'}`} onClick={() => this.handleToggle()}>
                    { todo.complete ? 'Mark Incomplete' : 'Complete Task'}
                </button>
                <button className={`btn btn-outline-danger`} onClick={() => this.deleteSingleItem()}>Delete Item</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todos.single
    }
}

export default connect(mapStateToProps, {getSingleItem, toggleComplete, deleteItem})(SingleItem);