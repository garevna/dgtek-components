<template>
  <v-card class="user-info mx-auto pa-6 homefone" max-width="480" v-if="userForm">
    <v-card-text class="text-center">
      <h4>{{ userForm.title }}</h4>
    </v-card-text>
    <v-card-text class="mx-0 px-0" width="100%" v-if="fields">
      <div v-for="(field, index) in fields" :key="index">
        <InputWithValidation
              :field="field"
              :value.sync="field.value"
              :error.sync="field.error"
              v-if="field.type === 'input-with-validation'"
        />
        <List
              :field="field"
              :value.sync="field.value"
              :error.sync="field.error"
              v-if="field.type === 'selector'"
        />
        <InputWithValidation
              :field="field"
              :value.sync="field.value"
              :error.sync="field.error"
              v-if="field.type === 'phone-number'"
        />
        <NumberInput
              :label="field.placeholder"
              :fieldIndex="index"
              v-if="field.type === 'number'"
        />
        <Combo
              :field="field"
              :value.sync="field.value"
              :error.sync="field.error"
              v-if="field.type === 'combobox'"
        />
        <DateInput
              :field="field"
              :value.sync="field.value"
              :error.sync="field.error"
              v-if="field.type === 'date-input'"
        />
        <TimeInput
              :field="field"
              :value.sync="field.value"
              :error.sync="field.error"
              v-if="field.type === 'time-input'"
        />
        <InputMessage
              :field="field"
              :value.sync="field.value"
              :error.sync="field.error"
              v-if="field.type === 'textarea'"
        />
      </div>
    </v-card-text>

    <v-card-text class="ma-auto" height="10">
      <v-progress-linear
          color="secondary"
          buffer-value="0"
          stream
          v-if="progress"
          class="mx-auto"
          style="width: 200px"
      ></v-progress-linear>
    </v-card-text>

    <v-card-text class="text-center">
      <v-btn
          color="buttons"
          dark
          min-width="180"
          height="48"
          class="submit-button px-auto mx-auto"
          @click="sendUserRequest"
      >
        {{ userForm.button }}
      </v-btn>
    </v-card-text>

    <Popup :opened.sync="popupOpened" :type="popupType" />
  </v-card>
</template>

<style scoped>

.user-info {
  width: 640px;
  padding-left: 80px;
  border-radius: 15px!important;
}
h4 {
  width: 100%;
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
}

@media screen and (max-width: 600px) {
  .v-btn__content {
    font-size: 16px!important;
  }
  .user-info {
    width: 100%!important;
  }
}
@media screen and (max-width: 320px) {
  .user-info {
    width: 300px!important;
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>

<script>

import { VCard, VCardText, VProgressLinear, VBtn } from 'vuetify/lib'

import NumberInput from './contact/Number.vue'
import List from './contact/List.vue'
import Combo from './contact/Combo.vue'
import DateInput from './contact/DateInput.vue'
import TimeInput from './contact/TimeInput.vue'
import InputWithValidation from './contact/InputWithValidation.vue'
import InputMessage from './contact/InputMessage.vue'

export default {
  name: 'UserContact',
  components: {
    VCard,
    VCardText,
    VProgressLinear,
    VBtn,
    InputWithValidation,
    List,
    NumberInput,
    DateInput,
    TimeInput,
    Combo,
    InputMessage
  },
  props: ['userForm', 'emailSubject', 'emailText', 'emailEndpoint'],
  data () {
    return {
      fieldTypes: {
        text: 'input-with-validation',
        number: 'input-with-validation',
        email: 'input-with-validation',
        phone: 'input-with-validation',
        state: 'selector',
        postcode: 'input-with-validation',
        date: 'date-input',
        time: 'time-input',
        list: 'selector',
        combo: 'combobox',
        message: 'textarea'
      },
      validators: {
        text: val => val.length > 0,
        number: val => val.match(/^[0-9]*$/),
        email: val => val.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        phone: val => val.match(/^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{1}( |-){0,1}[0-9]{3}$/),
        state: null,
        postcode: val => val.match(/^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/),
        list: null,
        combo: function (val) { return this.available.indexOf(val) !== -1 },
        message: val => val.length > 0
      },
      ready: false,
      fields: null,
      popupOpened: false,
      popupType: null,
      progress: false
    }
  },
  watch: {
    userForm: {
      deep: true,
      handler (val) {
        this.ready = !!val
        if (!val) return
        this.setFieldsToShow(val.fieldsToShow)
        this.ready = true
      }
    }
  },

  methods: {
    setFieldsToShow (payload) {
      if (!payload || !Array.isArray(payload)) return null
      this.fields = payload.map((field) => {
        if (field.placeholder.indexOf('Date') >= 0) {
          field.type = 'date'
        }
        if (field.placeholder.indexOf('Time') >= 0) {
          field.type = 'time'
        }
        return {
          type: this.fieldTypes[field.type],
          placeholder: field.placeholder,
          required: field.required,
          value: '',
          validator: this.validators[field.type],
          error: false,
          available: field.type === 'state' ? ['VIC', 'NSW', 'ACT', 'QLD', 'SA', 'WA', 'TAS', 'NT'] : field.available || null
        }
      })
      this.initFields()
      this.ready = true
    },

    initFields () {
      for (const field of this.fields) {
        field.value = ''
        field.error = false
      }
    },

    createMessage () {
      const details = []
      let message = ''
      for (const field of this.fields) {
        field.value.split('<').join('&lt;')
        if (field.type === 'textarea') {
          message = `
            <fieldset>
              <legend>Your message:</legend>
              <p>${field.value.split('\n').join('<br>')}</p>
            </fieldset>
          `
        } else details.push(`<p>${field.placeholder}: ${field.value}</p>`)
      }
      return `
        <p>${this.emailText}</p>
        <fieldset>
          <legend>Details:</legend>
          ${details.join('')}
        </fieldset>
        ${message}
      `
    },

    async sendEmail (email) {
      const message = this.createMessage()
      const response = await fetch(this.emailEndpoint, {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subject: this.emailSubject || 'Ultra-Fast Fibre',
          email,
          message
        })
      })
      this.initFields()
      return response.ok
    },

    async sendUserRequest () {
      // if (location.host.indexOf('pineapple.net.au') < 0) {
      //   this.popupType = 'disabled'
      //   this.popupOpened = true
      //   return
      // }
      const error = this.fields.find(field => field.error)
      const emailField = this.fields.find(field => field.placeholder.toLowerCase().indexOf('email') >= 0)
      if (error || !emailField || !emailField.value) {
        this.popupType = 'error'
        this.popupOpened = true
        return
      }
      this.progress = true
      this.popupType = await this.sendEmail(emailField.value) ? 'success' : 'error'
      this.progress = false
      this.popupOpened = true
    }
  },
  mounted () {
    if (this.userForm) {
      this.setFieldsToShow(this.userForm.fieldsToShow)
      this.ready = true
    }
  }
}

</script>
