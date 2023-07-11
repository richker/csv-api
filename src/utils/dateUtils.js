function parseAndValidateDate(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (isNaN(date)) throw new Error(`Invalid date: ${dateString}`);
  return date;
}

module.exports = { parseAndValidateDate };
