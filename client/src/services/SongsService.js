// used to hit the songs endpoint
import API from '@/services/API'

export default {
  index (search) {
    return API().get('songs', {
      params: {
        search: search
      }
    })
  },
  show (songId) {
    return API().get(`songs/${songId}`)
  },
  post (song) {
    return API().post('songs', song)
  },
  put (song) {
    return API().put(`songs/${song.id}`, song)
  }
}
