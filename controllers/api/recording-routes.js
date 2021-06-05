const router = require('express').Router();
const { Song } = require('../../models');

router.get('/', (req, res) => {
    Song.findAll({})
        .then(dbSongData => res.json(dbSongData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    Song.findOne({ where: { id: req.params.id } })
        .then(dbSongData => {
            if (!dbSongData) {
                res.status(404).json({ message: 'No recording found with that id.' })
                return;
            }
            res.json(dbSongData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', (req, res) => {
    Song.create({ id: req.body.id })
        .then(dbSongData => res.json(dbSongData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.put('/:id', (req, res) => {
    Song.update({ id: req.body.id }, { where: { id: req.params.id } })
        .then(dbSongData => {
            if (!dbSongData) {
                res.status(404).json({ message: 'No recording found with that id.' })
                return;
            }
            res.json(dbSongData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.delete('/:id', (req, res) => {
    Song.destroy({ where: { id: req.params.id } })
        .then(dbSongData => {
            if (!dbSongData) {
                res.status(404).json({ message: 'No recording found with that id.' })
                return;
            }
            res.json(dbSongData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

module.exports = router;