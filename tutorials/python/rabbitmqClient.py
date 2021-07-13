#!/usr/bin/env python

import pika, sys, os, amqp ,time

def main():

    url= pika.URLParameters("amqp://tarik:q5eYAkHB3T@89.252.131.176:5672/%2f/test/")
    connection = pika.BlockingConnection(url)

    channel = connection.channel()
    channel.queue_declare(queue='yunus', durable=True, exclusive=False, auto_delete=False)

    def callback(ch, method, properties, body):

        print(" [x] Received %r" % body) 
        print( properties )
        time.sleep(0.1)
        channel.basic_ack(delivery_tag=method.delivery_tag , multiple=False) #deliver modu alınan mesajı onaylamaya yarar

    # i=0
    # while True:
    #     i +=1
    #     time.sleep()
    channel.basic_qos(prefetch_count=1) #tek seferde kaçtane alacağını söylüyoruz
    channel.basic_consume(queue='yunus', on_message_callback = callback ,auto_ack=False, exclusive=True) #auto ack otomatik onay       exclusive burada kuyruğa başka biri bağlanamaz diyor True ile bağlanmasını engelliyoruz 



    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)
