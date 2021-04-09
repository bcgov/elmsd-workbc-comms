import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import { FORM_URL } from '../../constants/form'
import { EmailValidationSchema } from './EmailValidationSchema'
import { useKeycloak } from '@react-keycloak/web'

const initialValues = {
    emailTo: '',
    emailCC: '',
    emailBCC: '',
    emailSubject: '',
    emailHeading: '',
    emailTopics: [
        {
            topicHeading: '',
            topicContent: '',
            topicLink: '',
        }
    ]
}



function ComposeEmail() {
    const history = useHistory()
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>WorkBC This Week Email Sender</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, { resetForm, setErrors, setStatus, setSubmitting }) => {
                        fetch(FORM_URL.mainForm, {
                            method: "POST",
                            credentials: 'include',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(values),
                        })
                        .then(res => res.json())
                        .then(
                            (resp) => {
                                if (resp.err) {
                                    setErrors(resp.err)
                                    setSubmitting(false)
                                }
                                else {
                                    setSubmitting(false)
                                    history.push('/successEmail', values)
                                }
                            }
                        )
                    }}
                    validationSchema={EmailValidationSchema}
                >
                    {({ values, isSubmitting }) => (
                        <Form>
                            <FieldArray name="emailTopics">
                                {({ insert, remove, push }) => (
                                    <div>
                                        {console.log(values)}
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
                                        <h3>Topics</h3>
                                        {values.emailTopics.length > 0 &&
                                            values.emailTopics.map((emailTopics, index) => (
                                                <div key={index}>
                                                    <hr></hr>
                                                    <div className="form-group">
                                                        <label className="col-form-label control-label" htmlFor={`emailTopics.${index}.name`}>Topic Heading</label>
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
                                                        <label className="col-form-label control-label" htmlFor={`emailTopics.${index}.email`}>Topic Content</label>
                                                        <Field
                                                            name={`emailTopics.${index}.topicContent`}
                                                            placeholder="Some text"
                                                            className="form-control"
                                                            as="textarea"
                                                            rows="4"
                                                        />
                                                        <ErrorMessage
                                                            name={`emailTopics.${index}.topicContent`}
                                                            component="div"
                                                            className="field-error"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label control-label" htmlFor={`emailTopics.${index}.email`}>Topic Link</label>
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
                                            onClick={() => push({ topicHeading: '', topicContent: '', topicLink: '' })}
                                        >
                                            Add Topic
                                        </button>
                                        <br></br>
                                        <br></br>
                                        <button
                                            className="btn btn-success btn-block"
                                            type="submit"
                                            style={{ marginBottom: "2rem" }}
                                            disabled={isSubmitting}
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
