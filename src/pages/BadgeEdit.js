import React, { Component, Fragment } from 'react';
import './styles/BadgeEdit.css';

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import header from '../images/platziconf-logo.svg';
import api from '../api'

class BadgeEdit extends Component {

    state = { 
        loading: true, 
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    };
    
    componentDidMount() {
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({loading: true, error: null})
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading: false, form: data})
        } catch(error){
            this.setState({loading: false, error: error})
        }
    }

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

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null})

        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({ loading: false})
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error})
        }
    }

    render() {
        if(this.state.loading){
            return <PageLoading/>
        }

        return (
            <Fragment>
                <div className="BadgeEdit_hero">
                    <img className="BadgeEdit_hero-image img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'First Name'} 
                                lastName={this.state.form.lastName || 'Last Name'} 
                                twitter={this.state.form.twitter || 'Twitter'} 
                                jobTitle={this.state.form.jobTitle || 'Job title'}
                                email={this.state.form.email || 'E-mail'} 
                                avatarUrl={this.state.form.avatarUrl}
                            />
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm 
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default BadgeEdit;