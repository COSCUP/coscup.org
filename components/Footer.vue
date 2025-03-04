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
      <p>
        <a href="https://blog.coscup.org">
          <IconFaBrandsBlogger />
        </a>
        <a href="https://www.facebook.com/coscup">
          <IconFaBrandsFacebookSquare />
        </a>
        <a href="https://www.flickr.com/photos/coscup">
          <IconFaBrandsFlickr />
        </a>
        <a href="https://twitter.com/coscup">
          <IconFaBrandsTwitterSquare />
        </a>
        <a href="https://www.youtube.com/user/thecoscup">
          <IconFaBrandsYoutubeSquare />
        </a>
        <a href="https://t.me/coscupchat">
          <IconFaBrandsTelegram />
        </a>
        <a href="https://coscup.medium.com/">
          <IconFaBrandsMedium />
        </a>
      </p>
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

#footer :where(.history, .social) p {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 25px;
}

#footer :where(.history, .social) :is(span, a) {
  display: inline-block;
  width: 65px;

  text-align: center;
}

#footer .social {
  font-size: 24px;
}
</style>
