<template>
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="icon"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <list 
          :key="index"
          class="item-container"
          :style="{ height: (1334 - 120) + 'px' }">
      <cell class="border-cell"></cell>
      <cell class="cell"
            :accessible="true"
            aria-label="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游,价格219元">
        <wxc-pan-item :ext-id="1"
                      url="https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675"
                      @wxcPanItemPan="wxcPanItemPan">
          <wxc-item image="https://gw.alicdn.com/i1/2935198750/TB26GMgeOC9MuFjSZFoXXbUzFXa_!!2935198750.jpg"
                    :image-text="title"
                    title="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游"
                    :desc="desc"
                    :tags="tags"
                    price="666"
                    price-desc="月售58笔｜999+条评论"></wxc-item>
        </wxc-pan-item>
      </cell>
    </list>
    <div class="item-container" :style="contentStyle"><text>特别推荐</text></div>
    <div class="item-container" :style="contentStyle"><text>消息中心</text></div>
    <!--<div class="item-container" :style="contentStyle"><text>我的主页</text></div>-->
    <list 
          :key="index"
          class="item-container"
          :style="{ height: (1334 - 120) + 'px' }">
      <cell class="border-cell"></cell>
      <cell class="cell"
            :accessible="true"
            aria-label="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游,价格219元">
        <wxc-pan-item :ext-id="1"
                      url="https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675"
                      @wxcPanItemPan="wxcPanItemPan">
          <wxc-item image="https://gw.alicdn.com/i1/2935198750/TB26GMgeOC9MuFjSZFoXXbUzFXa_!!2935198750.jpg"
                    :image-text="title"
                    title="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游"
                    :desc="desc"
                    :tags="tags"
                    price="666"
                    price-desc="月售58笔｜999+条评论"></wxc-item>
        </wxc-pan-item>
      </cell>
    </list>
  </wxc-tab-bar>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import { WxcTabBar, WxcTabPage, WxcPanItem, WxcCell, WxcPopup, Utils } from 'weex-ui';
  import WxcItem from './components/wxc-item.vue';
  const navigator = weex.requireModule('navigator');
  export default {
    name: 'App',
    components: {
      HelloWorld,WxcTabBar, WxcTabPage, WxcPanItem, WxcItem, WxcCell, WxcPopup
    },
    data () {
      return {
        logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
        tabTitles: [
          {
            title: '首页',
            icon: 'https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png',
            activeIcon: 'https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png'
          },
          {
            title: '特别推荐',
            icon: 'https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png',
            activeIcon: 'https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png'
          },
          {
            title: '消息中心',
            icon: 'https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png',
            activeIcon: 'https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png',
            badge: 5
          },
          {
            title: '我的主页',
            icon: 'https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png',
            activeIcon: 'https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png',
            dot: true
          }
        ],
      }
    },
    methods: {
      wxcTabBarCurrentTabSelected (e) {
        const self = this;
        const index = e.page;
        
        if(index==0){
          if (this.$router) {
            alert('a')
              this.$router.push('/add')
            }
        }
      },
      wxcPanItemPan (e) {
        if (Utils.env.supportsEBForAndroid()) {
          this.$refs['wxc-tab-page'].bindExp(e.element);
        }
      },
    }
  }
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
