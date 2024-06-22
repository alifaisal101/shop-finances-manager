export const paymentTypeMap = (payType) => {
  const paymentsTypes = {
    direct: 'نقد',
    indirect: 'آجل',
  };

  return paymentsTypes[payType];
};

export const displayDate = (dateStr) => {
  // Convert the date string to a Date object
  const dateObj = new Date(dateStr);

  // Check if the conversion was successful
  if (isNaN(dateObj.getTime())) {
    // Handle invalid date string if necessary
    return 'Invalid Date';
  }

  // Return the formatted date string
  return dateObj.toISOString().substring(0, 10);
};

export const numberWithCommas = (number) => {
  if (!number || number < 1000) {
    return '';
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const displaySex = (sex) => {
  const sexesObj = {
    male: 'ذكر',
    female: 'أنثى',
  };

  return sexesObj[sex];
};

export const mapTransactionType = (transactionType) => {
  const transactionTypeObj = {
    expense: 'مصروف',
    income: 'إيراد',
  };

  return transactionTypeObj[transactionType];
};

export const convertMilitaryToArabicTime = (militaryTimeRange) => {
  // Split the military time range into start and end times
  const [startTime, endTime] = militaryTimeRange.split('-');

  // Convert military time to Arabic time format
  const convertToArabicTime = (time) => {
    let hour = parseInt(time.substring(0, 2));
    let minute = time.substring(2);

    let period = hour < 12 ? 'ص' : 'م'; // Determine AM or PM

    // Convert 24-hour format to 12-hour format
    if (hour === 0) {
      hour = 12; // Midnight edge case
    } else if (hour > 12) {
      hour -= 12;
    }

    return `${hour}:${minute} ${period}`;
  };

  // Format start and end times
  const arabicStartTime = convertToArabicTime(startTime);
  const arabicEndTime = convertToArabicTime(endTime);

  // Construct the Arabic time range string
  const arabicTimeRange = `من ${arabicStartTime} الى ${arabicEndTime}`;

  return arabicTimeRange;
};
