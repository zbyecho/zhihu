<template>
  <!--z主题日报列表-->
  <mu-slide-left-transition>
    <div class="listBox" v-show="isShow" @click="showlist" >
      <div class="content">
        <mu-flex justify-content="start" align-items="center" class="user">
          <mu-avatar :size="30" style="background: gold">
            A
          </mu-avatar>
          <div style="margin-left: .2rem">
            Admin
          </div>
        </mu-flex>
        <mu-list>
          <mu-list-item button ripple v-for="item in listThems.others" @click="isradio(item.id)" >
            <mu-list-item-title>
              <div>
                {{item.name}}
              </div>
            </mu-list-item-title>
            <mu-list-item-action>
              <mu-radio v-model="isRadio" color="yellow700" :value="item.id" uncheck-icon="star_border" checked-icon="star" ripple  label-left></mu-radio>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
      </div>
    </div>
  </mu-slide-left-transition>

</template>

<script>
    export default {
        name: "vThems",
        // data () {
        //   return {
        //     radio: {
        //       value2: 'heart',
        //     }
        //   }
        // },
        computed:{
          isShow(){
            return  this.$store.state.Themlist.show2
          },
          isRadio(){
            return this.$store.state.Themlist.radio
          }
        },
        methods: {
          showlist(){
            this.$store.commit('isShow')
          },
          isradio(ids){
            this.$store.commit('isRadio',ids)
          }
        },
        props:['listThems']

    }
</script>

<style scoped lang="css">
  .listBox {
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000000;
    background: rgba(0,0,0,0.6);
    overflow: scroll;
  }
  .listBox > .content {
    padding: 16px 0;
    width: 79%;
    height:auto;
    min-height: 100%;
    background: #fff;
  }
  .user{
    padding-left: 10px;
  }
</style>
