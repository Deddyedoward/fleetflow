import { Worker } from "bullmq";
import { EmailService } from "../api/email";
import logger from "../shared/utils/logger.util";

const connection = {
    host: 'localhost',
    port: 6379
}

export const emailWorker = new Worker('emailQueue', async job => {
    logger.info(`Processing job: ${job.id}`);

    const { templateName, to, subject, context } = job.data;

    new EmailService().sendEmail(templateName, to, subject, context)

    logger.info('Email Sent');
}, { connection });


// Start the email worker
emailWorker.on('completed', (job) => {
    logger.info('Completed job: ', job.id);
});

emailWorker.on('failed', (job, err) => {
    console.error(`Job with id ${job?.id} has failed with error: ${err.message}`);
});

console.log('Email worker started');
