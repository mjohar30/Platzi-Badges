import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Gravatar from '../components/Gravatar'
import './styles/BadgesList.css'

class BadgesList extends Component {
    render() {
      if (this.props.badges.length === 0){
        return (
          <div>
            <h3>No badges were found</h3>
            <Link className="btn btn-primary" to="/badges/new">
              Create new badge
            </Link>
          </div>
        )
      }

      return (
        <ul className="list-unstyled">
            {this.props.badges.map((badge) => {
                return (
                    <div className="card mb-3" key={badge.id}>
                      <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                        <div className="row no-gutters">
                          <div className="col-3">
                            <Gravatar className="card-img rounded-circle" email={badge.email} alt="Avatar"/>
                          </div>
                          <div className="col-9">
                            <div className="card-body">
                              <h5 className="card-title font-weight-bold">{badge.firstName} {badge.lastName}</h5>
                              <Link href={`https://twitter.com/${badge.twitter}`}>
                                <FontAwesomeIcon icon={faTwitter}/> @{badge.twitter}
                              </Link>
                              <p>{badge.jobTitle}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                )
            })}
        </ul>
      );
    }
}

export default BadgesList;