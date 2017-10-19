/***************************************
 ** O-rizon development
 ** Created by Maxime Parriaux
 ** 10/18/17 - 18:27
 ** Home.js
 ** 2017 - All rights reserved
 ***************************************/

import React from 'react'

class Home extends React.Component {
    render() {
        return (
            <div className="home content">
                <h1>Welcome</h1>
                <section>
                    <h3>Hello world!</h3>
                    <p>
                        Hi, my name is Maxime Parriaux and I'm a software developer and a computer
                        science student from Strasbourg, France.
                        <br/>
                        This is my personnal website where you can learn a bit more about me.
                    </p>
                    <h3>About me</h3>
                    <p>
                        I am currently following a computer science cursus at EPITECH and
                        i'm trying to specialize in Web development.
                        <br/>
                        Interested in personal development, I enjoy the Open-Source mindset
                        and try to make the best of it.
                        <br/>
                        My tool of choice are Javascript and React eco-system, I'm interested by
                        FullStack development, and so I try to keep it up with lot of
                        framework.<br/>
                        Besides CS stuff, I like to discuss about science, psychology, play music
                        (guitar, piano, ...), drink coffee and challenge myself.
                    </p>
                </section>
                <hr/>
                <h1>Resume</h1>
                <section>
                    <h3>Skills</h3>

                    <ul>
                        <li>
                            JavaScript - React, Redux, Express.js, Node.js, Meteor.js
                        </li>
                        <li>
                            Python - Django, TensorFlow
                        </li>
                        <li>
                            Linux - Command line, scripting
                        </li>
                        <li>
                            Databases - MongoDB, MariaDB
                        </li>
                        <li>
                            Languages - C, C++, C#, Java, OCaml
                        </li>
                    </ul>

                    <h3>Work Experiences</h3>
                    <ul>
                        <li>
                            Avril 2016 - August 2017 - Web developer at 4JS, Strasbourg, France
                        </li>
                        <li>
                            Oct. 2015 - Mars 2016 - FullStack developer at Whitequest, Erstein,
                            France
                        </li>
                    </ul>
                    <h3>Prizes</h3>
                    <ul>
                        <li>
                            Nov. 2016 - Won Startup Weekend Strasbourg with Ethikey
                        </li>
                    </ul>
                    <h3>
                        Education
                    </h3>
                    <ul>
                        <li>
                            2015-2019 - EPITECH Strasbourg, Master degree in Computer Science
                        </li>
                        <li>
                            2013-2015 - BTS Jules Haag Besançon, 2 years Computer Science degree
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Home