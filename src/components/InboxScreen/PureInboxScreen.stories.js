import { storiesOf } from '@storybook/vue'
import PureInboxScreen from './PureInboxScreen'
import store from '../../store/store'


storiesOf('PureInboxScreen', module)
    .add('default', () => {
        
        return {
            components: {
                PureInboxScreen
            },
            template: `<pure-inbox-screen/>`,
            store
        }
    })
    .add('error', () => ({
        components: {
            PureInboxScreen
        },
        template: `<pure-inbox-screen :error="true"/>`,
    }))