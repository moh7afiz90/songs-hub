<template>
    <panel title="Songs List">
        <v-btn 
        slot="action"
        :to="({name: 'songs-create'})"
        class="white"
        light
        medium
        fab
        right
        middle
        absolute
        >
        <i class="material-icons">add</i>
        </v-btn>
        <!--  -->
    <v-container grid-list-xs6 text-xs-center class="blue darken-1">
    <v-layout row wrap>
        <v-flex 
        xs6
        v-for="song in songs"
        :key="song.id"
        >
        <v-card 
            dark 
            class="white song-card"
            >
            <v-card-media>
            <img :src="song.albumImageUrl" height="300px" alt="">
            </v-card-media>
            <v-card-title class="headline black--text px-4">
            <h5><strong>{{song.title}}</strong></h5>
            </v-card-title>
            <div class="headline black--text">{{song.artist}}</div>
            <span class="grey--text">{{song.genre}}</span>
            <v-card-actions>
            <v-spacer></v-spacer>
            <div class="text-xs-center">
                <v-btn 
                class="text-xs-center"
                :to="{
                  name: 'song',
                  params: {
                    songId: song.id
                  }
                }"
                >
                View
                <br>
                <i class="material-icons" large> pageview</i>
            </v-btn>
            </div>
            </v-card-actions>
        </v-card>
        </v-flex>
    </v-layout>
    </v-container>
    </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
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