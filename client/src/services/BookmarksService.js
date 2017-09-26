import API from '@/services/API'

export default {
  index (params) {
    return API().get('bookmarks', {
      params: params
    })
  },
  post (bookmark) {
    return API().post('bookmarks', {
      params: bookmark
    })
  },
  delete (bookmarkId) {
    return API().get(`bookmarks/${bookmarkId}`)
  }
}
