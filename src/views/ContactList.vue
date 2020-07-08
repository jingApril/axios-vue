<template>
  <div class="home">
    <van-contact-list
        :list="list"
        @add="onAdd"
        @edit="onEdit"
    />
  <van-popup v-model="showEdit" position="bottom">
    <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
    />
  </van-popup>
  </div>
</template>

<script>
import { ContactList, Toast, ContactEdit, Popup } from 'vant';
import axios from 'axios'

export default {
  name: 'ContactList',
  components: {
      [ContactList.name]:ContactList,
      [ContactEdit.name]:ContactEdit,
      [Popup.name]:Popup
  },
  data(){
      return {
        //   {
        //     id:1,
        //     name:'',
        //     tel:''
        //   }
        list: [],
        instance:null, // axios实例
        showEdit: false, // 编辑弹窗的显隐
        editingContact: {}, // 正在编辑的联系人数据
        isEdit: false, // 是否正在编辑
      }
  },
  created() {
    this.instance = axios.create({
      baseURL: 'http://localhost:9000/api',
      timeout: 1000
    })
    this.getList()

  },
  methods: {
      // 获取联系人列表
      getList() {
        this.instance.get('/contactList')
          .then(res => {
            this.list = res.data.data
          }).catch( err => {
            console.log(err);
              Toast('请求失败，请稍后尝试')
          })
      },
      // 添加联系人
      onAdd() {
         this.showEdit = true
         this.isEdit = false

      },
      // 编辑联系人
      onEdit(info) {
          this.showEdit = true
          this.isEdit = true
          this.editingContact = info
      },
      // 保存联系人
      onSave(info) {
          if( this.isEdit) {
              // 编辑保存
              this.instance.put('/contact/edit', info).then( res => {
                if(res.data.code === 200) {
                    Toast('编辑成功')
                    this.showEdit = false
                    this.getList()
                }
              }).catch(() => {
                  Toast('编辑失败')
              })
          } else {
             // 新建保持
            this.instance.post('/contact/new/json', info)
                  .then((res) => {
                      if(res.data.code === 200) {
                          Toast('新建成功')
                          this.showEdit = false
                          this.getList()
                      }
                  }).catch(() => {
                  Toast('新建失败')
             })
          }
      },
      // 删除联系人
      onDelete(info) {
         this.instance.delete('/contact', {
            params: {
              id: info.id
            }
         }).then(res => {
              if(res.data.code === 200 ) {
                 Toast('删除成功！')
                 this.showEdit = false
                 this.getList()
              }
         }).catch( () => {
            Toast('删除失败，请稍后再试')
         })

      }
  },
}
</script>

<style scoped>
    .home{}
    .van-contact-list_add{
      z-index: 0;
    }
    .van-popup {
      height: 100%;
    }
</style>
