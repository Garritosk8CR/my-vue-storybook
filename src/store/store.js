import Vue from 'vue'
import Vuex from 'vuex'
import Tasks from './modules/Tasks'

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import { defaultTaskList } from '../components/TaskList/PureTaskList.stories'
Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      loading: false,
      error: null,
      tasks: defaultTaskList
   },
   getters,
   mutations,
   actions,
   modules: {
      Tasks
   }
})
