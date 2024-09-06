<script setup lang="ts">
import { onMounted, ref } from 'vue'
import 'leaflet/dist/leaflet.css'
import osmToGeoJSON from 'osmtogeojson'

/**
 * Query the Overpass API for the geometry of the given objects.
 * @see https://wiki.openstreetmap.org/wiki/Overpass_API
 * @param objects The OSM IDs of the objects to query.
 * @example const geometry = await queryOverpass(['way(1159328965)'])
 */
function queryOverpass(objects: string[]): Promise<GeoJSON.GeoJsonObject> {
  /* eslint-disable prefer-template --
   * string concatenation is more readable across multiple lines
   */
  // Build the Overpass API query
  const query =
    '[out:json];' +         // Set the output format to JSON
    objects.map((object) => // For each object
      `${object};` +        // Query the object
      'out geom;',          // Output the geometry
    ).join('')              // Join the queries
  /* eslint-enable prefer-template */

  return fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    body: `data=${query}`,
  })
    .then((response) => response.json())
    .then(osmToGeoJSON)
}

const [venueGeometry, buildingGeometries] = await Promise.all([
  queryOverpass([
    'relation(5355856)', // 國立台灣科技大學
  ]),
  queryOverpass([
    'way(646301762)', // 研揚大樓 (RB)
    'way(646293060)', // 綜合研究大樓 (TR)
  ]),
])

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
