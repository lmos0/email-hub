const sgMail = require('@sendgrid/mail')

require('dotenv').config()
console.log(process.env.SENDGRID_API_KEY)
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'luismarcio.os@outlookW.com', // Change to your recipient
  from: 'noreply@drajuliabenedetti.com.br', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })