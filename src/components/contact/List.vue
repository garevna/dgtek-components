<template>
  <v-select
      :items="field.available"
      outlined
      hide-details
      class="combo-box-input"
      v-model="selected"
      :label="field.placeholder"
      :error="error"
  ></v-select>
</template>

<style scoped>
  .combo-box-input {
    margin-top: 24px;
    margin-bottom: 16px;
  }
</style>

<script>

export default {
  name: 'List',
  props: ['field', 'value', 'error'],
  computed: {
    selected: {
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
