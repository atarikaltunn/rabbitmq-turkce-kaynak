var amqp = require('amqplib/callback_api');

var args = process.argv.slice(2);

if (args.length == 0) {
  console.log("Usage: receive_logs_topic.js <facility>.<severity>");
  process.exit(1);
}

amqp.connect('amqp://test:test@ulakmq.tzty.net:5672/', function(error0, connection) {

    if (error1) {
        throw error1;
      }
      var exchange = 'topic_logs';
  
      channel.assertExchange(exchange, 'topic', {
        durable: false
      });
  
      channel.assertQueue('', {
        exclusive: true
      }, function(error2, q) {
        if (error2) {
          throw error2;
        }
        console.log(' [*] Waiting for logs. To exit press CTRL+C');
  
        args.forEach(function(key) {
          channel.bindQueue(q.queue, exchange, key);
        });
  
        channel.consume(q.queue, function(msg) {
          console.log(" [x] %s:'%s'", msg.fields.routingKey, msg.content.toString());
        }, {
          noAck: true
        });
      });
    });








//     if (error0) {
//         throw error0;
//     }
//     connection.createChannel(function(error1, channel) {
//         if (error1) {
//             throw error1;
//         }

//         var queue = 'deneme';

//         channel.assertQueue(queue, {
//             durable: true
//         }); 
//         console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
       
//         channel.consume(queue, function(msg) {

//             var secs = msg.content.toString().split('.').length - 1;
           
//             console.log(" [x] Received %s", msg.content.toString());
//             setTimeout(function() { 
//               channel.ack(msg);
//             }, secs * 1000);

//         }, {
//             noAck: false
//         });
//     });
// });