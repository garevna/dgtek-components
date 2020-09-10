# dgtek-testimonials

This component is designed to be utilized in dgtek.net projects only.

It can't be used outside the dgtek.net and landing pages of dgtek.net

____________________________________________

## install component
```
yarn add dgtek-testimonials
```

### Load the component and it's styles

App.vue
```
import 'dgtek-testimonials'
import 'dgtek-testimonials/dist/dgtek-testimonials.css'
```

### Use the component

```
<Testimonials
    :page.sync="page"
    :viewport="viewport"
/>
```

### Example

###### App.vue
```
<template>
  <v-app>
    <v-main>
      <Testimonials
        :page.sync="page"
        :viewport="viewport"
    />
    </v-main>
  </v-app>
</template>

<script>

import 'dgtek-styles'

import Testimonials from '@/components/Testimonials.vue'

export default {
  name: 'App',

  components: {
    Testimonials
  },

  data: () => ({
    page: '#top',
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }),

  methods: {
    onResize () {
      this.viewport.width = window.innerWidth
      this.viewport.height = window.innerHeight
    },
    async getContent () {
      const content = await (await fetch('https://api.pineapple.net.au/content/dgtek-1')).json()
      Object.keys(content).forEach((item) => {
        sessionStorage.setItem(item, JSON.stringify(content[item]))
      })
    }
  },
  created () {
    this.getContent()
  },
  mounted () {
    window.addEventListener('resize', this.onResize, { passive: true })
  }
}
</script>
```
