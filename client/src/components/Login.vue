<template>
   <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
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
        <div class="danger-alert">
          <h6><strong>{{error}}</strong></h6>
        </div>
        <v-btn
          round primary dark
          class="blue darken-3"
          @click="login">
          Login
        </v-btn>
      </panel>
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
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        })
        // Fetched from Store
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
