<template>
    <div>

    </div>
</template>

<script>
/*
axios 请求方法：get, post, put, patch, delete
get: 获取数据
post: 提交数据( 表单提交，文件上传)  新建
put:更新数据 (所有的数据都提供到服务端) 更新
patch: 更新数据 (只将修改的数据推送到服务端) 数据量很大使用patch
delete:删除数据
请求方法都是由后端定义的，实际工作可以协商
*/
import axios from 'axios'
    export default {
        name: 'axios2-2',
        created() {
            // http://localhost:8080/data.json?id=12
            axios.get('/data.json', {
                params: {
                    id: 12
                }
            }).then((res) => {
            console.log(res);
            })

            axios({
                method: 'get',
                url: '/data.json',
                params: {
                    id: 12
                }
            }).then((res) => {
                console.log(res)
            })

            // post
            // form-data 表单提交 (图片上传，文件上传)
            // applicition/json
            let data  = {
                id: 12
            }

            axios.post('/post', data).then( res => {
                console.log(res)
            })

            axios({
                method: 'post',
                url: '/post',
                data: data
            }).then( res => {
                console.log(res)
            })

            // form-data 请求
            let formData  = new FormData();
            for( let key in data ) {
                formData.append(key, data[key])
            }
            axios.post('/post', formData).then( res => {
                console.log(res)
            })

            // put
            axios.put('/put', data).then( res => {
                console.log(res);
            })
            axios.patch('/patch', data).then(res => {
                console.log(res);
            })

            // delete 请求
            axios.delete('/delete', {
                params: {
                    id: 12
                }
            }).then( res => {
                console.log(res)
            })

            axios({
                method: 'delete',
                url: 'delete',
                params: {},
                data: {}
            }).then(res => {
                console.log(res)
            })
        }

    }
</script>

<style lang="scss" scoped>

</style>