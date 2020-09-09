import Vue from 'vue'
import Popup from './Popup.vue'

const Components = {
  Popup
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
