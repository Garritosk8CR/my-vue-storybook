/* eslint-disable space-before-function-paren */
import { defaultTaskList } from '../../components/TaskList/PureTaskList.stories'

const state = {
    tasks: defaultTaskList
}
const getters = {
    pinTask(context, id) {
        action('pinTask')(id)
    },
    archiveTask(context, id) {
        action('archiveTask')(id)
    }
}

const mutations = {
}

const actions = {
}

export default {
    state,
    mutations,
    actions,
    getters
}
 