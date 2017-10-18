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

class Header extends Component {
    render() {
        return (
            <div className="App-heading App-container">
                <div className="Title App-flex">
                    <p>Maxime Parriaux</p>
                </div>
                <div className="Flex-row Links">
                    <SocialIcon className="icon" url="https://twitter.com/MaximeParriaux/"/>
                    <SocialIcon className="icon" url="https://github.com/ParriauxMaxime/"/>
                </div>
                <div className="Flex-row Links">
                    <Link to="/home" activeClassName={'selected'}>Home</Link>
                    <Link to="/projects" activeClassName={'selected'}>Projects</Link>
                    <Link to="/contact" activeClassName={'selected'}>Contact</Link>
                </div>
            </div>
        )
    }
}

export default Header

