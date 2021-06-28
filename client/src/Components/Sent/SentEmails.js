import React, { useEffect, useState } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import { FORM_URL } from '../../constants/form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { stateToHTML } from 'draft-js-export-html'
import { useKeycloak } from '@react-keycloak/web'
import Table from '../../utils/Table'

function SentEmails() {
    const h = useHistory()
    const { keycloak, initialized } = useKeycloak()
    const [show, setShow] = useState(false);
    const [fetchPreview, setFetchPreview] = useState(false);
    const handleClose = () => setShow(false);
    const [prevEmail, setPrevEmail] = useState({ __html: '' })
    
    const [isLoading, setIsLoading] = useState(true)
    const [savedDrafts, setSavedDrafts] = useState({})
    const [currIndex, setCurrIndex] = useState(-1)

    const handleShow = (i) => {
        console.log(i)
        setShow(true) 
        setCurrIndex(i)
    }

    const schema =
        [
            {
                "_id": "ID",
                "_user": "User",
                "emailTo": "To",
                "emailCC": "CC",
                "emailBCC": "BCC",
                "emailSubject": "Subject",
                "resend": "Resend",
                "preview": "Preview",
                //"delete": "Delete"
            }
        ]


    useEffect(() => {
        getSent()
    }, [])


    const handleResend = (i) => {
        h.push('/sendEmail', savedDrafts.results[i])
    }

    const getHtml = () => {
        console.log("IN GETHTML")
        if (show) {
            console.log("fetching")
            setFetchPreview(true)
            fetch(FORM_URL.previewForm, {
                method: "POST",
                credentials: "include",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(savedDrafts.results[currIndex]),
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result)
                        setPrevEmail(result)
                    },
                    (error) => {
                        console.log(error)
                    }
                )
        } else if (!show) {
            setFetchPreview(false)
        }
    }

    const getSent = async () => {
        if (isLoading) {
            await fetch(FORM_URL.getSent, {
                method: "GET",
                credentials: "include",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result)
                        var r = []
                        result.results.forEach((e, i) => {
                            r.push(e)
                            r[i]["resend"] = i
                            r[i]["preview"] = i
                            r[i]["delete"] = i
                        })
                        console.log(r)
                        setSavedDrafts(result)
                        setIsLoading(false)
                    },
                    (error) => {
                        console.log(error)
                    }
                )
        }

    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>WorkBC This Week - Sent Emails</h1>
                    {console.log(show)}
                    {
                        isLoading ?
                            <div>
                                Loading...
                            </div>
                            :
                            <div>
                                <Table 
                                    headers={schema} 
                                    rows={savedDrafts.results} 
                                    handleShow={handleShow} 
                                    handleResend={handleResend}
                                />
                            </div>
                    }
                    <Modal
                        show={show}
                        onHide={handleClose}
                        onEnter={() => { getHtml() }}
                        size="lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Preview Email</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div dangerouslySetInnerHTML={prevEmail}>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SentEmails)