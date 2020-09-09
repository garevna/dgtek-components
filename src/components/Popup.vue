<template>
  <v-row justify="center">
      <v-dialog v-model="opened" persistent max-width="290">
        <v-card class="pa-6" v-if="type==='success'">
          <v-card-title>
            <h2 text-color="primary">Thanks!</h2>
          </v-card-title>
          <v-card-text>
            <p>We'll get back to you shortly</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="transparent" text @click="$emit('update:opened', false)">CLOSE</v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="pa-6" v-if="type==='disabled'">
          <v-card-text class="text-center">
            <h2 text-color="primary">Sorry...</h2>
          </v-card-text>
          <v-card-text>
            <p>You use the demo version of this app</p>
            <p>And that's the reason you can't send your message to DGtek</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary" text @click="$emit('update:opened', false)">CLOSE</v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="pa-6" v-if="type==='error'">
          <v-card-text class="text-center">
            <h2 text-color="primary">Error</h2>
          </v-card-text>
          <v-card-text>
            <p>Please fill the required fields of the form</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="secondary" text @click="$emit('update:opened', false)">CLOSE</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</template>

<style scoped>
</style>

<script>

import { VRow, VDialog, VCard, VCardText, VBtn, VSpacer } from 'vuetify/lib'

export default {
  name: 'Popup',
  components: {
    VRow,
    VDialog,
    VCard,
    VCardText,
    VBtn,
    VSpacer
  },
  props: ['opened', 'type']
}
</script>
