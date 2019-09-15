import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Gravatar from '../components/Gravatar'
import './styles/BadgesList.css'

function useSearchBadges(badges){
  const [query, setQuery] = React.useState('')
  const [filteredBadges, setFilteredBadges] = React.useState(badges)

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
      .toLowerCase()
      .includes(query.toLowerCase())
    })
    setFilteredBadges(result)
  }, [badges, query])

  return {query, setQuery, filteredBadges}
}

function BadgesList(props){
  const badges = props.badges

  const {query, setQuery, filteredBadges} = useSearchBadges(badges)
    

  if (filteredBadges.length === 0){
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input 
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
            />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    )
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input 
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
      </div>
      <ul className="list-unstyled">
          {filteredBadges.map((badge) => {
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
    </div>
  );
}

export default BadgesList;