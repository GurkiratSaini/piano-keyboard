const router = require('express').Router();
const recordingRoutes = require('./recording-routes');

router.use('/recording', recordingRoutes);

module.exports = router;