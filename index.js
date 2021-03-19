const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const webPush = require('web-push');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

webPush.setVapidDetails('mailto: sendemailproject21@gmail.com', keys.publicVapidKey, keys.privateVapidKey);

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);


if (process.env.NODE_ENV === 'production') {
  //Express for productions assets
  app.use(express.static('client/build'));

  //Express error handler
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.post('/subscription', (req,res) => {
  const subscription = req.body;

  res.status(201).json({});

  const payload = JSON.stringify({ title: 'Push Test' });
  webPush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
