<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue darken-3" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
            <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              name="password"
              label="Email"
              v-model="email"
              light
            >
            </v-text-field>
            <v-text-field
              name="password"
              label="Password"
              v-model="password"
              light
            >
            </v-text-field>
<!--             
            <v-alert
              error
              v-model="error"
              dismissible
              light
              transition="scale-transition"
            >
            </v-alert> -->
            <!-- <div class="error" v-html="error"></div> -->
            <v-btn
              round primary dark
              class="blue darken-3"
              @click="register">
              Register
            </v-btn>
            </div>  
          </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /* .error{
   color:red;
 } */
</style>
