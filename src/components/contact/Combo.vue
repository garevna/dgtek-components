<template>
  <v-text-field
      :placeholder="field.placeholder"
      :error="error"
      outlined
      hide-details
      height="32"
      :color="color"
      v-model="result"
      class="user-inputs"
      :append-icon="validationIcon"
      @input="validate($event)"
  ></v-text-field>
</template>

<style>
.v-text-field.v-text-field--enclosed {
    margin: 8px!important;
}
</style>
<style scoped>

.user-inputs {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #656565;
}

@media screen and (max-width: 600px) {
  .user-inputs {
    font-size: 14px;
  }
}
@media screen and (max-width: 320px) {
  .user-inputs {
    font-size: 13px;
  }
}
</style>

<script>

export default {
  name: 'Combo',
  props: ['field', 'value', 'error'],
  data () {
    return {
      normalColor: '#656565',
      errorColor: '#FF0E00',
      validColor: '#4CAF50',
      color: '#656565',
      validationIcon: '',
      available: null
    }
  },
  computed: {
    result: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('update:value', val)
      }
    }
  },
  methods: {
    validate (val) {
      const error = this.field.required ? this.field.available.indexOf(val) === -1 : false
      this.$emit('update:error', error)
      this.color = error ? this.errorColor : this.validColor
      this.validationIcon = error ? '$invalid' : ''
    }
  }
}
</script>
