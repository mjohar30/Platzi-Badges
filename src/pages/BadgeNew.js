import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew_hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName="Mario" 
                            lastName="González"
                            twitter="JoharGP"
                            jobTitle="FullStack Javascript"
                            avatar="https://pbs.twimg.com/profile_images/1093776339142930436/-3IgA4Uk_400x400.jpg" />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;