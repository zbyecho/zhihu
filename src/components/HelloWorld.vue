<template>
  <div >
    <div class="alert-demo-wrapper">
      <mu-alert color="success">
        {{msg}}
      </mu-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
