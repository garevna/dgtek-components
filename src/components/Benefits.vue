<template>
    <v-container fluid class="homefone">
        <v-card flat class="transparent text-center mx-auto" max-width="960">
          <v-card-text class="text-center">
            <h2>{{ benefits.header }}</h2>
          </v-card-text>
          <v-card-text>
            <p>{{ benefits.text }}</p>
          </v-card-text>
        </v-card>

        <v-container fluid class="mt-5 mb-12">
          <v-card flat class="d-flex flex-wrap text-center transparent mx-auto" max-width="960">
            <v-card flat class="card--offer transparent text-center mx-auto" width="280">
              <IconFirst />
              <v-card-title>
                <h3>{{ benefits.items[0].title }}</h3>
              </v-card-title>
              <v-card-text>
                <p>{{ benefits.items[0].text }}</p>
              </v-card-text>
            </v-card>
            <v-card flat class="card--offer transparent text-center mx-auto" width="280">
              <IconSecond />
              <v-card-title>
                <h3>{{ benefits.items[1].title }}</h3>
              </v-card-title>
              <v-card-text>
                <p>{{ benefits.items[1].text }}</p>
              </v-card-text>
            </v-card>
            <v-card flat class="card--offer transparent text-center mx-auto" width="280">
              <IconThird />
              <v-card-title with="100%">
                <h3>{{ benefits.items[2].title }}</h3>
              </v-card-title>
              <v-card-text>
                <p>{{ benefits.items[2].text }}</p>
              </v-card-text>
            </v-card>
          </v-card>
    </v-container>
  </v-container>
</template>

<style scoped>
h3, p {
  width: 100%;
  text-align: center;
  color: #000;
}
.card--offer {
  width: 240px;
}
.benefit-image {
  width: 30%;
  margin-left: 35%;
}

@media (max-width: 420px), (max-height: 420px) {
  .card--offer {
    width: 90%!important;
  }
}
</style>

<script>

import { VContainer, VCard, VCardText, VCardTitle } from 'vuetify/lib'

import IconFirst from '@/components/IconFirst.vue'
import IconSecond from '@/components/IconSecond.vue'
import IconThird from '@/components/IconThird.vue'

export default {
  name: 'Benefits',
  components: {
    VContainer,
    VCard,
    VCardText,
    VCardTitle,
    IconFirst,
    IconSecond,
    IconThird
  },
  props: ['page', 'viewport'],
  data () {
    return {
      contact: false,
      benefits: null
    }
  },
  watch: {
    contact (val) {
      if (!val) return
      this.$emit('update:page', 'contact')
      this.contact = false
    }
  },
  beforeMount () {
    const benefits = sessionStorage.getItem('howToConnect') || sessionStorage.getItem('benefits')
    this.benefits = benefits ? JSON.parse(benefits) : {}
  }
}
</script>
