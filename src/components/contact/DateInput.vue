<template>
  <div class="date-input">
    <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
                v-model="date"
                :label="field.placeholder"
                prepend-icon="mdi-calendar-range"
                readonly
                v-bind="attrs"
                v-on="on"
          ></v-text-field>
        </template>
      <v-date-picker
            v-model="date"
            @input="menu = false"
            locale="en"
            :min="currentDate"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<style scoped>
.date-input {
  border: solid 1px #aaa;
  border-radius: 4px;
  margin: 8px;
  padding: 8px 16px;
}
</style>

<script>

import { VMenu, VDatePicker, VTextField } from 'vuetify/lib'
import en from 'vuetify/es5/locale/en'

export default {
  name: 'DateInput',
  components: {
    VMenu,
    VDatePicker,
    VTextField
  },
  lang: {
    locales: {
      en
    },
    current: 'en'
  },
  data: () => ({
    menu: false,
    currentDate: new Date().toISOString().slice(0, 10)
  }),
  props: ['field', 'value', 'error'],
  computed: {
    date: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('update:error', this.field.required && !val)
        this.$emit('update:value', val)
      }
    }
  }
}
</script>
