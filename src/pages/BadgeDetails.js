import React, { Component } from 'react';

import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'

class BadgeDetails extends Component {
    render() {
        return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo de la conferencia"/>
                            </div>
                            <div className="col-6 .BadgeDetails__hero-attendant-name">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeDetails;