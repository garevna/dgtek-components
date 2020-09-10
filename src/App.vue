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

import Benefits from '@/components/Benefits.vue'

export default {
  name: 'App',

  components: {
    Benefits
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
