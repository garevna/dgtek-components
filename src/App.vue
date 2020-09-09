<template>
  <v-app>
    <v-main id="dgtek-polygons">
      <Button
        text="Success"
        :clicked.sync="successClicked"
        color="#09b"
      />
      <Button
        text="Error"
        :clicked.sync="errorClicked"
        color="#900"
      />
      <Button
        text="Disabled"
        :clicked.sync="disabledClicked"
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
import Popup from '@/components/Popup.vue'

export default {
  name: 'App',

  components: {
    Button,
    Popup
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
      if (!val) return
      this.type = 'success'
      this.opened = true
      this.successClicked = false
    },
    errorClicked (val) {
      if (!val) return
      this.type = 'error'
      this.opened = true
      this.errorClicked = false
    },
    disabledClicked (val) {
      if (!val) return
      this.type = 'disabled'
      this.opened = true
      this.disabledClicked = false
    }
  }
}
</script>
