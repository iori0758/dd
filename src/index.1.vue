<template>
  <div class="wrapper">
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="icon"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <list 
          :key="index"
          class="item-container"
          :style="{ height: (tabPageHeight - 120) + 'px' }">
      <cell class="border-cell"></cell>
      <cell class="cell" v-for="(demo,key) in myTicketList" :key="key""
            :accessible="true"
            aria-label="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游,价格219元">
        <wxc-pan-item :ext-id="'1-' + (demo) + '-' + (key)"
                      url="https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675"
                      @wxcPanItemPan="wxcPanItemPan">
          <wxc-item image="https://gw.alicdn.com/i1/2935198750/TB26GMgeOC9MuFjSZFoXXbUzFXa_!!2935198750.jpg"
                    :eventStatusText="demo.eventStatus"
                    title="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游"
                    :ttcketNo="demo.ttcketNo"
                    :submitedName="demo.submitedName"
                    :submitedMobile="demo.submitedMobile"
                    :submitedDate="demo.submitedDate"></wxc-item>
        </wxc-pan-item>
      </cell>
    </list>
    <div class="item-container" :style="contentStyle"><text>特别推荐</text></div>
    <div class="item-container" :style="contentStyle"><text>消息中心</text></div>
    <!--<div class="item-container" :style="contentStyle"><text>我的主页</text></div>-->
    <list 
          :key="index"
          class="item-container"
          :style="{ height: (tabPageHeight - 120) + 'px' }">
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
  <router-view/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import { WxcTabBar,  WxcPanItem, WxcCell, WxcPopup, Utils } from 'weex-ui';
  import WxcItem from './components/wxc-item.vue';
  var stream = weex.requireModule('stream');
  var modal = weex.requireModule('modal');
  const storage = weex.requireModule('storage')
  var dingtalk = require('dingtalk-javascript-sdk');
  import { getUserId, getUserInfo, jsApiOAuth, listDict, takePhotoFun } from './libs/request.js';
  export default {
    name: 'App',
    components: {
      HelloWorld,WxcTabBar, WxcPanItem, WxcItem, WxcCell, WxcPopup
    },
    data () {
      return {
        userId: '',
        userInfo: {
          id: '',
          avatar: '',
          name: '',
          mobile: '',
          fullDeptName: '',
          deptName: ''
        },
        logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
        tabTitles: [
          {
            title: '服务管理',
            icon: 'https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png',
            activeIcon: 'https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png'
          },
          {
            title: '我的事件',
            icon: 'https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png',
            activeIcon: 'https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png'
          }
        ],
        tabStyles: {
          bgColor: '#FFFFFF',
          titleColor: '#666666',
          activeTitleColor: '#3D3D3D',
          activeBgColor: '#FFFFFF',
          isActiveTitleBold: true,
          iconWidth: 70,
          iconHeight: 70,
          width: 160,
          height: 120,
          fontSize: 24,
          textPaddingLeft: 10,
          textPaddingRight: 10
        },
        tabPageHeight: 1334,
        myTicketList:[{"areaCode":null,"assignedBy":null,"cfmDate":null,"createdBy":null,"createdByName":null,"createdDate":null,"engineerDept":null,"engineerId":null,"engineerMobile":null,"engineerName":null,"engineerNo":null,"eventDesc":"新增配码","eventStatus":"01","id":"4gVIwHVDRdaWQjSGhYF-4w","modifiedBy":"1","modifiedByName":null,"modifiedDate":"2018-03-06 16:15:38","passDate":null,"recDate":null,"recTyep":null,"remark":null,"servAttitude":null,"servImpression":null,"servScore":null,"state":null,"status":null,"submitedBy":null,"submitedDate":"2018-03-06 16:15:38","submitedDept":null,"submitedMobile":"123456","submitedName":null,"systemNo":"AFS","ticketId":null,"treatment":null,"ttcketNo":"2018030601","valid":null},{"areaCode":null,"assignedBy":"ce100.shi","cfmDate":null,"createdBy":null,"createdByName":null,"createdDate":null,"engineerDept":"132","engineerId":"J100054","engineerMobile":"13311111111","engineerName":"ce100.shi","engineerNo":null,"eventDesc":"一个不可描述的画面","eventStatus":"04","id":"2merE-OnRhWILN-ZYDqIqA","modifiedBy":"ce100.shi","modifiedByName":null,"modifiedDate":"2018-02-07 10:31:59","passDate":"2018-02-07 10:31:59","recDate":"2018-02-06 00:00:00","recTyep":"QD","remark":null,"servAttitude":null,"servImpression":null,"servScore":null,"state":null,"status":null,"submitedBy":"J100054","submitedDate":"2018-02-02 14:13:22","submitedDept":"132","submitedMobile":"13311111111","submitedName":"ce100.shi","systemNo":null,"ticketId":null,"treatment":null,"ttcketNo":"2018020201","valid":null},{"areaCode":null,"assignedBy":"ce100.shi","cfmDate":null,"createdBy":null,"createdByName":null,"createdDate":null,"engineerDept":null,"engineerId":null,"engineerMobile":"123456","engineerName":null,"engineerNo":null,"eventDesc":"2222","eventStatus":"02","id":"BydVO4pbRuWowJjEKaG7SQ","modifiedBy":"ce100.shi","modifiedByName":null,"modifiedDate":"2018-03-01 16:02:57","passDate":null,"recDate":"2018-03-01 16:02:57","recTyep":"QD","remark":"22222333","servAttitude":null,"servImpression":null,"servScore":null,"state":null,"status":null,"submitedBy":"J100054","submitedDate":"2018-02-01 09:39:43","submitedDept":"132","submitedMobile":"13311111111","submitedName":"ce100.shi","systemNo":null,"ticketId":null,"treatment":null,"ttcketNo":"2018020104","valid":null},{"areaCode":null,"assignedBy":null,"cfmDate":null,"createdBy":null,"createdByName":null,"createdDate":null,"engineerDept":null,"engineerId":null,"engineerMobile":"123456","engineerName":null,"engineerNo":null,"eventDesc":"wq211","eventStatus":null,"id":"fmeu6bP5QxeGGiUCf7Z0_A","modifiedBy":"1","modifiedByName":null,"modifiedDate":"2018-02-01 14:25:16","passDate":null,"recDate":null,"recTyep":null,"remark":"1111","servAttitude":null,"servImpression":null,"servScore":null,"state":null,"status":null,"submitedBy":"J100054","submitedDate":"2018-02-01 09:37:57","submitedDept":"132","submitedMobile":"13311111111","submitedName":"ce100.shi","systemNo":null,"ticketId":null,"treatment":null,"ttcketNo":"2018020103","valid":null}],
      }
    },
    created () {
      this.tabPageHeight = Utils.env.getPageHeight();
      const { tabStyles } = this;
      this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
      this.$watch('userId',() => {
        
        this.fetchUserInfo();
        //this.fetchTodoList();
      });
    },
    mounted (){
      //this.initJsApiOAuth();
      this.fetchUserId();
      this.fetchTargetSys();
    },
    methods: {
      wxcTabBarCurrentTabSelected (e) {
        const self = this;
        const index = e.page;
        
        if(index==0){
          if (this.$router) {
              this.$router.push('/add?corpId=ding008c300096090fa7')
            }
        }
      },
      wxcPanItemPan (e) {
        if (Utils.env.supportsEBForAndroid()) {
          this.$refs['wxc-tab-page'].bindExp(e.element);
        }
      },
      initJsApiOAuth (){
        jsApiOAuth().then((res) => {
          //alert(res)
        }).catch((err) => {
          toast('jsApiOAuth : ' + JSON.stringify(err));
        });
      },
      fetchUserId (){
        getUserId().then((res) => {
          this.userId = res.userid;
        }).catch((err) => {
          alert("error356"+JSON.stringify(err));
          toast('fetch user id error : ' + JSON.stringify(err));
        });
      },
      fetchUserInfo (){
        getUserInfo(this.userId).then((res) => {
          const { id, avatar, name, mobile, fullDeptName, deptName } = res;
          this.userInfo = {
            id,
            avatar,
            name,
            mobile,
            fullDeptName,
            deptName
          };
          storage.setItem('user', JSON.stringify(this.userInfo),res=>{
            if(res.result=='success'){
            // 数据缓存成功
              //alert('数据缓存成功');
            }else{
              alert('数据缓存失败');
            }
          });
        }).catch((err) => {
          toast('fetch user info error : ' + JSON.stringify(err));
        });
      },
      fetchMyTicket (){
        fetchMyTicketApi(this.userId).then((res) => {
          this.userId = res.userid;
        }).catch((err) => {
          alert("error356"+JSON.stringify(err));
          toast('fetch user id error : ' + JSON.stringify(err));
        });
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
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
  }
</style>
