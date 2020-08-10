<template>
  <v-app>
    <v-main id="dgtek-polygons">
      <Polygons :saveData.sync="saveData"/>
    </v-main>
  </v-app>
</template>

<script>

import Polygons from '@/components/Polygons'

export default {
  name: 'App',

  components: {
    Polygons
  },

  data: () => ({
    saveData: false
  }),

  watch: {
    saveData (val) {
      console.log('App: saveData ', val)
      if (val) this.save()
    }
  },

  methods: {
    async save () {
      // const polygons = {
      //   features: [],
      //   type: 'FeatureCollection'
      // }
      // polygons.features = ['ServiceAvailable', 'BuildCommenced', 'ComingSoon']
      //   .flatMap(collectionType => localStorage.getFeaturesByType(collectionType))
      console.log(localStorage.getAllPolygons())
      this.saveData = false
    }
  }
}
</script>
