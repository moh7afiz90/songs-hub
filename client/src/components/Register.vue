<template>
  <div>
    <h1>Register Component</h1>
    <br>
    <input 
        type="email" 
        name="email"
        v-model="email"
        placeholder="Email"  />
    <br>
    <input 
        type="password" 
        name="passowrd"
        v-model="password" 
        placeholder="Password"
    />
    <br>
    <button
      @click="register">
     Register</button>
    
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
