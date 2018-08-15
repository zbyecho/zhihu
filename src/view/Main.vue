<template>
    <div>
      <router-view class="view two" name="a"></router-view>
      <v-home></v-home>
    </div>
</template>

<script>
    import vHome from '@/view/vHome/vHome'
    export default {
        name: "Main",
        components:{
          vHome
        }
    }
</script>

<style scoped >


</style>
