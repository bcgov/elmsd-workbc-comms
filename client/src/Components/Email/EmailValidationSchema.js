import * as yup from 'yup'

export const EmailValidationSchema = yup.object().shape({
    emailTopics: yup.array()
        .of(
            yup.object().shape({
                topicLink: yup.string().url("URL is invalid, example: https://workbc.ca")
            })
        )
})