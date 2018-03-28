const mongoose = require('mongoose');
const Twitter = require('twitter');

mongoose.connect('mongodb://localhost/twitter');

const client = new Twitter({
  consumer_key: 'EnYAtgyj2gw4sLMMGemR2sW0G',
  consumer_secret: '9EamJg8e56M220pQ6Uh7IfkuxvffS4sVM9CG8NLgkBdGBxQAu4',
  access_token_key: '2544333109-HFUAodkrbx1rzpowcJP9rp3VMs9BMdXAdqTuqS0',
  access_token_secret: 'FSGryplp3SSuQusxukhgkro7ssdDfLKHzLkzJCrxcQ1Te',
});

const Package = mongoose.model('Tweet', {
  created_at: Date,
  t_id: Number,
  t_id_str: String,
  text: String,
  user: {},
  entities: {},
});

client.get('favorites/list', (error, tweets) => {
  if (error) throw error;
  console.log('cantidad de tweets que imprimen los fagoringtos: ', tweets.length);
  tweets.forEach((tweet) => {
    const pck = new Package(tweet).save(); //eslint-disable-line
    console.log(tweet.text);
    console.log('-');
  });
});

/* client.stream('statuses/filter', { track: 'semana santa', language: 'es' }, (stream) => {
  stream.on('data', (tweet) => {
    console.log(tweet.text);
  });

  stream.on('error', (error) => {
    console.log(error);
  });
}); */
