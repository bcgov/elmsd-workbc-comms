import React, { useState } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import { FORM_URL } from '../../constants/form'
import { EmailValidationSchema } from './EmailValidationSchema'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { ContentState, convertFromHTML, EditorState } from 'draft-js';
import {RichEditor} from '../../utils/RichEditor'
import {stateToHTML} from 'draft-js-export-html'
import ImageSelector from './ImageSelector'
import { useKeycloak } from '@react-keycloak/web'
import htmlToDraft from 'html-to-draftjs';

function ComposeEmail() {
    const h = useHistory()
    const { keycloak, initialized } = useKeycloak()
    const [show, setShow] = useState(false);
    const [fetchPreview, setFetchPreview] = useState(false);
    const handleClose = () => {
        setShow(false);
        setFetchPreview(false);
    }
    const [prevEmail, setPrevEmail] = useState({__html: ''})
    const handleShow = () => setShow(true);
    const [draftSaved, setDraftSaved] = useState(false)
    const [draftSaving, setDraftSaving] = useState(false)
    const [draftID, setDraftID] = useState('')

    let initialValues = {}

    if (h.location.state !== undefined && h.location.state.emailTopics){
        let eT = []
        h.location.state.emailTopics.forEach((e,i) => {
            console.log(e)
            let blocksFromHTML = convertFromHTML(e.topicContent)
            let eState = ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap
            )
            eT.push({
                topicHeading: e.topicHeading,
                topicContent: EditorState.createWithContent(eState),
                topicLink: e.topicLink,
                hasImage: e.hasImage,
                topicImage: e.topicImage,                
            })
        }) 

        initialValues = {
            _user: keycloak.authenticated ? keycloak.tokenParsed.preferred_username : '',
            emailTo: h.location.state.emailTo,
            emailCC: h.location.state.emailCC,
            emailBCC: h.location.state.emailBCC,
            emailSubject: h.location.state.emailSubject,
            emailHeading: h.location.state.emailHeading,
            aboveTOC: h.location.state.aboveTOC,
            belowTOC: h.location.state.belowTOC,
            emailTopics: eT
        }        
    } else {
        initialValues = {
            _user: keycloak.authenticated ? keycloak.tokenParsed.preferred_username : '',
            emailTo: '',
            emailCC: '',
            emailBCC: '',
            emailSubject: '',
            emailHeading: '',
            aboveTOC: '',
            belowTOC: '',
            emailTopics: [
                {
                    topicHeading: '',
                    topicContent: EditorState.createEmpty(),
                    topicLink: '',
                    hasImage: false,
                    topicImage: '',
                }
            ]
        }
    }

    const getHtml = (values) => {
        console.log("IN GETHTML")
        if (show && !fetchPreview) {
            setFetchPreview(true)
            let vC = JSON.parse(JSON.stringify(values))
            console.log(vC)
            let eT = vC.emailTopics
            eT.forEach((e, i) => {
                e.topicContent = stateToHTML(values.emailTopics[i].topicContent.getCurrentContent())
            })
            fetch(FORM_URL.previewForm, {
                method: "POST",
                credentials: "include",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(vC),
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
        } else if (!show){
            setFetchPreview(false)
        }
    }

    const saveDraft = (values) => {
        setDraftSaving(true)
        if (!draftSaved){
            let vC = JSON.parse(JSON.stringify(values))
            console.log(vC)
            let eT = vC.emailTopics
            eT.forEach((e, i) => {
                e.topicContent = stateToHTML(values.emailTopics[i].topicContent.getCurrentContent())
            })
            fetch(FORM_URL.saveDraft, {
                method: "POST",
                credentials: "include",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(vC),
            })
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.draftErr){

                    } else if (result.ok){
                        setDraftSaved(true)
                        setDraftID(result.id)
                        h.push('/successDraft')
                    }
                },
                (error) => {
                    console.log(error)
                }
            )
        }
        setDraftSaving(false)
    }

    const updateDraft = (values) => {
        setDraftSaving(true)
        /*
        if (draftSaved && draftID !== ''){
            let vC = JSON.parse(JSON.stringify(values))
            console.log(vC)
            let eT = vC.emailTopics
            eT.forEach((e, i) => {
                e.topicContent = stateToHTML(values.emailTopics[i].topicContent.getCurrentContent())
            })
            fetch(FORM_URL.saveDraft, {
                method: "POST",
                credentials: "include",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(vC),
            })
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.draftErr){

                    } else if (result.ok){
                        setDraftSaved(true)
                        setDraftID(result.id)
                    }
                },
                (error) => {
                    console.log(error)
                }
            )
        }
        */
        setDraftSaving(false)
    }

    return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>WorkBC This Week Email Sender</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, { resetForm, setErrors, setStatus, setSubmitting }) => {
                        let vC = JSON.parse(JSON.stringify(values))
                        console.log(vC)
                        let eT = vC.emailTopics
                        eT.forEach((e, i) => {
                            e.topicContent = stateToHTML(values.emailTopics[i].topicContent.getCurrentContent())
                        })
                        fetch(FORM_URL.mainForm, {
                            method: "POST",
                            credentials: 'include',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(vC),
                        })
                        .then(res => res.json())
                        .then(
                            (resp) => {
                                console.log(resp)
                                if (resp.err) {
                                    setErrors(resp.err)
                                    setSubmitting(false)
                                }
                                else {
                                    setSubmitting(false)
                                    h.push('/successEmail')
                                }
                            }
                        )
                    }}
                    validationSchema={EmailValidationSchema}
                >
                    {({ values, isSubmitting, setFieldValue, handleBlur, handleChange, errors }) => (
                        <Form>
                            {console.log(values)}
                            {console.log(errors)}
                            <FieldArray name="emailTopics">
                                {({ insert, remove, push, }) => (
                                    <div>
                                        {console.log(h)}
                                        <h2>Email Fields</h2>
                                        <div className="form-group row">
                                            <label className="col-form-label control-label col-sm-2" htmlFor="emailTo">To:</label>
                                            <Field
                                                name="emailTo"
                                                placeholder="someone@someone.com;someone@else.com"
                                                type="text"
                                                className="col-sm-10 form-control"
                                            />
                                            <ErrorMessage
                                                name="emailTo"
                                                component="div"
                                                className="field-error"
                                            />
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label control-label col-sm-2" htmlFor="emailCC">CC:</label>
                                            <Field
                                                name="emailCC"
                                                placeholder="someone@someone.com;someone@else.com"
                                                type="text"
                                                className="col-sm-10 form-control"
                                            />
                                            <ErrorMessage
                                                name="emailCC"
                                                component="div"
                                                className="field-error"
                                            />
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label control-label col-sm-2" htmlFor="emailBCC">BCC:</label>
                                            <Field
                                                name="emailBCC"
                                                placeholder="someone@someone.com;someone@else.com"
                                                type="text"
                                                className="col-sm-10 form-control"
                                            />
                                            <ErrorMessage
                                                name="emailBCC"
                                                component="div"
                                                className="field-error"
                                            />
                                        </div>
                                        { (values.emailTo === "" && values.emailBCC === "") &&
                                        <div className="form-grouo">
                                            <p>Please enter at least one of To or BCC</p>
                                        </div>
                                        }
                                        <div className="form-group row">
                                            <label className="col-form-label control-label col-sm-2" htmlFor="emailSubject">Subject:</label>
                                            <Field
                                                name="emailSubject"
                                                placeholder="WorkBC This Week"
                                                type="text"
                                                className="col-sm-10 form-control"
                                            />
                                            <ErrorMessage
                                                name="emailSubject"
                                                component="div"
                                                className="field-error"
                                            />
                                        </div>
                                        <h2>Template Fields</h2>
                                        {/*
                                        <div className="form-group row">
                                            <label className="col-form-label control-label col-sm-2" htmlFor="emailHeading">Email Heading:</label>
                                            <Field
                                                name="emailHeading"
                                                placeholder="WorkBC This Week"
                                                type="text"
                                                className="col-sm-10 form-control"
                                            />
                                            <ErrorMessage
                                                name="emailHeading"
                                                component="div"
                                                className="field-error"
                                            />
                                        </div>
                                        */}
                                        <div className="form-group row">
                                            <label className="col-form-label control-label col-sm-2" htmlFor="aboveTOC">Above TOC:</label>
                                            <Field
                                                name="aboveTOC"
                                                placeholder="This week..."
                                                type="text"
                                                className="col-sm-10 form-control"
                                            />
                                            <ErrorMessage
                                                name="aboveTOC"
                                                component="div"
                                                className="field-error"
                                            />
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label control-label col-sm-2" htmlFor="belowTOC">Below TOC:</label>
                                            <Field
                                                name="belowTOC"
                                                placeholder="Something extra..."
                                                type="text"
                                                className="col-sm-10 form-control"
                                            />
                                            <ErrorMessage
                                                name="belowTOC"
                                                component="div"
                                                className="field-error"
                                            />
                                        </div>
                                        <h3>Topics</h3>
                                        {values.emailTopics.length > 0 &&
                                            values.emailTopics.map((emailTopics, index) => (
                                                <div key={index}>
                                                    {console.log(emailTopics)}
                                                    <hr></hr>
                                                    <div className="form-group">
                                                        <label className="col-form-label control-label" htmlFor={`emailTopics.${index}.topicHeading`}>Topic Heading</label>
                                                        <Field
                                                            name={`emailTopics.${index}.topicHeading`}
                                                            placeholder="Some topic"
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            name={`emailTopics.${index}.topicHeading`}
                                                            component="div"
                                                            className="field-error"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label control-label" htmlFor={`emailTopics.${index}.topicContent`}>Topic Content</label>
                                                        {/*
                                                        <Field
                                                            name={`emailTopics.${index}.topicContent`}
                                                            placeholder="Some text"
                                                            className="form-control"
                                                            as="textarea"
                                                            rows="4"
                                                        />
                                                        */}
                                                        <RichEditor
                                                            editorState={emailTopics.topicContent}
                                                            onChange={setFieldValue}
                                                            onBlur={handleBlur}
                                                            name={`emailTopics.${index}.topicContent`}
                                                        />
                                                        <ErrorMessage
                                                            name={`emailTopics.${index}.topicContent`}
                                                            component="div"
                                                            className="field-error"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label control-label" htmlFor={`emailTopics.${index}.topicLink`}>Topic Link</label>
                                                        <Field
                                                            name={`emailTopics.${index}.topicLink`}
                                                            placeholder="Some text"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage
                                                            name={`emailTopics.${index}.topicLink`}
                                                            component="div"
                                                            className="field-error"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="form-check">
                                                        <Field
                                                            type="checkbox"
                                                            name={`emailTopics.${index}.hasImage`}
                                                            placeholder="Some text"
                                                            className="form-check-input"
                                                            onChange={e => {
                                                                handleChange(e)
                                                                setFieldValue(`emailTopics.${index}.topicImage`, "")
                                                            }}
                                                        />
                                                        <label className="form-check-label control-label" htmlFor={`emailTopics.${index}.hasImage`}>Image?</label>
                                                        <ErrorMessage
                                                            name={`emailTopics.${index}.hasImage`}
                                                            component="div"
                                                            className="field-error"
                                                        />
                                                        </div>
                                                    </div>
                                                    {emailTopics.hasImage &&
                                                    <div className="form-group">
                                                        {ImageSelector(`emailTopics.${index}.topicImage`)}
                                                    </div>
                                                    }
                                                    <div className="form-group">
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary"
                                                            onClick={() => remove(index)}
                                                        >
                                                            Remove Above
                                                        </button>
                                                    </div>
                                                    <hr></hr>
                                                </div>
                                            ))}
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => push({ topicHeading: '', topicContent: EditorState.createEmpty(), topicLink: '', hasImage: false, topicImage: '' })}
                                        >
                                            Add Topic
                                        </button>
                                        <br></br>
                                        <br></br>
                                        {!draftSaved && 
                                        <div>
                                            <Button variant="secondary" onClick={() => {saveDraft(values)}}>
                                                Save Draft
                                            </Button>
                                            {draftSaving &&
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            }
                                            <br></br>
                                            <br></br>
                                        </div>
                                        }
                                        <Button variant="danger" onClick={handleShow}>
                                            Preview
                                        </Button>
                                        <Modal 
                                            show={show} 
                                            onHide={handleClose} 
                                            onEnter={() => {getHtml(values)}}
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
                                        <br></br>
                                        <br></br>                                        
                                        <button
                                            className="btn btn-success btn-block"
                                            type="submit"
                                            style={{ marginBottom: "2rem" }}
                                            disabled={isSubmitting || (values.emailTo === "" && values.emailBCC === "")}
                                        >
                                            {
                                                isSubmitting ?
                                                    <div>
                                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                 Submitting...
                                        </div>
                                                    :
                                                    "Submit"

                                            }

                                        </button>
                                    </div>
                                )}

                            </FieldArray>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    </div>
)
                                        }

export default withRouter(ComposeEmail)
