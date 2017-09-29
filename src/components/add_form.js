import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { addTodo } from '../actions/index';
import { connect } from 'react-redux';

class AddForm extends Component {

    handleAddItem(vals) {
        this.props.addTodo(vals).then(() => {
            this.props.history.push('/');
        });
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
        console.log("Props at Render: ", this.props)
        const { handleSubmit, reset } = this.props;
        return (
            <div>
                <h3 className="my-3">Add Todo Item</h3>
                <form className="form-group" onSubmit={handleSubmit((vals) => (this.handleAddItem(vals)))}>
                    <Link to="/" className="btn btn-outline-info my-3">Back</Link>
                    <Field name="title" component={this.renderInput} label="Title:"/>
                    <Field name="details" component={this.renderInput} label="Details:"/>
                    <button className="btn btn-outline-info my-3 mr-3">Add Item</button>
                    <button type="button" className="btn btn-outline-danger" onClick={reset}>Reset</button>
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


export default connect(null, {addTodo})(AddForm);