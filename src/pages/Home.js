import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'
import './styles/Home.css'
import LogoPlatziConf from '../images/platziconf-logo.svg'
import Astronauts from '../images/astronauts.svg'

function Home(){
    return (
        <Fragment>
            <div className="hero">
                <div className="hero__container">
                    <img src={LogoPlatziConf} alt="Logo de PlatziConf"/>
                    <h1>Print your Badges</h1>
                    <p>The easiest way to manage your conference</p>
                    <Link to="/badges" className="btn btn-primary">
                            Start now
                    </Link>
                </div>
                <div className="hero__container">
                    <img src={Astronauts} alt="Astronauts" srcset=""/>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;