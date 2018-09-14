const express = require('express');
const nodemailer = require("nodemailer");
const router = express.Router();

/* GET contact page. */
router.get('/', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});

/* POST send email */
router.post("/send", (req, res, next) => {

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  let html = `<p>Name: ${name}</p>`;
      html += `<p>Email: ${email}</p>`;
      html += `<p>Message: <br> ${message}</p>`;

  const mailOptions = {
    from: '"Chris Davis" <chris.davis5440@gmail.com>',
    to: '"Chris Davis" <chris.davis5440@gmail.com>',
    subject: 'Hello from PC Repair MoFo!',
    text: 'You have a submission from... Name: ' + name,
    html: html
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      return console.log(err);
    }
    console.log("Message Sent: " + info.response);
    res.redirect("/");
  });

});

module.exports = router;