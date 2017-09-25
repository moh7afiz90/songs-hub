<template>
  <panel title="Search">
      <v-text-field
        v-model="search"
        label="Search by song title, artist, album, or genre"
        light
      >
      </v-text-field>
  </panel>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }
  }
}
</script>

<style>

</style>
