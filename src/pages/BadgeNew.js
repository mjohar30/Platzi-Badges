import React, { Component, Fragment } from 'react';
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';

class BadgeNew extends Component {

    state = { 
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    };
    
    handleChange = (e) => {
        // const nextForm = this.state.form
        // nextForm[e.target.name] = e.target.value
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <Fragment>
                <div className="BadgeNew_hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName} 
                            twitter={this.state.form.twitter} 
                            jobTitle={this.state.form.jobTitle}
                            email={this.state.form.email} 
                            avatar="https://pbs.twimg.com/profile_images/1093776339142930436/-3IgA4Uk_400x400.jpg" />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange}
                            formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default BadgeNew;