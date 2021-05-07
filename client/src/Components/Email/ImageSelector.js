import React from 'react'
import { Field } from 'formik'
import { FORM_URL } from '../../constants/form'

function ImageSelector(topic) {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <div className="image-select custom-radio image-checkbox">
                        <Field
                            type="radio"
                            class="image-select-input"
                            id={`${topic}-image1`}
                            name={topic}
                            value="image1.jpeg"
                        />
                        <label className="image-select-label" htmlFor={`${topic}-image1`}>
                            <img src={`${FORM_URL.imageLinks}/image1.jpeg`} alt="#" className="img-fluid" width="250px" height="250px"></img>
                        </label>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="image-select custom-radio image-checkbox">
                        <Field
                            type="radio"
                            class="image-select-input"
                            id={`${topic}-image2`}
                            name={topic}
                            value="image2.jpeg"
                        />
                        <label className="image-select-label" htmlFor={`${topic}-image2`}>
                            <img src={`${FORM_URL.imageLinks}/image2.jpeg`} alt="#" className="img-fluid" width="250px" height="250px"></img>
                        </label>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="image-select custom-radio image-checkbox">
                        <Field
                            type="radio"
                            class="image-select-input"
                            id={`${topic}-image3`}
                            name={topic}
                            value="image3.jpeg"
                        />
                        <label className="image-select-label" htmlFor={`${topic}-image3`}>
                            <img src={`${FORM_URL.imageLinks}/image3.jpeg`} alt="#" className="img-fluid" width="250px" height="250px"></img>
                        </label>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="image-select custom-radio image-checkbox">
                        <Field
                            type="radio"
                            class="image-select-input"
                            id={`${topic}-image4`}
                            name={topic}
                            value="image4.jpeg"
                        />
                        <label className="image-select-label" htmlFor={`${topic}-image4`}>
                            <img src={`${FORM_URL.imageLinks}/image4.jpeg`} alt="#" className="img-fluid" width="250px" height="250px"></img>
                        </label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="image-select custom-radio image-checkbox">
                        <Field
                            type="radio"
                            class="image-select-input"
                            id={`${topic}-image5`}
                            name={topic}
                            value="image5.jpeg"
                        />
                        <label className="image-select-label" htmlFor={`${topic}-image5`}>
                            <img src={`${FORM_URL.imageLinks}/image5.jpeg`} alt="#" className="img-fluid" width="250px" height="250px"></img>
                        </label>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="image-select custom-radio image-checkbox">
                        <Field
                            type="radio"
                            class="image-select-input"
                            id={`${topic}-image6`}
                            name={topic}
                            value="image6.jpeg"
                        />
                        <label className="image-select-label" htmlFor={`${topic}-image6`}>
                            <img src={`${FORM_URL.imageLinks}/image6.jpeg`} alt="#" className="img-fluid" width="250px" height="250px"></img>
                        </label>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="image-select custom-radio image-checkbox">
                        <Field
                            type="radio"
                            class="image-select-input"
                            id={`${topic}-image7`}
                            name={topic}
                            value="image7.jpeg"
                        />
                        <label className="image-select-label" htmlFor={`${topic}-image7`}>
                            <img src={`${FORM_URL.imageLinks}/image7.jpeg`} alt="#" className="img-fluid" width="250px" height="250px"></img>
                        </label>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="image-select custom-radio image-checkbox">
                        <Field
                            type="radio"
                            class="image-select-input"
                            id={`${topic}-image8`}
                            name={topic}
                            value="image8.jpeg"
                        />
                        <label className="image-select-label" htmlFor={`${topic}-image8`}>
                            <img src={`${FORM_URL.imageLinks}/image8.jpeg`} alt="#" className="img-fluid" width="250px" height="250px"></img>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSelector;