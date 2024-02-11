const budgetIdHeader = document.querySelector('#budgetId');
console.log('sdasa');

e_print.handlePrintWindow((budget) => {
  console.log('sdasa');
  budgetIdHeader.innerHTML = budget._id;
  window.print();
});
