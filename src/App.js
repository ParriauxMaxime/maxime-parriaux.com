import './styles/main.css'

import React, {Component} from 'react'
import Header from './Header'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'

class App extends Component {
    render() {
        return (

            <BrowserRouter basename={'/'}>
                <div className="App">
                    <div className="background"/>
                    <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/contact" component={Contact}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
