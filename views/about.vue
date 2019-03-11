<template>
  <div>
    <h1>介紹頁</h1>
    <button @click="handleRouter">跳躍到 user</button>
    <router-link to="/user/123">跳躍到 user</router-link>
  </div>

</template>
<script>
export default {
    methods:{
        handleRouter(){
            this.$router.push('/user/123')
        }
    }

}

</script>

