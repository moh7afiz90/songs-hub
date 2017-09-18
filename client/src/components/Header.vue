<template>
  <!-- fixed in all down the page -->
  <v-toolbar fixed class="blue darken-3">
      <v-toolbar-title class="mr-4">
         <span class="home" @click="navigateTo({name: 'root'})">SongsHub</span>
      </v-toolbar-title>
      <v-toolbar-item>
          <v-btn flat light>Browse</v-btn>
      </v-toolbar-item>
      <v-spacer></v-spacer>
      <v-toolbar-item class="hidden-sm-and-down">
          <v-btn 
            v-if="!$store.state.isUserLoggedIn"
            @click="navigateTo({name: 'login'})"
          >Login</v-btn>
      </v-toolbar-item>
      <v-toolbar-item class="hidden-sm-and-down">
          <v-btn 
            v-if="!$store.state.isUserLoggedIn"
            @click="navigateTo({name: 'register'})"
            >Sign Up</v-btn>
      </v-toolbar-item>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
