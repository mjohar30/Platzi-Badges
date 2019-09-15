import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import confLogo from '../images/badge-header.svg'
import api from '../api'
import MiniLoader from '../components/MiniLoader';


class Badges extends Component {

    constructor(props){
        super(props)
        console.log('1. Constructor()')

        this.state = {
            loading: true,
            error: null,
            data: undefined
        }
    }

    componentDidMount(){
        console.log('3. componentDidMount()')
        this.fetchData();
        this.intervalId = setInterval(this.fetchData, 5000)
        // this.timeoutId = setTimeout(() => {
        //     this.setState({
        //         loading: true,
        //         error: null,
        //         data: undefined
        //     })
        // }, 3000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    fetchData =  async () => {
        this.setState({loading: true, error: null})
        try {
            const data = await api.badges.list();
            this.setState({loading: false, data: data})
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

    // componentDidUpdate(prevProps, prevState){
    //     console.log('5. ComponentDidUpdate')
    //     console.log({
    //         prevProps: prevProps,
    //         prevState: prevState
    //     })
    //     console.log({
    //         props: this.props, 
    //         state: this.state
    //     })
    // }

    // componentWillUnmount(){
    //     console.log('6. componentWillUnmount')
    //     clearTimeout(this.timeoutId)
    // }

    render() {
        if (this.state.loading === true && !this.state.data) {
            return <PageLoading/>;
        }
        if (this.state.error) {
            return <PageError error={this.state.error} />
        }
        
        console.log('2/4. render()')
        return (
            <Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img 
                                className="Badges_conf-logo"
                                src={confLogo}
                                alt="Conf logo"
                            />
                        </div>
                    </div>
                </div>
                <div className="Badge__container container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>
                            {this.state.loading && <MiniLoader/>}
                        </div>
                    </div>
                </div> 
            </Fragment>
        );
    }
}

export default Badges;