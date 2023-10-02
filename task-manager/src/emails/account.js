const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tthm280@gmail.com',
        subject: 'Welcome!',
        text: `Hi ${name}, Welcome to task manager app!`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tthm280@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}, I hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}