import api from '../../api'
import * as types from '../mutation-types'
import { isNumber } from 'util';

// initial state
const state = {
  all: {},
  loaded: false,
}

// getters
const getters = {
  allMenus: state => state.all,
  allMenusLoaded: state => state.loaded
}

// actions
const actions = {
  getAllMenus ({ commit, dispatch }) {
    api.getMenus( menus => {
      menus.forEach(menu => {
        dispatch('getMenu', menu.slug)
      })
      commit(types.MENUS_LOADED, true)
    })
  },
  getMenu ({ commit }, id) {
    api.getMenu(id, menu => {
      commit(types.STORE_FETCHED_MENU, { menu, id })
    })
  }
}

// mutations
const mutations = {
  [types.STORE_FETCHED_MENU] (state, { menu, id }) {
    state.all[id] = menu
  },

  [types.MENUS_LOADED] (state, val) {
    state.loaded = val
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
