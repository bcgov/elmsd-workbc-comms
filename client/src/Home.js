import React from 'react'
import { useKeycloak } from '@react-keycloak/web'

function Home() {
    const { keycloak, initialized } = useKeycloak()
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>ELMSD Comms</h1>
                </div>
            </div>
            {initialized ? (
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            {!keycloak.authenticated ? 
                                <div>
                                    <p>Please login</p>
                                    <p><button type="button" className="btn btn-lg btn-primary" onClick={() => keycloak.login({ idpHint: 'idir' })}>Login</button><br /></p>
                                </div>
                                :
                                <div>
                                    <p>Welcome {keycloak.tokenParsed.given_name}</p>
                                    {keycloak.hasResourceRole("comms") ?
                                    <div>
                                        <a href="/sendEmail" className="btn btn-lg btn-dark">Send Email</a><br/><br/>
                                        <a href="/drafts" className="btn btn-lg btn-info">Saved Drafts</a><br/><br/>
                                        <a href="/sentEmails" className="btn btn-lg btn-info">Sent Emails</a>
                                    </div>
                                    :
                                        <p>You don't have any options. Unauthorized</p>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            )
                :
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }
        </div>
    )
}

export default Home;