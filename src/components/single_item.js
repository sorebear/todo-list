import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem, toggleComplete, deleteItem, changeBackground } from '../actions';
import { Link } from 'react-router-dom';
import BackgroundPattern from './imgs/background_pattern';

class SingleItem extends Component {

    componentWillMount() {
        this.props.getSingleItem(this.props.match.params.id)     
    }

    changeBackground() {
        this.props.changeBackground(Math.floor(Math.random() * 22))
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
            <div className="mt-5" style={{position: "relative"}}>
                <BackgroundPattern index={this.props.background} />
                <Link to="/" className="btn btn-primary btn-sm" style={{position: "absolute", left: 0}}>Back</Link>
                <button onClick={() => this.changeBackground()} className="mb-5 btn btn-lg btn-secondary" style={{fontFamily: 'Oswald'}}>
                        LIST ITEM
                </button>
                <h1 className="">{todo.title}</h1>
                <h5 className="my-5"><em>{todo.details}</em></h5>
                <div className="d-flex justify-content-center">
                    <button className={`mr-3 btn btn-${ todo.complete ? 'danger' : 'success'}`} onClick={() => this.handleToggle()}>
                        { todo.complete ? 'Mark Incomplete' : 'Mark Complete'}
                    </button>
                    <button className={`btn btn-danger`} onClick={() => this.deleteSingleItem()}>Delete Item</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todos.single,
        background: state.background.background
    }
}

export default connect(mapStateToProps, {getSingleItem, toggleComplete, deleteItem, changeBackground})(SingleItem);