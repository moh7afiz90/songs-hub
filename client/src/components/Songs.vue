<template>
  <v-layout column>
   <v-flex xs6 offset-xs3>
     <panel title="Songs">
          <v-btn 
            slot="action"
            @click="navigateTo({name: 'songs-create'})"
            class="blue darken-3"
            dark
            medium
            fab
            right
            middle
            absolute
          >
          <i class="material-icons">add</i>
          </v-btn>

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
import SongsService from '@/services/SongsService'
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
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
