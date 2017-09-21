<template>
  
</template>

<script>
import SongsService from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.stat.route.params.songId
    this.song = await SongsService.show(songId).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
