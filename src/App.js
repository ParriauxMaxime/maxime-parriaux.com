import './styles/main.css'

import React, {Component} from 'react'
import Header from './Header'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
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
                    <Route exact path="/" render={_ => <Redirect to="/home"/>}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/contact" component={Contact}/>
                </div>
            </BrowserRouter>
        )
    }
}

export class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            direction: null
        }
    }

    componentDidMount() {
        this.setState({direction: 'inside'})
    }

    componentWillUnmount() {
        this.setState({direction: 'outside'})
    }

    render() {
        return (<div className="main" style={{
            animation: '1.2s ease-out main-animation-' + this.state.direction
        }}>{props.children}</div>)
    }
}

export default App
