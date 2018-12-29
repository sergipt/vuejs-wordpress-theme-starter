<template>
  <b-nav is-nav-bar v-if="allMenusLoaded">
    <b-nav-item href="#" v-for="item in allMenus['main'].items" :key= item.id>
      <router-link :to="{ name: item.slug }">
        {{ item.title }}
      </router-link>
    </b-nav-item>
  </b-nav>
</template>

<script>
import api from '../../api'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      allMenus: 'allMenus',
      allMenusLoaded: 'allMenusLoaded'
    }),
  }
}
</script>

<style lang="scss">
  .router-link-active {
    text-decoration: underline;
  }
</style>
