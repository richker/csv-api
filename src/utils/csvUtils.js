const fs = require('fs');
const csv = require('csv-parser');

const filterAndLogData = (data) => {
    const originalLength = data.length;

    const filteredData = data.filter(record => {
        // Assuming 'date' and 'recall' are the field names in your CSV
        return record.date && record.recall;
    });

    const filteredLength = filteredData.length;
    const removedCount = originalLength - filteredLength;

    console.log(`Original data count: ${originalLength}`);
    console.log(`Filtered data count: ${filteredLength}`);
    console.log(`Number of records removed: ${removedCount}`);

    return filteredData;
};

const readCSV = (filePath, from_ts = null, to_ts = null) => {
  return new Promise((resolve, reject) => {
    const data = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        const date = new Date(row.date);
        if ((from_ts && date < from_ts) || (to_ts && date > to_ts)) return;
        data.push(row);
      })
      .on('end', () => {
        const filteredData = filterAndLogData(data);
        resolve(filteredData);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

module.exports = readCSV;

