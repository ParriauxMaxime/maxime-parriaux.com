/***************************************
 ** O-rizon development
 ** Created by Maxime Parriaux
 ** 10/18/17 - 18:07
 ** Head.js.js
 ** 2017 - All rights reserved
 ***************************************/

import React, {Component} from 'react'
import {SocialIcon} from 'react-social-icons'
import {NavLink as Link} from 'react-router-dom'

const CustomLink = (props) => {
    const oldLocation = window.location.pathname,
        newLocation = props.to,
        onChangeRoute = props.onChangeRoute,
        name = newLocation!== '/' ?  newLocation : '/home'
    return (
        <Link to={newLocation}
              onClick={() => onChangeRoute(oldLocation, newLocation)}
              activeClassName={'selected'}
        >
            {name[1].toUpperCase() + name.slice(2)}
        </Link>
    )
}

class Header extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="App-heading App-container">
                <div className="Title App-flex">
                    <h3>Maxime Parriaux</h3>
                </div>
                <div className="Flex-row Social">
                    <SocialIcon url="https://twitter.com/MaximeParriaux/"/>
                    <SocialIcon url="https://github.com/ParriauxMaxime/"/>
                </div>
                <div className="Flex-row Links">
                    <CustomLink onChangeRoute={this.props.onChangeRoute} to="/"/>
                    <CustomLink onChangeRoute={this.props.onChangeRoute} to="/projects"/>
                    <CustomLink onChangeRoute={this.props.onChangeRoute} to="/contact"/>
                </div>
            </div>
        )
    }
}

export default Header

