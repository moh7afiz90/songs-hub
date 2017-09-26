<template>
    <panel title="Song Metadata">
    <v-layout>
        <v-flex xs6>
        <div class="song-title">
            {{song.title}}
        </div>
        <div class="song-artist">
            {{song.artist}}
        </div>
        <div class="song-genre">
            {{song.genre}}
        </div>

   
      <!-- Bookmark button -->
        <v-btn
          v-if="isUserLoggedIn && !isBookmarked"
          round primary dark
          class="blue darken-3"
          @click="bookmark"
        >
        Bookmark
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn && isBookmarked"
          round primary dark
          class="blue darken-3"
          @click="unBookmark"
        >
        UnBookmark
        </v-btn>
         <!-- Edit Song Button -->
        <v-btn
          round primary dark
          class="blue darken-3"
          :to="{
            name: 'song-edit',
            params () {
              return {
                songId: song.id
              }
            }
          }"
        >
          Edit
        </v-btn>
        </v-flex>
    <!-- Album Image Section -->
        <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl" />
            <br>
            {{song.album}}
        </v-flex>
    </v-layout>
    </panel>
</template>

<script>
import { mapState } from 'vuex'
import BookmarkService from '@/services/BookmarkService'
export default {
  props: [
    'song'
  ],
  data () {
    return {
      isBookmarked: false
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    const bookmark = (await BookmarkService.index({
      songId: 1,
      userId: 1
    })).data
    this.isBookmarked = !!bookmark
    console.log('bookmark', this.isBookmarked)
  },
  methods: {
    bookmark () {
      console.log('bookmark')
    },
    unBookmark () {
      console.log('Unbookmark')
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
  .song-genre{
    font-size: 18px;
  }
  .album-image{
    width: 70%;
    margin: 0 auto;
  }
</style>
