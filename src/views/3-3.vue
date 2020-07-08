<template>
  <div class="home">
  </div>
</template>

<script>
import axios from 'axios'
//  拦截器：在请求或相应被处理前拦截他们，发起请求之前做出处理，得到相应时候进行处理
// 请求拦截器
// 响应拦截器
export default {
  name: 'Home',
  created() {

    // 请求拦截器
    axios.interceptors.request.use(
        configc => {
            //在发送请求前做些什么
            return config
        },err => {
            //在请求错误的时候做什么 (还没到后端)
            return Promise.reject(err)
        }
    )

    //响应拦截器
    axios.interceptors.response.use(
        (res) => {
            // 请求成功对响应数据做处理
            return res
    },err => {
         // 响应错误做什么(到了后端，处理catch里面的err)
         return Promise.reject(err)
    })

     //  axiso.get().then().catch(err => {})

     //取消拦截器(了解)
    let interceptors = axios.interceptors.request.use(
         config => {
             config.headers = {
                 auth: true
             }
             return config
    })

    axios.interceptors.request.eject(interceptors)

    //  举例，例子 登录状态需要token(token:'')
    // 比如：评论，需要登陆的接口

    let instance = axiso.create({ })

    instance.interceptors.request.use (config => {
            config.headers.token = ''
            return  config
    })


    // 不需要登陆的接口,比如浏览微博
    let newInstance = axios.create({})

    // 移动端开发
    let instance_phone = axios.create({})

    instance_phone.interceptors.request.use(config => {
        // 请求前弹窗显示
        $('#modal').show()
        return config
    })

    instance_phone.interceptors.response.use(res => {
        // 弹窗隐藏
        $('#modal').hide()
        return res
    })


  }
}
</script>