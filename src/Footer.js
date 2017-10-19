/***************************************
 ** O-rizon development
 ** Created by Maxime Parriaux
 ** 10/19/17 - 17:09
 ** Footer.js
 ** 2017 - All rights reserved
 ***************************************/

import React from 'react'
import {SocialIcon} from 'react-social-icons'
import FaCamera from 'react-icons/lib/fa/camera'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="footer">
                <footer>
                    <div className="photoName">
                        Photo <span className="margin-8"><FaCamera/></span> CC0 Creative Commons
                    </div>
                    <div className="Flex-row Social">
                        <SocialIcon url="https://twitter.com/MaximeParriaux/"/>
                        <SocialIcon url="https://github.com/ParriauxMaxime/"/>
                    </div>
                    <div>
                        © 2017 Maxime Parriaux
                    </div>
                </footer>
            </section>
        )
    }
}

export default Footer
