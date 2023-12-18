import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.post("/send-email", (req, res) => {
  const { from, subject, text } = req.body;
  console.log(from, subject, text);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "salihbstg01@gmail.com",
      pass: "mlry bbkl sqsw ujsh",
    },
  });

  const mailOptions = {
    from: from,
    to: "salihbstg01@gmail.com",
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    console.log(mailOptions);
    if (error) {
      console.log("hata!", error);
      return res.status(500).send(error.toString());
    }
    res.status(200).json("Email send: " + info.response);
  });
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server online`);
});
