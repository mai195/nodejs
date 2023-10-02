const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'tthm280@gmail.com',
    from: 'tthm280@gmail.com',
    subject: 'First task',
    text: 'Application'
})