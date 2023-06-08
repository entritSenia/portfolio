// DEFINE OUR ROUTING RULES

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomeComponent.vue'
import Resume from '../components/ResumeComponent.vue'
import Projects from '../components/ProjectsComponent.vue'
import Skills from '../components/SkillsComponent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      redirect: '/'
    },
    // {
    //   path: '/about',
    //   component: About
    // },
    {
      path: '/skills',
      component: Skills
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/resume',
      component: Resume
    }
    // {
    //    path: '/:catchall(.*)*',
    //    name: 'Not Found',
    //    component: NotFound
    //  }
  ]
})

export default router
