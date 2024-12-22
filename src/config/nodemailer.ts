import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'raina72@ethereal.email',
        pass: 'RmXGv931XfDcGdge3f',
    },
});

export default transporter;
