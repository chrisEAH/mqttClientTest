var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://127.0.0.1:1883')
 
client.on('connect', function () {
  client.subscribe('deine/mutter', function (err) {
    if (!err) {
      client.publish('deine/mutter', 'Hello mqtt')
    }
    else{
        console.log(err);
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})