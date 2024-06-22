export const mapDateRangeToShiftTime = (startRange, endRange) => {
  // Parse the ISO strings into Date objects
  const startDate = new Date(startRange);
  const endDate = new Date(endRange);

  // Extract hours and minutes from the Date objects
  const startHours = String(startDate.getHours()).padStart(2, '0');
  const startMinutes = String(startDate.getMinutes()).padStart(2, '0');
  const endHours = String(endDate.getHours()).padStart(2, '0');
  const endMinutes = String(endDate.getMinutes()).padStart(2, '0');

  // Form the result string in the format "HHMM-HHMM"
  const result = `${startHours}${startMinutes}-${endHours}${endMinutes}`;

  return result;
};
