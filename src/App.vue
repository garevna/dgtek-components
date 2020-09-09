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
  }
}
</script>
