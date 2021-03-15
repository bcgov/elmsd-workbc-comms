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
                    {console.log(keycloak)}
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
                                    <a href="/sendEmail" className="btn btn-lg btn-dark">Send Email</a>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            )
                :
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            }
        </div>
    )
}

export default Home;