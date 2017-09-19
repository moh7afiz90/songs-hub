<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          v-model="song.title"
          light
        ></v-text-field>

        <v-text-field
          label="Artist"
          v-model="song.artist"
          light
        ></v-text-field>

        <v-text-field
          label="Genre"
          v-model="song.genre"
          light
        ></v-text-field>

        <v-text-field
          label="Album"
          v-model="song.album"
          light
        ></v-text-field>

        <v-text-field
          label="Album Image Url"
          v-model="song.albumImageUrl"
          light
        ></v-text-field>

        <v-text-field
          label="YouTube ID"
          v-model="song.youtubeId"
          light
        ></v-text-field>

      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-4">
        <v-text-field
          label="Lyrics"
          multi-line
          v-model="song.lyrics"
          light
        ></v-text-field>

        <v-text-field
          label="Guitar Tab"
          multi-line
          v-model="song.tab"
          light
        ></v-text-field>
      </panel>
      <v-btn
        round primary dark
        class="blue darken-3"
        @click="create">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      // call API
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
