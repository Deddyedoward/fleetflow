import handlebars from "handlebars";
import path from "path";
import fs from "fs";
import transporter from "../../config/nodemailer";

class EmailService {
    private async getTemplate(templateName: string) {
        const templatePath = path.join(__dirname, 'templates', `${templateName}.hbs`);
        return fs.promises.readFile(templatePath, 'utf-8');
    }

    public async sendEmail(templateName: string, to: string, subject: string, context: object) {
        try {
            const templateSource = await this.getTemplate(templateName);
            const template = handlebars.compile(templateSource);
            const html = template(context);

            const mailOptions = {
                from: "'Company Name' no-reply@example.com",
                to,
                subject,
                html
            }

            const info = await transporter.sendMail(mailOptions)
            console.log('Message sent: %s', info.messageId)
        } catch (error) {
            console.error('Error sending email:', error)
        }
    }
}

export default EmailService