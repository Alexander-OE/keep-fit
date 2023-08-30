import * as sgmail from "@sendgrid/mail";
import * as dotenv from "dotenv";
dotenv.config();

export const sendMail = (userEmail: string, adminEmail: string) => {
  const apiKey: any = process.env.API_KEY;
  sgmail.setApiKey(apiKey);

  const message = {
    to: userEmail,
    from: adminEmail,
    subject: "Registration Confirmation",
    text: " Thank you for registering on our website!",
  };

  sgmail
    .send(message)
    .then(() => {
      console.log("Email has been sent");
    })
    .catch((err) => console.log("Email error: " + err));
};
