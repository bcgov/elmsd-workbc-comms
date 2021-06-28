import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import ComposeEmail from './Components/Email/ComposeEmail'
import PrivateRoute from './routes/PrivateRoute'
import SuccessEmail from './Components/Email/SuccessEmail'
import SuccessDraft from './Components/Email/SuccessDraft'
import Drafts from './Components/Drafts/Drafts'
import SentEmails from './Components/Sent/SentEmails'


function Main() {
    return (
        
        <main role="main">
                <Switch>
                    <PrivateRoute component={ComposeEmail} roles={['comms']} path="/sendEmail" />
                    <PrivateRoute component={SuccessEmail} roles={['comms']} path="/successEmail"   />
                    <PrivateRoute component={SuccessDraft} roles={['comms']} path="/successDraft"   />
                    <PrivateRoute component={Drafts} roles={['comms']} path="/drafts"   />
                    <PrivateRoute component={SentEmails} roles={['comms']} path="/sentEmails"   />
                    <Route exact path="/" component={Home} />
                </Switch>
        </main>
    )
    
}

export default Main