import Vue from 'vue'
import Benefits from './Benefits.vue'

const Components = {
  Benefits
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
