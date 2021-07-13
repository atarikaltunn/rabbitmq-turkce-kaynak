# RabbitMQ için Türkçe Kaynak v1.0

-----------------------------------------------------------------------------------------------------
*Öncelikle belirtmek isterim ki kaynağa her türlü destek ve düzeltmede bulunmanız beni mutlu eder :)*
-----------------------------------------------------------------------------------------------------

## Giriş
Github profilimdeki ilk "markdown"ıma hoşgeldiniz, sefalar getirdiniz :)

Ben Ahmet Tarık, Ankara Üniversitesi Bilgisayar Mühendisliği'nde bu yaz itibariyle 4. sınıf öğrencisiyim. Bir şeyler anlatmaya çalışacağım bu kaynak ile yaz stajımda öğrenmeye başladığım ve hala acemisi olduğum RabbitMQ hakkında öğrendiğim bilgileri pekiştirmek, benden daha acemilere yardımcı olmak, deneyimli yazılımcılar için bir tekrar kaynağı oluşturmak ve yazılım sektörüne Türkçe bir kaynak kazandırmak istiyorum. Kaynak, hatalı veya eksik bilgiler içeriyorsa lütfen benimle iletişime geçmekten çekinmeyin. Keyifli okumalar dilerim 🥳🥳🥳


## RabbitMQ'ya Giriş:

### RabbitMQ nedir?

  RabbitMQ, açık kaynaklı, ücretsiz ve genişletilebilir bir mesaj komisyoncusu(message broker) veya kuyruk yöneticisi(queue manager) olarak da bilinen bir mesaj kuyruğa alma yazılımıdır(message-queueing software). Daha basite indirgemek gerekirse; kuyrukların tanımlandığı, uygulamaların mesaj veya mesajlar aktarmak için kuyruklara bağlandığı, gelişmiş mesaj kuyruklama protokolünü(AMQP(Advanced Message Queue Protocol)) benimsemiş bir yazılımdır. RabbitMQ'nun kendi internet sitesine [buradan](https://www.rabbitmq.com/) ulaşabilirsiniz.

### Tarihçesi:
  
  RabbitMQ ile ilgili derinlere inmeden önce genel kültür olarak biraz daha bilgi sahibi olmanın yararımıza olacağını düşünüyorum, ilgilenmeyenler sonraki bölüme atlayabilir... 20. yüzyılda internet ve bilgisayar bilimlerinde yaşanan hızlı gelişmeyle birlikte uzak bilgisayarlar ve servisler arasındaki veri iletişimi ve alışverişi için farklı yöntemler kullanılmaya ve çözümler üretilmeye başlandı. 2007 yılına gelindiğinde LShift ve CohesiveFT arasında bir ortak girişim olarak başlayan ve Rabbit Technologies Ltd. tarafından geliştirilen RabbitMQ, Nisan 2010'da VMware'in bir bölümü olan SpringSource tarafından satın alındı. Bu yazıyı yazdığım 12 Temmuz 2021 tarihinde en güncel sürümü olaral 3.8.19 versiyonu bulunuyor.
  
### RabbitMQ ile neler Yapılabilir?
    

## Kurulumu:

  Ben Debian tabanlı bir sunucuda kullanıyorum, kurulumları da öncelikle Debian'a göre anlatmaya çalışacağım. Sonrasında elimden geldiğince diğer işletim sistemleri için de eklemeler yapacağım.
  
  **RabbitMQ kurulumuna geçmeden önce güncel bir sisteme ve güncel Erlang versiyonuna sahip olmamız gerekiyor.**
  1. Bu yüzden öncelikle;
 
    ```
    sudo apt update
    sudo apt upgrade
    ```
  2. Sistemi güncelledikten sonra Erlang kurulumuna geçiyoruz;
  
    ```
    wget https://packages.erlang-solutions.com/erlang/debian/pool/esl-erlang_23.1.5-1~debian~stretch_amd64.deb
    sudo dpkg -i esl-erlang_23.1.5-1~debian~stretch_amd64.deb 
    ```
  3. Ardından sistem paketlerini güncelliyoruz ve Erlang'ı yüklüyoruz;
  
    ```
    sudo apt update
    sudo apt install erlang erlang-nox
    ```  
  4. Şimdi sisteminize RabbitMQ'nun apt reposunu ekliyoruz. Ayrıca RabbitMQ kayıt anahtarını sisteminize aktarmanız gerekiyor(2. komutta yaptığımız işlem):
    
    ```
    sudo add-apt-repository 'deb http://www.rabbitmq.com/debian/ testing main'
    wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
    ```
  5. Tamamlandığında, apt-cache'i güncelliyoruz ve sisteminize RabbitMQ sunucusunu kuruyoruz:
    
    ```
    sudo apt update
    sudo apt install rabbitmq-server
    ```
  6. Başarılı bir şekilde kurulduktan sonra, sisteminizde RabbitMQ servisini etkinleştirmek için aşağıdaki komutları kullanın. Ayrıca RabbitMQ servisini de başlatın:
    
    ```
    sudo systemctl enable rabbitmq-server
    sudo systemctl start rabbitmq-server
    ```
  7. Son olarak RabbitMQ'da bir kullanıcı oluşturalım. Aşağıdaki komutları kullanarak RabbitMQ sunucusunda kendi yönetici(administrator) hesabınızı oluşturabilirsiniz. Şifreyi kendi şifrenizle değiştirmeyi unutmayın:
    
    ```
    sudo rabbitmqctl add_user <your_nick> <your_password> 
    sudo rabbitmqctl set_user_tags <your_nick> administrator
    sudo rabbitmqctl set_permissions -p / <your_nick> ".*" ".*" ".*"
    ```
  8. Kolay yönetim için isteğe bağlı olarak RabbitMQ Management Web panosunu etkinleştirebilirsiniz:
    
    ```
    sudo rabbitmq-plugins enable rabbitmq_management
    ```
  9. Son adımda da kurulumu test edeceğiz:
    Eğer kurulumda bir yanlış yapmadıysak RabbitMQ şu anda 15672 portunda etkinliğine başlamış durumda olmalı. Erişmek için tarayıcımızda 
      http://your-domain.com:15672 veya 
      http://server-ip-address:15672 veya
      http://localhost:15672 bağlantılarına gidebiliriz. Karşımıza aşağıdaki gibi bir giriş sayfası çıkmalı;
                             
                                   *************************
                                   ****BURAYA SS GELECEK****
                                   *************************

## Tutorials
### Exchanges
###
## Kapanış

## Kaynaklar
https://www.cloudamqp.com/blog/part1-rabbitmq-for-beginners-what-is-rabbitmq.html
https://www.erlang-solutions.com/blog/an-introduction-to-rabbitmq-what-is-rabbitmq/
https://idroot.us/install-rabbitmq-debian-10/
