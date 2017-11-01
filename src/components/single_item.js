import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem, toggleComplete, deleteItem, changeBackground } from '../actions';
import { Link } from 'react-router-dom';
import imageArray from './imgs/image_object';
import BackgroundPattern from './imgs/background_pattern';
import './list_style.css';

class SingleItem extends Component {
    constructor(props) {
        super(props);
        this.itemImage = imageArray[Math.floor(Math.random() * imageArray.length)];
    }
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
<<<<<<< HEAD
            <div className="mt-5" style={{position: "relative"}}>
                <BackgroundPattern index={this.props.background} />
                <div className="container">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-image">
                                <div className="card-image-overlay">
                                    <Link to="/" 
                                        className="btn-floating btn-large red z-depth-2" 
                                        style={{position: "absolute", left: "5px", top: "5px"}}
                                    >
                                        <i className="material-icons">
                                            arrow_back
                                        </i>
                                    </Link>
                                    <img src={this.itemImage} />
                                </div>
                                <span 
                                    className="card-title"
                                    style={{textShadow: "0px 2px 2px black"}}
                                >
                                    {todo.title}
                                </span>
                            </div>
                            <div className="card-content">
                                <p className="text-left">{todo.details}</p>
                            </div>
                            <div className="card-action">
                                <a 
                                    onClick={() => this.handleToggle()}
                                    className="red-text"
                                >
                                    {todo.complete ? 'Mark Incomplete' : 'Mark Complete'}
                                </a>
                                <a 
                                    onClick={() => this.deleteSingleItem()} 
                                    className="red-text"
                                    style={{marginRight:0, marginLeft:"24px"}}
                                >
                                    Delete Item
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
=======
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
>>>>>>> 293110f4d54bfd7c396e4f5771d273550bcad2d1
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