<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import axios from 'axios'
// axios 实例
let arr  =[]
let arr = new  Array()
// 创建实例
// 后端接口地址有多个，并且超时时长不一样，后端定义，
// 401超时
export default {
  name: 'axios3-1',
  created() {

    let instance = axios.create({
            baseURL:'http://localhost:8080',
            timeout: 1000
    })
    instance.get('/data.json').then( res => {
        console.log(res)
    })

    let instance2 = axios.create({
        baseURL: 'http://localhost:9090',
        timeout:5000
    })
    instance2.get('/data.json').then( res => {
        console.log(res)
    })

  }
}
</script>
