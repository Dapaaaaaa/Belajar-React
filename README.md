# Belajar-React
Tempat pembelajaran menggunakan bahasa pemrograman React untuk pemula

## Cara install React Native
> Pastikan sudah menginstall Node.js, jika belum dapat melakukan instalasi melalui link ini: https://nodejs.org/en/download
1. Buka terminal/command prompt dan jalankan perintah berikut: 
``` bash
npm create vite@latest my-react-app -- --template react
```
> Kalian dapat mengganti tulisan _my-react-app_ dengan nama proyek yang kalian mau

2. Masuk kedalam folder proyek
Jika sudah berhasil melakukan installasi, maka masuk kedalam folder proyek kaliam menggunakan IDE favorit masing-masing
``` bash
cd my-react-app
```
> atau cari posisi folder berada dimana dan arahkan atau kalian _copy path_ nya saja
```bash
cd /namafolder/
```

3. Menginstal Dependensi 
Instal semua package yang diperlukan dengan perintah:
```bash
npm install
```
> Langkah ini mungkin memakan waktu beberapa saat

4. Menjalankan Server Pengembangan 
Jalankan aplikasi React Anda di server lokal: 
```bash
npm run dev
```
Setelah itu, buka browser dan akses URL yang tertera di terminal, biasanya http://localhost:5173.

> ## Catatan penting _React VS React Native_
> Penting untuk dipahami bahwa Vite digunakan untuk proyek React berbasis Web (ReactJS), bukan untuk native mobile app (Android/iOS) secara langsung.
> - Vite + React: Cocok untuk website/web app (ReactJS).
> - React Native: Gunakan npx react-native init atau Expo untuk aplikasi mobile.
>
> Jika Anda ingin membuat aplikasi React Native, Anda bisa menggunakan react-native-web bersama Vite, namun cara konvensional menggunakan Expo atau React Native CLI lebih umum. 
