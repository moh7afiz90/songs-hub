<template>
  <!-- fixed in all down the page -->
  <v-toolbar fixed class="blue darken-3">
      <v-toolbar-title class="mr-4">
         GuitarTabTracker
      </v-toolbar-title>
      <v-toolbar-item>
          <v-btn flat light>Browse</v-btn>
      </v-toolbar-item>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-item class="hidden-sm-and-down">
          <v-btn>Login</v-btn>
          <v-btn>Sign Up</v-btn>
      </v-toolbar-item>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
