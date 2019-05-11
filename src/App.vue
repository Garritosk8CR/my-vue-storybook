<template>
  <v-app id="inspire">  
    <v-content class="grey lighten-4">
      <inbox-screen />
    </v-content>
  </v-app>
</template>

<script>
import store from "./store"
import InboxScreen from "./components/InboxScreen.vue"
import "../src/index.css"

export default {
  name: "app",
  store,
  components: {
    InboxScreen
  }
}
</script>


<style>
@import './index.css';
</style>

