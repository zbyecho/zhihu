<template>
    <div style="position: fixed;top:0;left:0;width: 100%;z-index: 1000000">
      <mu-appbar style="width: 100%;" color="primary">
        <mu-button icon slot="left" @click="showlist">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        {{$route.meta.title}}
        <div  slot="right" style="display: flex;align-items: center">
            <!--<mu-badge content="12" circle color="secondary">-->
            <mu-button icon>
              <mu-icon value="notifications"></mu-icon>
            </mu-button>
          <!--</mu-badge>-->
          <mu-menu cove placement="bottom-end"   >
            <mu-button icon>
              <mu-icon value="more_vert"></mu-icon>
            </mu-button>
            <mu-list slot="content">
              <mu-list-item button>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item>
              <mu-list-item button>
                <mu-list-item-title>退出</mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </mu-menu>
        </div>
      </mu-appbar>

    </div>
</template>

<script>
    export default {
        name: "vHeader",
        methods:{
          showlist(){
            this.$store.commit('isShow')
          }
        }
    }
</script>

<style scoped>

</style>
