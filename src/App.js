import './styles/main.css'

import React, {Component} from 'react'
import Header from './Header'
import {BrowserRouter, HashRouter, Redirect, Route} from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'

class App extends Component {
    constructor(props) {
        super(props)
        this.main = null
        this.state = {

        }
    }

    onChangeRoute(oldLocation, newLocation) {
    }

    render() {
        return (

            <BrowserRouter basename={'/'}>
                <div className="App">
                    <div className="background"/>
                    <Header onChangeRoute={this.onChangeRoute.bind(this)}/>
                    <Main ref={ _ => { this.main = _ }}>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/contact" component={Contact} />
                        <Route path="/*" render={_ => <Redirect to="/home"/>}/>
                    </Main>
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
    }

    render() {
        return (<div className="main">{this.props.children}</div>)
    }
}

export default App
