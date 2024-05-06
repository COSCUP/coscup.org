<!-- .vitepress/components/LeafletMap.vue -->
<template>
    <div id="map" style="height: 400px;"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  
  export default {
    mounted() {
      const map = L.map('map').setView([25.013380, 121.540492], 15); // 將地圖中心設置為指定的經緯度坐標，並設定適當的縮放級別，例如 16
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
  
      L.marker([25.013380, 121.540492]).addTo(map)
        .bindPopup('106 台北市大安區基隆路四段 43 號') // 在標記上顯示地址信息
        .openPopup();
    }
  }
  </script>
  
  

  