const express = require('express')
const nodemailer = require('nodemailer');
const app = express()


app.listen(3001,()=>{
    console.log('listening on 3001')
})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ahmedgebril1889@gmail.com',
      pass: 'Mohamedbob54'
    }
  });


  app.post('/submit-form', (req, res) => {
    const { Name, Email, Subject ,Message } = req.body;
  
    const mailOptions = {
      from: Email,
      to: 'ahmedgebril1889@gmail.com',
      subject: Subject,
      text: `Name: ${Name}\nEmail: ${Email}\nMessage: ${Message}`
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  });