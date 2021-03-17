import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import ComposeEmail from './Components/Email/ComposeEmail'
import {PrivateRoute} from './routes/PrivateRoute'


function Main() {
    return (
        <main role="main">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <PrivateRoute component={ComposeEmail} roles={['comms']} path="/sendEmail"   />
                </Switch>
            </Router>
        </main>
    )
    
}

export default Main