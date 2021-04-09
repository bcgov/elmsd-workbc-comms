import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import ComposeEmail from './Components/Email/ComposeEmail'
import PrivateRoute from './routes/PrivateRoute'
import SuccessEmail from './Components/Email/SuccessEmail'


function Main() {
    return (
        
        <main role="main">
                <Switch>
                    <PrivateRoute component={ComposeEmail} roles={['comms']} path="/sendEmail" />
                    <PrivateRoute component={SuccessEmail} roles={['comms']} path="/successEmail"   />
                    <Route exact path="/" component={Home} />
                </Switch>
        </main>
    )
    
}

export default Main