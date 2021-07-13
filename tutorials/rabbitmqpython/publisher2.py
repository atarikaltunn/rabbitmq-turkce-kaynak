import pika, amqp, pika.exceptions, time

url= pika.URLParameters("amqp://tarik:q5eYAkHB3T@89.252.131.176:5672/%2F/test/")
connection = pika.BlockingConnection(url)

channel = connection.channel()

channel.queue_declare(queue='deneme', durable=True, exclusive=False, auto_delete=False)

channel.confirm_delivery() #teslimat onayı için zorunlu

i=0
try:
    while i<10:
        message=str(i) + ': Hi there! '
        channel.basic_publish(
            exchange='', routing_key='deneme', body=message , properties=pika.BasicProperties(
                content_type='text/plain', delivery_mode=2))
        print(" [x] Sent " , message)
        i+=1
        time.sleep(0.6)
    print('Message was published')
except pika.exceptions.UnroutableError:
    print('Message was returned')

connection.close()