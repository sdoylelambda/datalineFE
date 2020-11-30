import Vue from 'vue'
import App from './App.vue'
// External
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import VueMoment from 'vue-moment' // Date format
import moment from 'moment' // Spanish config for moment ***
import 'moment/locale/es' // Spanish config for moment

// Routes
// import HomeComponent from './components/pages/HomeComponent.vue';
// import HelloWorld from './components/pages/HelloWorld.vue';
// import BlogComponent from './components/pages/BlogComponent.vue';
// import FormComponent from './components/pages/FormComponent.vue';
// import PageComponent from './components/pages/PageComponent.vue'
import ErrorComponent from './components/pages/ErrorComponent.vue'
import Homepage from './components/pages/Homepage'
import About from './components/pages/About'
import Services from './components/pages/Services'
import CaseStudies from './components/pages/CaseStudies'
import Location from './components/pages/Location'
import Contact from './components/pages/Contact'

Vue.config.productionTip = false

// Global Libraries
// Router
Vue.use(VueRouter)
// Form Validation
Vue.use(Vuelidate)
// Date format
Vue.use(VueMoment, { moment })

const routes = [
  { path: '/home', name: 'home', component: Homepage },
  { path: '/about', name: 'about', component: About },
  { path: '/services', name: 'services', component: Services },
  { path: '/caseStudies', name: 'caseStudies', component: CaseStudies },
  { path: '/location', name: 'location', component: Location },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '*', component: ErrorComponent },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})
// End Router

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
