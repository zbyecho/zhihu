<template>
  <div>
    <v-header></v-header>
    <div style="width: 100%;height: 56px"></div>
    <swiper :options="swiperOption">
      <swiper-slide  v-for="(item,index) in Todaylist.top_stories" :style="{height:3+'rem'}"  :key="index">
        <img :src="item.image" style="width: 100%;height: 100%;">
        <div  style="width:100%;height: 1rem; position: absolute;bottom: 0;left: 0;z-index: 1000;color: #ffffff;font-size: 14px;font-weight: bold; padding-left: 10px;">{{item.title}}</div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <mu-container ref="container" class="demo-loadmore-content">
      <mu-load-more @refresh="refresh" :refreshing="listNews.refreshing" :loading="listNews.loading" @load="load">
        <ul v-for="item in listNews.data">
          <mu-flex justify-content="start" align-items="center">
            <mu-button round color="success">{{item.date.substring(0,4)+'/'+item.date.substring(6,4)+'/'+item.date.substring(6,8)}}</mu-button>
          </mu-flex>
          <li v-for="v in item.stories" style="position: relative">
            <mu-ripple class="demo">
              <div class="text" >{{v.title}}</div>
              <div class="imgTxt">
                <img :src="v.images[0]" >
              </div>
            </mu-ripple>
          </li>
        </ul>
      </mu-load-more>
    </mu-container>
    <vThem :listThems="listThemsNew"></vThem>
  </div>
</template>

<script>
  import vHeader from '@/components/Header/vHeader'
  import vSwiper from '@/components/Swiper/Swiper'
  import vThem from '@/components/listThems/vThems'
  export default {
    name: "Main",
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          autoplay: true,
          speed:800,
          loop:true
        },
        Todaylist:{},
        listNews:{
          data:[],
          date: 1,
          refreshing: false,
          loading: false,
          text: 'loging...'
        },
        listThemsNew:{}

      }
    },
    components:{
      vHeader,
      vSwiper,
      vThem
    },
    methods:{
      todaynews() {
        var scope = this;
        scope.$get('api/4/news/latest')
          .then(function (res) {
            console.log('最新消息',res)
            scope.Todaylist = res;
          })
      },
      refresh  () {
        this.listNews.refreshing = true;
        this.$refs.container.scrollTop = 0;
        setTimeout(() => {
          this.listNews.refreshing = false;
          this.listNews.text = this.listNews.text === 'loading...' ? 'loading...' : 'List';
          this.todaynews();
        }, 2000)

      },
      load () {
        var that = this
        that.listNews.loading = true;
        that.$get('api/4/news/before/'+that.GetDate(that.listNews.date) )
          .then(function (res) {
            that.listNews.date--;
            that.listNews.loading = false;
            that.listNews.data.push(res)
            console.log(res)
          })
          .catch(function (err) {
            that.listNews.loading = false;
            console.log(err)
          })


      },
      GetDate(count) {
        var dd = new Date();
        dd.setDate(dd.getDate() + count);
        var y = dd.getFullYear();
        var m = dd.getMonth()+1;
        m = m > 10 ? m : '0' + m;
        var d = dd.getDate();
        d = d >= 10 ? d : '0' + d;
        return y + "" + m + "" + d;
      },
      listThems(){
        var that = this
        that.$get('/api/4/themes')
          .then(function (res) {
            console.log(res)
            that.listThemsNew = res
          })
          .catch(function (res) {
            console.log(res)
          })
      }
    },
    mounted(){
      this.todaynews();
      this.load();
      this.listThems();
    }
  }
</script>

<style scoped >

  ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul{
    width: 100%;
    height: auto;
    padding: 0 10px;
    margin-top: .2rem;
  }
  li {
    width: 100%;
    height: auto;
    padding: 10px 10px;
    background: #ffffff;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-top: .2rem;
  }
  li>.demo{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li >.demo > .text {
    width: 70%;
    font-size: 14px;
  }
  li >.demo > .imgTxt {
    width: 1.4rem;
    height: 1.4rem;

  }
  li>.demo > .imgTxt > img{
    width: 100%;
    height: 100%;
  }
</style>
