<template>
  <!-- fixed in all down the page -->
  <v-toolbar fixed class="blue darken-3">
      <v-toolbar-title class="mr-4">
         <span class="home" :to="{name: 'root'}">SongsHub</span>
      </v-toolbar-title>
      <v-toolbar-items>
          <v-btn 
            flat 
            light
            :to="{name: 'songs'}"
            >Browse</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn 
            flat
            light
            v-if="!$store.state.isUserLoggedIn"
            :to="{name: 'login'}"
          >Login</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn 
            flat
            light
            v-if="!$store.state.isUserLoggedIn"
            :to="{name: 'register'}"
            >Sign Up</v-btn>
            <v-btn
              flat
              light
              v-if="$store.state.isUserLoggedIn"
              @click="logout()"
            >
              Logout
            </v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    cursor: pointer;
  }
  .home:hover {
    color: grey;
  }
</style>
