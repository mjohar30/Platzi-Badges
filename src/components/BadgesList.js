import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import './styles/BadgesList.css'

class BadgesList extends Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <div className="card mb-3" key={badge.id}>
                            <div className="row no-gutters">
                              <div className="col-3">
                                <img src={badge.avatarUrl} className="card-img rounded-circle" alt={`Avatar de ${badge.firstName}`}/>
                              </div>
                              <div className="col-9">
                                <div className="card-body">
                                  <h5 className="card-title font-weight-bold">{badge.firstName} {badge.lastName}</h5>
                                  <a href={`https://twitter.com/${badge.twitter}`}>
                                      <FontAwesomeIcon icon={faTwitter}/> @{badge.twitter}
                                    </a>
                                  <p>{badge.jobTitle}</p>
                                </div>
                              </div>
                            </div>
                        </div>
                    )
                })}
            </ul>
        );
    }
}

export default BadgesList;