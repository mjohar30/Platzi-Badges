import React, { Component } from 'react';

import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar'

class Badge extends Component {
    render() {
        return (
            <div className="badge">
               <div className="badge_header">
                   <img src={confLogo} alt="Logo de la conferencia"/>
               </div>
               <div className="badge_section-name">
                   <Gravatar
                    className="Badge__avatar"
                    email={this.props.email}
                    alt="Avatar"
                   />
                   <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
               </div>
               <div className="badge_section-info">
                   <h3>{this.props.jobTitle}</h3>
                   <div>@{this.props.twitter}</div>
               </div>
               <div className="badge_footer">#PlatziConf</div>
            </div>
        );
    }
}

export default Badge;