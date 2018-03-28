const mongoose = require('mongoose');
const Twitter = require('twitter');

mongoose.connect('mongodb://localhost/twitter');

const client = new Twitter({
  consumer_key: 'EnYAtgyj2gw4sLMMGemR2sW0G',
  consumer_secret: '9EamJg8e56M220pQ6Uh7IfkuxvffS4sVM9CG8NLgkBdGBxQAu4',
  access_token_key: '2544333109-HFUAodkrbx1rzpowcJP9rp3VMs9BMdXAdqTuqS0',
  access_token_secret: 'FSGryplp3SSuQusxukhgkro7ssdDfLKHzLkzJCrxcQ1Te',
});

const tweetSchema = new mongoose.Schema({
  created_at: Date,
  id: Number,
  id_str: String,
  text: String,
  user: {},
  entities: {},
}, { strict: false });

const userSchema = new mongoose.Schema({
  id: Number,
  id_str: String,
  name: String,
}, { strict: false });

const Tweet = mongoose.model('Tweet', tweetSchema);
const User = mongoose.model('User', userSchema);

client.get('favorites/list', (error, tweets) => {
  if (error) throw error;
  console.log('cantidad de tweets: ', tweets.length);
  tweets.forEach((tweet) => {
    const pck = new Tweet(tweet).save(); //eslint-disable-line
    const user = new User(tweet.user).save(); //eslint-disable-line
    console.log(tweet.text);
    console.log('-');
  });
});
