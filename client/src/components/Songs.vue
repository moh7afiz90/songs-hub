<template>
  <v-layout column>
   <v-flex xs6 offset-xs3>
     <panel title="Songs">
       <div v-for="song in songs" :key="song.title">
        <li>{{song.title}}</li>
        <li>{{song.artist}}</li>
        <li>{{song.album}}</li>
       </div>
     </panel>
   </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  mounted () {
    // do a request to the backend for all the songs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
