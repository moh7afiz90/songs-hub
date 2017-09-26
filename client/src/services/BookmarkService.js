import API from '@/services/API'

export default {
  index (params) {
    return API().get('bookmarks', {
      params: params
    })
  }
}
