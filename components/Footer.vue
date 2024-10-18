<script setup lang="ts">
import { conference } from '#data/conference.js'
</script>

<template>
  <footer id="footer">
    <section class="title">
      <h1>COSCUP</h1>
      <h2>Conference for Open Source Coders, User, and Promoters</h2>
    </section>
    <section class="contact">
      <div>
        <p>Attendee Service</p>
        <p>attendee@coscup.org</p>
      </div>
      <div>
        <p>Sponsorship</p>
        <p>sponsorship@coscup.org</p>
      </div>
      <div>
        <p>Program</p>
        <p>program@coscup.org</p>
      </div>
      <div>
        <p>Attendee Service</p>
        <p>marketing@coscup.org</p>
      </div>
    </section>
    <section class="history">
      <h1>Websites</h1>
      <p>
        <span
          v-for="year in Array.from({ length: conference.year - 2006 }, (_, k) => k + 2006)"
          :key="year"
        >
          {{ year }}
        </span>
      </p>
    </section>
    <section class="social">
      <h1>Social Media</h1>
    </section>
  </footer>
</template>

<style scoped>
#footer {
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 64px;
}

#footer section {
  margin: 50px 0;
}

#footer h1 {
  font-size: 28px;
  font-weight: bold;
  text-align: center;

  margin: 20px;
}

#footer h2 {
  font-size: 20px;
  text-align: center;

  margin: 20px;
}

#footer .contact {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  font-size: 18px;
  text-align: center;
  row-gap: 25px;
}

#footer .history p {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 25px;
}

#footer .history span {
  display: inline-block;
  width: 65px;

  text-align: center;
}
</style>
