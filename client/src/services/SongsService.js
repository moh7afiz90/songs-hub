// used to hit the songs endpoint
import API from '@/services/API'

export default {
  index (credentials) {
    return API().get('songs')
  },
  show (songId) {
    return API().get(`songs/${songId}`)
  },
  post (song) {
    return API().post('songs', song)
  }
}
