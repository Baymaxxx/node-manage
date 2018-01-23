import axios from 'axios'

const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
export function getInternetNews() {
    return axios
      .get(
        API_PROXY +
          'https://zhuanlan.zhihu.com/api/columns/NewsFlash/posts?limit=1'
      )
      .then(
        res => {
            return res.data
        },
        err => {
            console.log(err)
        }
      )
}
