<template>
<div>
  <!-- Left Panel -->
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song"></song-metadata>
    </v-flex>
    <v-flex xs6 class="ml-2"> 
      <you-tube :youtubeId="song.youtubeId"></you-tube>
    </v-flex>
  </v-layout>
  <!-- Right Panel -->
  <v-layout>
    <v-flex xs6 class="mt-2">
      <tab :song="song"></tab>
    </v-flex>

    <v-flex xs6 class="ml-2 mt-2">
      <lyrics :song="song"></lyrics>
    </v-flex>
  </v-layout>
</div>
  
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'
export default {
  data () {
    return {
      song: ''
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  textarea{
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
  }
</style>
