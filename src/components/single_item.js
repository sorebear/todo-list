import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BackgroundPattern from './imgs/background_pattern';
import { getSingleItem, toggleComplete, deleteItem } from '../actions';
import imageArray from './imgs/image_object';
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
        const { todo } = this.props
        if (!todo) {
            return <h1>...Loading</h1>
        }
        return (
            <div className="mt-5" style={{position: "relative"}}>
                <BackgroundPattern index={this.props.background} />
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 center-block">
                        <div className="card">
                            <div className="card-image">
                                <div className="card-image-overlay">
                                    <Link to="/" 
                                        className={`btn-floating red z-depth-2 ${window.innerWidth > 568 ? 'btn-large' : ''}`} 
                                        style={{position: "absolute", left: "10px", top: "10px"}}
                                    >
                                        <i className="material-icons">
                                            arrow_back
                                        </i>
                                    </Link>
                                    <img src={this.itemImage} />
                                </div>
                                <span 
                                    className="card-title text-left"
                                    style={{textShadow: "0px 2px 2px black"}}
                                >
                                    {todo.title}
                                </span>
                            </div>
                            <div className="card-content">
                                <p className="text-left">{todo.details}</p>
                            </div>
                        </div>
                        <div className="center">
                            <button 
                                onClick={this.handleToggle.bind(this)}
                                type="button"
                                className={`btn-floating btn-large my-3 mr-3 ${todo.complete ? 'green' : 'grey'}`}
                            >
                                <i className="material-icons">
                                    check
                                </i>
                            </button>
                            <button 
                                onClick={this.deleteSingleItem.bind(this)}
                                className="btn-floating btn-large red my-3 mr-3"
                            >
                                <i className="material-icons">
                                    close
                                </i>
                            </button>
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

export default connect(mapStateToProps, {getSingleItem, toggleComplete, deleteItem})(SingleItem);