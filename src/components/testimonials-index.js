import Vue from 'vue'
import Testimonials from './Testimonials.vue'

const Components = {
  Testimonials
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
