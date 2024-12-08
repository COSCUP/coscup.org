<script setup lang="ts">
import { onMounted, ref } from 'vue'
import 'leaflet/dist/leaflet.css'
import { data } from '#loaders/overpass.data'

const { venueGeometry, buildingGeometries } = data

const mapEl = ref()

onMounted(async () => {
  const Leaflet = await import('leaflet')
  const map = Leaflet.map(mapEl.value)

  Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap 貢獻者</a>',
  }).addTo(map)

  Leaflet.geoJSON(buildingGeometries, {
    onEachFeature: (feature, layer) => {
      const { name, ref } = feature.properties
      layer.bindTooltip(`${name} (${ref})`)
    },
  }).addTo(map)

  const venue = Leaflet.geoJSON(venueGeometry)
  map.fitBounds(venue.getBounds())
  map.zoomIn()
})
</script>

<template>
  <div ref="mapEl" />
</template>

<style>
/* Create a new stacking context for Leaflet */
.leaflet-container {
  isolation: isolate;
}

.dark {
  .leaflet-layer {
    filter: invert(100%) hue-rotate(180deg) contrast(60%);
  }

  .leaflet-control,
  .leaflet-control a {
    color: var(--vp-button-alt-text);
    background-color: var(--vp-button-alt-bg);

    &.leaflet-disabled {
      color: var(--vp-c-text-2);
    }

    &:hover {
      background-color: var(--vp-button-alt-hover-bg);
    }
  }

  .leaflet-container {
    background-color: transparent;
  }
}
</style>
