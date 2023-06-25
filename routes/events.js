const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const catchAsync = require('../utils/catchAsync')
const { request } = require('express');
const events = require('../controllers/events')

router.route('/event')
    .post(events.getEvent)
    .get(events.TrendingEvents)

router.route('/events')
    .get(events.getAllEvents)
    .post(events.searchEvent)

router.route('/host/Event')
    .get(events.getEvent)

    .post(events.createEvent)
    .put(events.editEvent)

router.route('/host/events')
    .post(events.getHostEvents)
router.route('/search')
    .post(events.SearchByTags)
    // .post(events.poPulateCategories)
router.route('/location')
    .get(events.closestEvent)

module.exports = router;