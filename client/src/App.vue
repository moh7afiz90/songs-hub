<template>
  <div id="app">
    <v-app dark>
      <page-header />  
        <main>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </main>
      <footer/>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import Footernote from '@/components/Footernote.vue'
export default {
  name: 'app',
  components: {
    PageHeader,
    Footernote
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} 
.danger-alert {
  color: red;
}
</style>