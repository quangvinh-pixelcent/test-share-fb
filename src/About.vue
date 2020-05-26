<template>
  <div class="about">
    <h1>ABOUT</h1>
    <ul>
        <li>About me point 1</li>
        <li>About me point 2</li>
        <li>About me point 3</li>
    </ul>
    <ShareNetwork
    network="facebook"
    url="https://news.vuejs.org/issues/180"
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
    quote="The hot reload is so fast it\'s near instant. - Evan You"
    hashtags="vuejs,vite">Share on Facebook</ShareNetwork>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  metaInfo: {
    title: 'Default App Title',
    titleTemplate: '%s | vue-meta Example App',
    htmlAttrs: {
      reptilian: 'gator'
    },
    headAttrs: {
      nest: 'eggs'
    },
    meta: [
      { name: 'description', content:  'Test share'},{ property: 'og:description', content: 'Test share'},
      { property: 'og:title', content: 'Test share'},
      { property: 'og:image', content: 'https://seukhaistorage.blob.core.windows.net/listing-images/img-5d0b5b53bf0540ee92d50e6bad9e33fb-832x468.png'},
      {name: 'twitter:title', content: 'Test share'},
      { name: 'twitter:description', content:  'Test share'},
      {name: 'twitter:image', content: 'https://seukhaistorage.blob.core.windows.net/listing-images/img-5d0b5b53bf0540ee92d50e6bad9e33fb-832x468.png'},
    ]
  },
}
</script>