<script setup lang="ts">
const venueAddress = '106 台北市大安區基隆路四段 43 號'
</script>

# 活動資訊

## 交通資訊

::: info <IconPhMapPin />

### 國立臺灣科技大學

{{ venueAddress }} <CopyButton :source="venueAddress" />

<!-- prettier-ignore -->
<Suspense>
  <LeafletMap class="map" />
  <template #fallback>
    <div class="map"></div>
  </template>
</Suspense>

:::

<style scoped>
svg {
  vertical-align: text-bottom;
  display: inline-block;
}

.custom-block {
  .custom-block-title {
    font-size: xx-large;
  }

  h3 {
    margin-bottom: 8px;
  }

  /* Reset VitePress styles for map buttons */
  :deep(a:hover) {
    opacity: unset;
  }
}

.map {
  width: 100%;
  height: 400px;
  margin: 8px 0;
  border-radius: 4px;
}
</style>
