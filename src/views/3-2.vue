<template>
  <div class="home">

  </div>
</template>

<script>
// axios配置参数

import axios from 'axios'
export default {
    name: 'axios3-2',
    created() {
        axios.create({
            baseURL:'http://localhost:8080', // 请求的域名，基本地址
            timeout: 1000 ,
            //设置请求的超时时长，有什么用？后端定义，后端处理时间长，401，超时，阻塞
            // 后端的内容，即使释放不需要的内容
            url:'/data.json',// 请求路径
            method:'get,post,put,patch.delete', // 请求方法
            headers:{
            token:''
            }, // 设置请求头
            params:{}, // 请求参数拼接在url上
            data: {} // 请求参数放在请求体
        })

        axios.get('/data.json'，{
            params:{},
        })

        // 1. axios全局
        axios.defaults.timeout = 1000
        axios.defaults.baseURL = "http://localhost:8080"

        // 2. axios实例配置
        let instance = axios.create()
        instance.defaults.timeout = 3000

        // 3.axios请求配置
        instance.get('/data.json', {
            timeout: 5000
        })

        // 优先级 1 > 2 > 3
        //实际开发
        //两种请求接口

        let instance = axios.create({
            baseURL: 'http://localhost:9090',
            timeout: 1000
        })

        let instance1 =axios.create({
            baseURl: 'http://localhost:9091',
            timeout: 3000
        })
        // baseURl, timeout, url, get,params
        instance.get('/contactList', {
            params: {
                id: 1
            }
        }).then( (res) => {
            console.log(res)
        })

        // baseURL, timeout, url,get
        instance1.get('/orderList', {
          timeout: 5000
        }).then( (res) => {
            console.log(res)
        })
    }
}
</script>
