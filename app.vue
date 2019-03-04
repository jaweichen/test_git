<template>
    <div>
        <div>Hello{{name}}</div>
        <v-title title="Vue 元件化"></v-title>
        <v-button @click="handleClick">點擊按鈕</v-button>
        <br/>
        <img src="./image/magicbox.png" style="max-width:100%;height:auto;"/>
    </div>

</template>
<script>
import vTitle from './component/title.vue';
import vButton from './component/button.vue';

export default {
    data(){
        return{
            name:'Vue.js'
        }
    },
    methods:{
        handleClick(e){
            window.alert(e);
        }
    },
    components:{
        vTitle,
        vButton
    }
}
</script>
<style scoped>
    div{
        color:#f60;
        font-size:24px;
    }
</style>

