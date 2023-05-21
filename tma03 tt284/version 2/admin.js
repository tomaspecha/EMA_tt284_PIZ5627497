const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/club', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

//... routes will go here

app.listen(3000, () => console.log('Server started on port 3000'));
const mongoose = require('mongoose');

const walkEventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    startTime: String,
    duration: String,
    meetingPoint: String,
    distance: Number,
    walkLeader: String,
    contactNumber: String,
    comments: String,
    status: String
});

module.exports = mongoose.model('WalkEvent', walkEventSchema);
const express = require('express');
const WalkEvent = require('./models/WalkEvent');

const router = express.Router();

router.post('/walk-events', async (req, res) => {
    const walkEvent = new WalkEvent(req.body);
    await walkEvent.save();
    res.status(201).send(walkEvent);
});

//... other routes will go here

module.exports = router;
// JavaScript Document