// used to hit the songs endpoint
import API from '@/services/API'

export default {
  index (credentials) {
    return API().get('songs')
  }
}