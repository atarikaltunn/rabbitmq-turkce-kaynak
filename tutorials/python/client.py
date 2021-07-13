import pika, amqp, pika.exceptions

url= pika.URLParameters("amqp://tarik:q5eYAkHB3T@89.252.131.176:5672/%2F/test/")
connection = pika.BlockingConnection(url)

channel = connection.channel()

channel.queue_declare(queue='yunus', durable=True, exclusive=False, auto_delete=False)

channel.confirm_delivery() #teslimat onayı için zorunlu

i=0
try:
    while True:
        i+=1
        bodyy='Hello World! ' + str(i) 
        channel.basic_publish(exchange='', routing_key='yunus', body=bodyy , properties=pika.BasicProperties(content_type='text/plain', delivery_mode=2))
        print(" [x] Sent " , bodyy)
        if i>15 :
            break
    print('Message was published')
except pika.exceptions.UnroutableError:
    print('Message was returned')

connection.close()
