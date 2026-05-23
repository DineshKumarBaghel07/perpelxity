import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
        type: "OAuth2",
        user: process.env.GOOGLE_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN
    }
});

// REMOVE VERIFY
// transporter.verify()

export async function sendEmail({
    to,
    subject,
    html,
    text
}) {

    try {
        const details =
            await transporter.sendMail({
                from: process.env.GOOGLE_USER,
                to,
                subject,
                html,
                text
            });

        console.log(details);

    } catch (err) {
        console.log("EMAIL ERROR");
        console.log(err);
    }
}