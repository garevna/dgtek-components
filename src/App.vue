<template>
  <v-app>
    <v-main id="dgtek-polygons">
      <Button
        text="Success"
        :clicked="successClicked"
        color="#09b"
      />
      <Button
        text="Error"
        :clicked="errorClicked"
        color="#900"
      />
      <Button
        text="Error"
        :clicked="disabledClicked"
        color="#444"
      />
      <Popup
          :opened.sync="opened"
          :type="type"
      />
    </v-main>
  </v-app>
</template>

<script>

import 'dgtek-styles'

import Button from '@/components/Button.vue'

export default {
  name: 'App',

  components: {
    Button
  },

  data: () => ({
    type: 'error',
    opened: false,
    successClicked: false,
    errorClicked: false,
    disabledClicked: false
  }),

  watch: {
    successClicked (val) {
      this.type = 'success'
      this.opened = true
    },
    errorClicked (val) {
      this.type = 'error'
      this.opened = true
    },
    disabledClicked (val) {
      this.type = 'disabled'
      this.opened = true
    }
  }
}
</script>
