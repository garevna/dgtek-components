import Vue from 'vue'
import Footer from './Footer.vue'

const Components = {
  Footer
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
