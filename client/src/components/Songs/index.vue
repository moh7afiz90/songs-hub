<template>
  <v-layout row wrap>
   <v-flex xs8 offset-xs2>
     <songs-search-panel class="mb-3"/>
     <songs-panel />
   </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsService from '@/services/SongsService'
import SongsSearchPanel from './SongsSearchPanel'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
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
  .song {
  padding: 20px;
   height: 330px;
   overflow: hidden;
 }
 
 .song-title {
   font-size: 30px;
 }
  .song-artist {
    font-size: 24px;
  }
  
  .song-genre {
   font-size: 18px;
  }
  
  .album-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 0 auto;
  }
  .song-card{
    margin: 20px;
  }
</style>