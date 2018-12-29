import Vue from 'vue'
import Router from 'vue-router'

// Components
import Post from '../components/Post/Post.vue'
// import Page from '../components/pages/Page.vue'
import Home from '../components/pages/Home.vue'
import AboutUs from '../components/pages/AboutUs.vue'
import Projects from '../components/pages/Projects.vue'
import Contact from '../components/pages/Contact.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/acerca-de',
      name: 'acerca-de',
      component: AboutUs,
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: Projects,
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contact,
    },
    {
      // Assuming you're using the default permalink structure for posts
      path: '/:year/:month/:day/:postSlug',
      name: 'Post',
      component: Post,
    },
    // {
    //   path: '/:pageSlug',
    //   name: 'Page',
    //   component: Page,
    //   props: true,
    // },
  ],
  mode: 'history',
  base: '',

  // Prevents window from scrolling back to top
  // when navigating between components/views
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
