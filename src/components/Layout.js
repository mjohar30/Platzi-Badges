import React, { Fragment } from 'react';
import Navbar from './Navbar';

function Layout (props){
    return (
        <Fragment>
            <Navbar/>
            {props.children}
        </Fragment>
    )
}

export default Layout;