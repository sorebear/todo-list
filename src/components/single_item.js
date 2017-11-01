import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem, toggleComplete, deleteItem, changeBackground } from '../actions';
import { Link } from 'react-router-dom';
import imageArray from './imgs/image_object';
import BackgroundPattern from './imgs/background_pattern';
import './list_style.css';

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
                
                <div className="container">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-image">
                                <div className="card-image-overlay">
                                    <img 
                                        src={imageArray[Math.floor(Math.random() * imageArray.length)]} 
                                    />
                                </div>
                                <span className="card-title">{todo.title}</span>
                            </div>
                            <div className="card-content">
                                <p>{todo.details}</p>
                            </div>
                            <div className="card-action">
                                <a onClick={() => this.handleToggle()}>
                                    {todo.complete ? 'Mark Incomplete' : 'Mark Complete'}
                                </a>
                                <a 
                                    onClick={() => this.deleteSingleItem()} 
                                    style={{marginRight:0, marginLeft:"24px"}}
                                >
                                    Delete Item
                                </a>
                            </div>
                        </div>
                    </div>
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