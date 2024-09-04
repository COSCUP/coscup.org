<script setup lang="ts">
import { conference } from '#data/conference'
import type { CalendarEvent } from 'calendar-link';

const start = conference.startDate.toLocaleDateString()
const end = conference.endDate.toLocaleDateString()

const venueAddress = '106 台北市大安區基隆路四段 43 號'

// Supported calendar types by `calendar-link`
type CalendarType = keyof typeof import('calendar-link')

// Create an link or an ICS file to add the event to the user's calendar
async function addToCalendar(type: CalendarType) {
  const { [type]: getCalendarLink } = await import('calendar-link')

  const event: CalendarEvent = {
    title: conference.title,
    description: `<a href="${document.location.origin}">${conference.description}</a>`,
    start: conference.startDate,
    end: conference.endDate,
    allDay: true,
    location: venueAddress,
  }

  const link = getCalendarLink(event) as string

  if (type == 'ics') {
    // Set the ICS file name by creating an anchor element
    const anchor = document.createElement('a')
    anchor.href = link
    anchor.download = `${conference.title}.ics`
    anchor.click()
  } else {
    window.open(link, '_blank')
  }
}
</script>

# 活動資訊

::: info <IconPhCalendarDots /> 日期

## {{ start }} – {{ end }}

<div class="actions">
  <VPButton
    theme="alt"
    @click="addToCalendar('google')"
  >
    <IconPhGoogleLogo /> Google 日曆
  </VPButton>
  <VPButton
    theme="alt"
    @click="addToCalendar('outlookMobile')"
  >
    <IconPhMicrosoftOutlookLogo /> Outlook
  </VPButton>
  <VPButton
    theme="alt"
    @click="addToCalendar('yahoo')"
  >
    <IconPhExclamationMark /> Yahoo
  </VPButton>
  <VPButton
    theme="alt"
    @click="addToCalendar('ics')"
  >
    <IconPhCalendarPlus /> ICS
  </VPButton>
</div>

:::

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

<div class="actions">
  <VPButton
    theme="alt"
    href="https://www.openstreetmap.org/relation/5355856"
    target="_blank"
  >
    <IconPhMagnifyingGlass /> 開放街圖
  </VPButton>
  <VPButton
    theme="alt"
    href="https://www.google.com/maps/search/?api=1&query=國立臺灣科技大學&query_place_id=ChIJrcDEdiGqQjQRVfQp7kRe25A"
    target="_blank"
  >
    <IconPhGoogleLogo /> Google 地圖
  </VPButton>
  <VPButton
    theme="alt"
    href="https://maps.apple.com/place?auid=1091116063745527859"
    target="_blank"
  >
    <IconPhAppleLogo /> Apple 地圖
  </VPButton>
</div>
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
  .actions {
    display: flex;
    gap: 8px;
    margin: 8px 0;
    overflow-x:auto;

    a {
      text-decoration: none;
    }
  }

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
