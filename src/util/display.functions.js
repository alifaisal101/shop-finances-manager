export const paymentTypeMap = (payType) => {
  const paymentsTypes = {
    direct: 'نقد',
    indirect: 'آجل',
  };

  return paymentsTypes[payType];
};

export const displayDate = (dateObj) => dateObj.toISOString().substring(0, 10);

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
