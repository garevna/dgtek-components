<template>
  <v-app>
    <v-main id="dgtek-polygons">
      <UserContact
        :userForm="userForm"
        :emailSubject="emailSubject"
        :emailText="emailText"
        :emailEndpoint="mailEndpoint"
    />
    </v-main>
  </v-app>
</template>

<script>

import 'dgtek-styles'
import 'dgtek-popup'

import UserContact from '@/components/UserContact.vue'

export default {
  name: 'App',

  components: {
    UserContact
  },

  data: () => ({
    userForm: null,
    emailSubject: '',
    emailText: '',
    mailEndpoint: 'https://dka.dgtek.net/api/frontend/mail/land'
  }),

  methods: {
    async getData () {
      const content = await (await fetch('https://api.pineapple.net.au/content/dgtek-1')).json()
      Object.keys(content).forEach((item) => {
        sessionStorage.setItem(item, JSON.stringify(content[item]))
      })
      this.emailSubject = content.emailSubject
      this.emailText = content.emailText
      this.userForm = content.userForm
    }
  },
  beforeMount () {
    this.getData()
  }
}
</script>
