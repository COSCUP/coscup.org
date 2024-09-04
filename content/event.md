<script setup lang="ts">
const venueAddress = '106 台北市大安區基隆路四段 43 號'
</script>

# 活動資訊

::: info <IconPhMapPin /> 位置

## 國立臺灣科技大學

{{ venueAddress }} <CopyButton :source="venueAddress" />

<!-- prettier-ignore -->
<ClientOnly>
  <Suspense>
    <LeafletMap class="map" />
    <template #fallback>
      <div class="map loading"><IconPhMapPinAreaBold /></div>
    </template>
  </Suspense>
</ClientOnly>

:::

## 交通資訊

<style scoped>
svg {
  vertical-align: text-bottom;
  display: inline-block;
}

.custom-block {
  .custom-block-title {
    font-size: large;
  }

  h2 {
    margin: 24px 0 16px;
    padding: 0;
    border-top: none;

    .header-anchor {
      display: none;
    }
  }

  /* Reset VitePress styles for map buttons */
  :deep(a:hover) {
    opacity: unset;
  }
}

@keyframes pulse {
  0% {
    background-color: var(--vp-c-gray-1);
    box-shadow: 0 0 0 0px var(--vp-c-gray-1);
  }
  100% {
    background-color: transparent;
    box-shadow: 0 0 0 20px transparent;
  }
}

.map {
  width: 100%;
  height: 400px;
  margin: 8px 0;
  border-radius: 4px;

  &.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: xx-large;
    background-color: var(--vp-c-bg-elv);

    svg {
      padding: 2px;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
  }
}
</style>
