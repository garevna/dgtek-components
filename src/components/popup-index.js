import Vue from 'vue'
import UserContact from './UserContact.vue'

const Components = {
  UserContact
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
