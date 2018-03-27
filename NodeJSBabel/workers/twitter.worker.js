const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'EnYAtgyj2gw4sLMMGemR2sW0G',
  consumer_secret: '9EamJg8e56M220pQ6Uh7IfkuxvffS4sVM9CG8NLgkBdGBxQAu4',
  access_token_key: '2544333109-HFUAodkrbx1rzpowcJP9rp3VMs9BMdXAdqTuqS0',
  access_token_secret: 'FSGryplp3SSuQusxukhgkro7ssdDfLKHzLkzJCrxcQ1Te',
});

client.stream('statuses/filter', { track: 'hola', language: 'es' }, (stream) => {
  stream.on('data', (tweet) => {
    console.log(tweet.text);
  });

  stream.on('error', (error) => {
    console.log(error);
  });
});
