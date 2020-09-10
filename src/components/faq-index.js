import Vue from 'vue'
import FAQ from './FAQ.vue'

const Components = {
  FAQ
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
