<template>
  <v-textarea
        :placeholder="field.placeholder"
        :error="error"
        outlined
        color="#656565"
        style="margin-top:32px!important;"
        auto-grow
        v-model="message"
        class="user-inputs"
  ></v-textarea>
</template>

<style scoped>
</style>

<script>

export default {
  name: 'InputMessage',
  props: ['field', 'value', 'error', 'required'],
  computed: {
    message: {
      get () {
        return this.field.value
      },
      set (val) {
        this.$emit('update:error', this.required ? val.length < 10 : false)
        this.$emit('update:value', val)
      }
    }
  }
}
</script>
