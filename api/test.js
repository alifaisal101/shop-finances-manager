const cron = require('node-cron');

cron.schedule('1 * * * * *', async () => {
  console.log('Running daily payment creation service...');
  // Call your payment creation service method here
  // await this.paymentService.createDailyPayments();
});
