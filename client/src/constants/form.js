export const FORM_URL = {
    mainForm: '',
    previewForm: '',
    imageLinks: '',
    saveDraft: '',
}

if (process.env.NODE_ENV === 'development'){
    FORM_URL.mainForm = 'http://localhost:8000/api/form'
    FORM_URL.previewForm = 'http://localhost:8000/api/preview'
    FORM_URL.saveDraft = 'http://localhost:8000/api/saveDraft'
    FORM_URL.getDrafts = 'http://localhost:8000/api/getDrafts'
    FORM_URL.getSent = 'http://localhost:8000/api/getSent'
    FORM_URL.imageLinks = '/images'
} else if (process.env.NODE_ENV === 'production') {
    FORM_URL.mainForm = '/api/form'
    FORM_URL.saveDraft = '/api/form/saveDraft'
    FORM_URL.previewForm = '/api/preview'
    FORM_URL.imageLinks = '/images'
    FORM_URL.getDrafts = '/api/getDrafts'
    FORM_URL.getSent = '/api/getSent'
}