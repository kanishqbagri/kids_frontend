const express = require('express');
const path = require('path');
const apiRouter = require('./api/router');

// Create the UI server
const uiServer = express();

// Serve the static files from the "public" directory
uiServer.use(express.static(path.join(__dirname, 'public')));

// Listen for incoming requests on port 3000
uiServer.listen(3000, () => {
  console.log('UI server is running on port 3000');
});

// Create the API server
const apiServer = express();

// Use the API router to handle requests to the API endpoints
apiServer.use('/api', apiRouter);

// Listen for incoming requests on port 3001
apiServer.listen(3001, () => {
  console.log('API server is running on port 3001');
});
