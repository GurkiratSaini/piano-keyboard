const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/songs', (req, res) => {
    req.body.songNotes
})

module.exports = router;