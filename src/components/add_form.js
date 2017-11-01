import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { addTodo, changeBackground } from '../actions/index';
import { connect } from 'react-redux';
import BackgroundPattern from './imgs/background_pattern';

class AddForm extends Component {

    handleAddItem(vals) {
        this.props.addTodo(vals).then(() => {
            this.props.history.push('/');
        });
    }

    changeBackground() {
        this.props.changeBackground(Math.floor(Math.random() * 22))
    }

    renderInput({ input, label, type, meta: { touched, error } }) {
        const hasError = touched && error;
        const noError = touched && !error;
        return (
            <div className={`form-group ${hasError ? 'has-danger' : ''} ${noError ? 'has-success' : ''} text-left`}>
                <label className="col-form-label">{label}</label>
                <input {...input} type={ type ? type : 'text'} className="form-control form-control-danger form-control-success"/>
                <div className="form-control-feedback">{hasError}</div>
            </div>
        )
    }

    render() {
        const { handleSubmit, reset } = this.props;
        return (
            <div className="mt-5 text-left" style={{position: "relative"}}>
                <BackgroundPattern index={this.props.background} />
                <Link to="/" className="btn btn-sm btn-primary" style={{position: "absolute"}}>Back</Link>
                <div className="justify-content-center d-flex">
                    <button onClick={() => this.changeBackground()} className="mb-4 btn btn-lg btn-secondary" style={{fontFamily: "Oswald"}}>
                        ADD ITEM
                    </button>
                </div>
                <form className="form-group" onSubmit={handleSubmit((vals) => (this.handleAddItem(vals)))}>
                    <Field name="title" component={this.renderInput} label="Title:"/>
                    <Field name="details" component={this.renderInput} label="Details:"/>
                    <button className="btn btn-success my-3 mr-3">Add Item</button>
                    <button type="button" className="btn btn-danger my-3" onClick={reset}>Reset</button>
                </form>
            </div>
        )
    }
}

function validate(vals) {
    const errors = {};
    if (!vals.title) {
        errors.title = 'Please Enter A Title';
    }
    if (!vals.details) {
        errors.details = 'Please Enter Some Details';
    }
    return errors;
}

AddForm = reduxForm({
    form : 'add-item',
    validate
})(AddForm);

function mapStateToProps(state) {
    return {
        background: state.background.background
    }
}

export default connect(mapStateToProps, {addTodo, changeBackground})(AddForm);