<template>
<div>
  <hsy-dialog class="confirm" v-model="visible1">
      <div slot="title">Remove</div>
      <div slot="body" style="width: 500px;">

        <div class="modal-body">
          <div>This operation is irreversible, are you sure?</div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-default" @click="handleYes">yes</button>
        </div>
      </div>
    </hsy-dialog>

  <div class="container">
    <div class="col-sm-8 col-sm-offset-2">
      <div class="text-center  text-info h2">标题</div>
      <form role="form">
        <div class="form-group">
          <label for="username">用户名：</label>
          <input v-model="formValue.username" id="username" name="username" placeholder="请输入用户名" type="text" class="form-control"/>
        </div>
        <div class="form-group">
          <label for="email">邮箱：</label>
          <input v-model="formValue.email" id="email" name="email" placeholder="请输入邮箱" type="email" class="form-control"/>
        </div>
        <div class="form-group">
          <label for="phoneNumber">电话号码：</label>
          <input v-model="formValue.phoneNumber" id="phoneNumber" name="phoneNumber" placeholder="请输入电话号码" type="text" class="form-control"/>
        </div>
        <div class="form-group">
          <label for="present">present：</label>
          <textarea v-model="formValue.present" id="present" name="present" class="form-control" placeholder="请输入present" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label for="address">详细地址：</label>
          <textarea v-model="formValue.address" id="address" name="address" class="form-control" placeholder="请输入详细地址，要精确到楼（省份-市-区-街道-小区）" rows="4"></textarea>
        </div>
        <div class="form-group">
          <input type="button" @click="submit" class="btn btn-info pull-right" value="确认"/>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Dialog from 'hsy-vue-dialog'
  Vue.use(Dialog)

  export default {
    name: 'PresentForm',
    data () {
      return {
        visible1: false,
        formValue:{
          username: '',
          email: '',
          phoneNumber: '',
          present: '',
          address: ''
        }
      }
    },
    methods:{
      submit: function(){
        var self = this;
        self.visible1=true;
        console.info(self.visible1);
        console.info(self.formValue);
      },
      handleYes: function(){
        this.visible1 = false
      }

    }
  }
</script>
