<template>
  <div class="home">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'axios3-5',
  created() {
    let source = axios.CancelToken.source()
    axios.get('/data.json', {
        cancelToken: source.token
    }).then( res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })

    //取消请求( message可选)
    source.cancel('cancel http')

    // 应用场景
    // cms 管理系统 请求时间长，
  }
}
</script>
