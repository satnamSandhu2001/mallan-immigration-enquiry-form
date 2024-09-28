require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const template = require('./utils/template');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CLIENT_EMAIL,
      subject: 'Enquiry Form',
      html: template(req.body),
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log(error);
        return res.redirect(
          `/error.html?message=${encodeURIComponent(
            'Failed to submit form. Please try again later.'
          )}`
        );
      } else {
        res.redirect('/success.html');
      }
    });
  } catch (error) {
    console.log(error);
    res.redirect(
      `/error.html?message=${encodeURIComponent(
        'Internal server error! Please try again.'
      )}`
    );
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve index.html for any unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
