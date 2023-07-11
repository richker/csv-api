const express = require('express');
const cors = require('cors');
const recallRouter = require('./src/routes/recall');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes
app.use('/recall', recallRouter);

// Error handling middleware should be placed after all app.use() and routes calls
app.use(errorHandler);

const PORT = process.env.PORT || 3000; // Use the PORT environment variable if it's available

app.listen(PORT, function() {
  console.log(`App is listening on port ${PORT}`);
});
