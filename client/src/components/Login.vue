<template>
   <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue darken-3" dark>
          <v-toolbar-title>Login</v-toolbar-title>
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
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
              light
            ></v-text-field>
            <v-btn
              round primary dark
              class="blue darken-3"
              @click="login">
              Login
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
    async login () {
      try {
        await AuthService.login({
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

</style>
