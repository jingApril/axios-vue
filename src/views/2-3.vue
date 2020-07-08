<template>
    <div class="home">

    </div>
</template>

<script>
// 并发请求:同时进行多个请求，并统一处理返回值

// 个人信息 和好友列表
import axios from 'axios'
export default {
    name: 'axios2-3',
    created() {
     // axios.all()  数组
     // axios.spread()
     //什么时候需要用到并发请求，需要同时请求多个接口，并且同时处理接口的返回值的时候
     axios.all(
         [
             axios.get('/data.json'),
             axios.get('/city.json')
         ]
     ).then(
         axios.spread((dataRes, cityRes) => {
             console.log(dataRes, cityRes)
         })
     )
    }
}
</script>

<style lang="scss" scoped>

</style>