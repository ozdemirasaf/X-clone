# X Clone

Bu proje, X platformu benzeri bir kullanıcı arayüzü oluşturmayı amaçlayan bir React uygulamasıdır. Tasarım ve kullanıcı deneyimi üzerine odaklanılmıştır. Ayrıca Redux kullanarak temalar arası geçiş ve görünüm ayarları eklenmiştir.

## Özellikler

- **Tema Değişimi** : Redux state yönetimi ile dark ve light temalar arasında geçiş yapılabilir.
- **Renk Ayarları** : Kullanıcı, arayüzdeki renkleri kişisel tercihlerine göre ayarlayabilir.
- **Yazı Boyutu Ayarları** : Kullanıcı, font boyutlarını tercihlerine göre özelleştirebilir.
- **Kullanıcı Arayüzü (UI)** : Modern ve basit bir arayüz tasarımı.

## Kurulum

1. Projenin Klonlanması:
   ```bash
   git clone https://github.com/kullanici-adi/x-clone.git
   
2. Bağımlılıkların Yüklenmesi:
   ```bash
   cd x-clone
   npm install

3. Projeyi Çalıştırma:
   ```bash
   npm run dev

## Eğer Docker Kullanıyorsanız;

1. Docker Hub Üzerinden İmage Çekme:
   ```bash
   docker pull muhammed81/my-vite-app:latest

2. Container Ayağa Kaldırma:
   
   bu adımda 8080:80 ifadesi hangi portu container host un hangi portuna bağlayacağımı bildirir dilerseniz değiştirebilirsiniz.
   ```bash
   docker run -p 8080:80 muhammed81/my-vite-app
Tarayıcınızdan localhost:8080 adresini ziyaret ediniz.

## Kullanılan Teknolojiler

- **React** : Kullanıcı arayüzü geliştirmek için.
- **Redux** : Tema ve görünüm ayarlarını yönetmek için.
- **CSS/TailwindCSS** : Stil uygulamaları için.

# English

## X Clone

This project is a React application aimed at creating a user interface similar to the X platform. It focuses on design and user experience. Additionally, theme switching and appearance settings are implemented using Redux.

### Features

- **Theme Switching** : Switch between dark and light themes using Redux state management.
- **Color Settings** : Users can customize the interface colors based on their preferences.
- **Font Size Settings** : Users can adjust font sizes to their liking.
- **User Interface (UI)** :  A modern and simple user interface design.

### Installation

1. Clone the Repository:
   ```bash
   git clone https://github.com/kullanici-adi/x-clone.git
   
2. Install Dependencies:
   ```bash
   cd x-clone
   npm install

3. Run the Project:
   ```bash
   npm run dev

## If You Are Using Docker;

1. Pull Image From Docker Hub:
   ```bash
   docker pull muhammed81/my-vite-app:latest

2. Running The Container:
   
   in this step the expression 8080:80 tells me which port to connect to which port of the container host, you can change it if you wish.
   ```bash
   docker run -p 8080:80 muhammed81/my-vite-app
   
Visit localhost:8080 in your browser.

### Technologies Used

- **React** : For building the user interface.
- **Redux** : For managing theme and appearance settings.
- **CSS/TailwindCSS** : For styling the application.
