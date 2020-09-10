# dgtek-benefits

This component is designed to be utilized in dgtek.net projects only.

It can't be used outside the dgtek.net and landing pages of dgtek.net

____________________________________________

## install component
```
yarn add dgtek-benefits
```

### Load the component and it's styles

App.vue
```
import 'dgtek-benefits'
import 'dgtek-benefits/dist/dgtek-benefits.css'
```

### Use the component

```
<Benefits
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
      <Benefits
        :page.sync="page"
        :viewport="viewport"
    />
    </v-main>
  </v-app>
</template>

<script>

import 'dgtek-styles'

import 'dgtek-benefits'
import 'dgtek-benefits/dist/dgtek-benefits.css'

export default {
  name: 'App',

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
