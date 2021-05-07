export const FORM_URL = {
    mainForm: '',
    previewForm: '',
    imageLinks: ''
}

if (process.env.NODE_ENV === 'development'){
    FORM_URL.mainForm = 'http://localhost:8000/api/form'
    FORM_URL.previewForm = 'http://localhost:8000/api/preview'
    FORM_URL.imageLinks = '/images'
} else if (process.env.NODE_ENV === 'production') {
    FORM_URL.mainForm = '/api/form'
    FORM_URL.previewForm = '/api/preview'
    FORM_URL.imageLinks = '/images'
}