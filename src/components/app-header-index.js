import Vue from 'vue'
import AppHeader from './AppHeader.vue'

const Components = {
  AppHeader
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
