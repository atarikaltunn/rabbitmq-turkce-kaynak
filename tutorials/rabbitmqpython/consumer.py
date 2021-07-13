import pika, sys, os, amqp ,time

def main():

    url= pika.URLParameters("amqp://tarik:q5eYAkHB3T@89.252.131.176:5672/%2f/test/")
    connection = pika.BlockingConnection(url)
 
    channel = connection.channel()

    channel.queue_declare(queue='deneme', durable=True, exclusive=False, auto_delete=False)

    def callback(ch, method, properties, body):

        print(" [x] Received %r" % body) 
        print(properties)
        time.sleep(0.5)
        channel.basic_ack(delivery_tag=method.delivery_tag , multiple=False) #deliver modu alınan mesajı onaylamaya yarar


    channel.basic_qos(prefetch_count=1) #tek seferde kaçtane alacağını söylüyoruz
    channel.basic_consume(queue='deneme', on_message_callback = callback ,auto_ack=False) #auto ack otomatik onay 
    
   

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