<template>
  <div class="w-1/3" style="width: 33.33%; margin: 100px auto">
    <a-input v-model="password1" placeholder="请输入密码" />
    <GiPassword :input-value="password1" />
    <a-input v-model="password2" placeholder="请再次输入密码" />
    <div style="margin-top: 10px">
      <a-button size="small" type="primary" round style="width: 100%">确定</a-button>
    </div>
  </div>
</template>

<script lang="ts" setup name="PasswordStrong">
import { ref } from 'vue'
const password1 = ref('')
const password2 = ref('')
</script>
