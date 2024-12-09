const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: `${process.env.userEmail}`, 
      pass: `${process.env.userPassKey}`, 
    },
  });

  const mailOptions = {
    from: 'dpatle090096@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };