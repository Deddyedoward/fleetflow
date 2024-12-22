import { emailQueue } from "../../config/bullmq";
import logger from "../../shared/utils/logger.util";

class EmailQueueService {
    public async queueEmail(templateName: string, to: string, subject: string, context: object) {
        try {
            await emailQueue.add('sendEmail', {
                templateName,
                to,
                subject,
                context
            })

            logger.info(`Email to ${to} queued successfully`)
        } catch (err) {
            logger.error('Error queueing email')
        }
    }
}

export default EmailQueueService