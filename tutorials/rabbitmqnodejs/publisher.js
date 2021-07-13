var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        var exchange = 'topic_logs';
        var args = process.argv.slice(2);
        var key = (args.length > 0) ? args[0] : 'anonymous.info';
        var msg = args.slice(1).join(' ') || 'Hello World!';

        channel.assertExchange(exchange, 'topic', {
            durable: false
        });
        channel.publish(exchange, key, Buffer.from(msg));
        console.log(" [x] Sent %s: '%s'", key, msg);
    });

    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});


// #!/usr/bin/env node
//     var amqp = require('amqplib/callback_api');

//     amqp.connect('amqp://test:test@ulakmq.tzty.net:5672/', function(error0, connection) {
//         if (error0) {
//             throw error0;
//         }
//         connection.createChannel(function(error1, channel) {
//             if (error1) {
//                 throw error1;
//             }
//             var exchange = 'topic_logs';
//             var args = process.argv.slice(2);
//             var key = (args.length > 0) ? args[0] : 'anonymous.info';
//             var msg = args.slice(1).join(' ') || 'Hello World!';
    
//             channel.assertExchange(exchange, 'topic', {
//                 durable: false
//             });
//             i=0;
//             while (true){ 
//             i++;
//             channel.publish(exchange, key, Buffer.from(msg+i));
//             console.log(" [%i] Sent %s: '%s'",i, key, msg);
//             }
//         });
    
//         setTimeout(function() {
//             connection.close();
//             process.exit(0);
//         }, 500);
//     });

// // var amqp = require('amqplib/callback_api');

// // amqp.connect('amqp://test:test@ulakmq.tzty.net:5672/', function(error0, connection) {
    
// //     if (error0) {
// //         throw error0;
// //       }
// //       connection.createChannel(function(error1, channel) {
// //         if (error1) {
// //           throw error1;
// //         }
// //         var exchange = 'topic_logs';
// //         var args = process.argv.slice(2);
// //         var key = (args.length > 0) ? args[0] : 'anonymous.info';
// //         var msg = args.slice(1).join(' ') || 'Hello World!';
    
// //         channel.assertExchange(exchange, 'topic', {
// //           durable: false
// //         }); 
// //         for (let index = 0; index < 1000; index++) { 
// //         channel.publish(exchange, key, Buffer.from(msg));
// //         console.log(" [x] Sent %s:'%s'", key, msg);
// //         }
// //         });
        
        


// //     setTimeout(function() {
// //         connection.close();
// //         process.exit(0);
// //     }, 500);
// // });

// // if (error0) {
// //     throw error0;
// // }
// // connection.createChannel(function(error1, channel) {
// //     if (error1) {
// //         throw error1;
// //     } 
// //     var queue = 'deneme';
// //     var msg = 'Hello World!'; 

// //     channel.assertQueue(queue, {
// //         durable: true
// //     }); 
// //     for (let index = 0; index < 1000; index++) { 
// //          channel.sendToQueue(queue,  Buffer.from(msg), {deliveryMode:2, confirm:true});
// //     }
       
// // });