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
                <h1>
                    <Link to="/">
                        <i className="fa fa-fast-backward" style={{color: "grey"}}></i> 
                    </Link>
                    &nbsp;
                    {todo.title}
                </h1>
                <p style={{color: "lightgrey"}}>{this.props.match.params.id}</p>
                <h5>{todo.details}</h5>
                <button className={`btn btn-outline-${ todo.complete ? 'danger' : 'success'}`} onClick={() => this.handleToggle()}>
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