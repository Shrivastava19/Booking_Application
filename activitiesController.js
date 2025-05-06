
const Activity = require('../models/Activity');
const Booking  = require('../models/Booking');

exports.listActivities = async (req, res) => {
  try {
    const activities = await Activity.find().exec();  // Fetch all activities
    res.json(activities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.bookActivity = async (req, res) => {
  try {
    const activityId = req.params.id;
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }

    const booking = new Booking({
      user: req.user.userId,
      activity: activity._id
    });
    await booking.save();
    res.status(201).json({ message: 'Activity booked successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
