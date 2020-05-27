import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "lukaskingsmail@gmail.com",
    pass: "vqkkljuelalgjpkt"
  },
});

router.post('/', (req, res) => {
  const {
    name,
    email: sender,
    content,
    sendCopy,
  } = req.body;

  transporter.sendMail({
    from: 'lukaskingsmail@gmail.com', // listed in rfc822 message header
    to: 'lukaskingsmail@gmail.com', // listed in rfc822 message header
    envelope: {
      from: 'Lukas Grimm <lukaskingsmail@gmail.com>', // used as MAIL FROM: address for SMTP
      to: 'Lukas Grimm <lukaskingsmail@gmail.com>', // used as RCPT TO: address for SMTP
    },
    subject: `Contact from ${name} (${sender})`,
    text: content,
  });

  if (sendCopy) {
    transporter.sendMail({
      from: 'lukaskingsmail@gmail.com', // listed in rfc822 message header
      to: sender, // listed in rfc822 message header
      envelope: {
        from: 'Lukas Grimm <lukaskingsmail@gmail.com>', // used as MAIL FROM: address for SMTP
        to: `${name} <${sender}>`, // used as RCPT TO: address for SMTP
      },
      subject: 'Contact to Lukas Grimm (Copy)',
      text: content,
    });
  }

  res.sendStatus(204);
});

export default router;
