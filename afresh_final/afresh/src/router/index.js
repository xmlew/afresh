import Vue from 'vue'
import VueRouter from 'vue-router'
import Career from '../views/Career.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Dashboard from '../views/Dashboard.vue'
import Success from '../views/SignupComplete.vue'
import ResumeBuildDetails from '../views/ResumeBuildDetails.vue'
import ResumeBuild1 from '../views/ResumeBuild1.vue'
import ResumeBuild2 from '../views/ResumeBuild2.vue'
import Discover from '../views/Discover1.vue'
import Mentor from '../views/Mentor.vue'
import Microsoft from '../views/Microsoft.vue'
import Templates from '../views/Templates.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/signupcomplete',
    name: 'signupcomplete',
    component: Success
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/resumebuilddetails',
    name: 'resumebuilddetails',
    component: ResumeBuildDetails
  },
  {
    path: '/resumebuild1',
    name: 'resumebuild1',
    component: ResumeBuild1
  },

  {
    path: '/resumebuild2',
    name: 'resumebuild2',
    component: ResumeBuild2
  },

  {
    path: '/discover',
    name: 'discover',
    component: Discover
  },

  {
    path: '/templates',
    name: 'templates',
    component: Templates
  },

  {
    path: '/mentor',
    name: 'mentor',
    component: Mentor
  },

  {
    path: '/career',
    name: 'career',
    component: Career
  },
  {
    path: '/microsoft',
    name: 'microsoft',
    component: Microsoft
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
