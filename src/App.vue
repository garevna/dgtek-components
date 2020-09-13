<template>
  <v-app>
    <v-main>
      <!-- <AppHeader
        :page.sync="page"
        :viewport="viewport"
      /> -->
      <UserContact
          :userForm="userForm"
          :emailSubject="emailSubject"
          :emailText="emailText"
          :emailEndpoint="emailEndpoint"
      />
    </v-main>
    <Footer
      :page.sync="page"
      :viewport="viewport"
    />
  </v-app>
</template>

<script>

import 'dgtek-styles'

import 'dgtek-app-header'
import 'dgtek-app-header/dist/dgtek-app-header.css'

import 'dgtek-contact-form'
import 'dgtek-contact-form/dist/dgtek-contact-form.css'

import 'dgtek-testimonials'
import 'dgtek-testimonials/dist/dgtek-testimonials.css'

import 'dgtek-faq'
import 'dgtek-faq/dist/dgtek-faq.css'

import 'dgtek-benefits'
import 'dgtek-benefits/dist/dgtek-benefits.css'

// import 'dgtek-footer'
// import 'dgtek-footer/dist/dgtek-footer.css'

import Footer from '@/components/Footer.vue'

console.log(Footer)

export default {
  name: 'App',
  components: {
    Footer
  },
  data: () => ({
    page: '#top',
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    userForm: null,
    emailSubject: null,
    emailText: null,
    emailEndpoint: 'https://dka.dgtek.net/api/frontend/mail/land'
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
      this.userForm = JSON.parse(sessionStorage.getItem('userForm'))
      this.emailSubject = sessionStorage.getItem('emailSubject')
      this.emailText = sessionStorage.getItem('emailText')
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
