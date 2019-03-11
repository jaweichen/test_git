<template>
    <div>
        <h1>首頁</h1>
        <router-link to="/about" class="work">跳躍到 about</router-link>
      
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

   .work{
     color:rgb(102, 224, 112);
     font-weight:bold;
     text-decoration:none;
   }

   .work:active{
       color:#000;
       font-weight:bold;
       text-decoration:none;
   }

   .router-link-active{
       font-weight:bold;
       text-decoration:none;
       color:#000;
   }
</style>
