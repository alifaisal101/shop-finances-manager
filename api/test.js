const cron = require('node-cron');

// cron.schedule('1 * * * * *', async () => {
//   console.log('Running daily payment creation service...');
//   // Call your payment creation service method here
//   // await this.paymentService.createDailyPayments();
// });

// Two date objects
const date1 = new Date('2022-01-01').getTime();
const date2 = new Date('2022-01-10').getTime();

// Calculate the difference in milliseconds
const timeDiff = date2 - date1;

// Convert milliseconds to other units if needed
const secondsDiff = timeDiff / 1000; // Difference in seconds
const minutesDiff = timeDiff / (1000 * 60); // Difference in minutes
const hoursDiff = timeDiff / (1000 * 60 * 60); // Difference in hours
const daysDiff = timeDiff / (1000 * 60 * 60 * 24); // Difference in days

console.log(`Time difference in milliseconds: ${timeDiff}`);
console.log(`Time difference in seconds: ${secondsDiff}`);
console.log(`Time difference in minutes: ${minutesDiff}`);
console.log(`Time difference in hours: ${hoursDiff}`);
console.log(`Time difference in days: ${daysDiff}`);
