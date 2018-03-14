<template>
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="icon"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected"> 
    <list  class="list" :style="{ height: (tabPageHeight-120) + 'px' }" >
      <cell class="border-cell"></cell>
      <cell class="cell" v-for="(demo,key) in myTicketList" :key="key""
            :accessible="true">
            <wxc-pan-item :ext-id="'1-' + (demo) + '-' + (key)"
                      @wxcPanItemPan="wxcPanItemPan">
          <wxc-item image="https://gw.alicdn.com/i1/2935198750/TB26GMgeOC9MuFjSZFoXXbUzFXa_!!2935198750.jpg"
                    :eventStatus="demo.eventStatus"
                    :ttcketNo="demo.ttcketNo"
                    :submitedName="demo.submitedName"
                    :submitedMobile="demo.submitedMobile"
                    :submitedDate="demo.submitedDate"
                    :eventDesc="demo.eventDesc" @click="clickCell(demo)"></wxc-item>
        </wxc-pan-item>
      </div>
      </cell>
    </list>
    <div class="item-container" ><text>我的主页</text></div>
    <div class="item-container" ><text>我的主页1</text></div>
    <router-view/>
  </wxc-tab-bar>
  
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import { WxcTabBar,  WxcPanItem, WxcCell, WxcPopup, Utils } from 'weex-ui';
  import WxcItem from './components/wxc-item.vue';
  var stream = weex.requireModule('stream');
  import { toast, setTitle } from './libs/util.js';
  const storage = weex.requireModule('storage')
  var dingtalk = require('dingtalk-javascript-sdk');
  import { getUserId, getUserInfo, jsApiOAuth, listDict, initIconFont, takePhotoFun } from './libs/request.js';

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
          textPaddingLeft: 0,
          textPaddingRight: 0
        },
        tabPageHeight: 1334,
        myTicketList:[{"areaCode":null,"assignedBy":null,"attachment":"[]","cfmDate":null,"createdBy":null,"createdByName":null,"createdDate":null,"engineerDept":null,"engineerId":null,"engineerMobile":null,"engineerName":null,"engineerNo":null,"eventDesc":"我们的生活方式是","eventStatus":"03","treament":"很难才解决很难才解决很难才解决很难才解决很难才解决很难才解决很难才解决很难才解决很难才解决很难才解决很难才解决","eventStatusText":null,"id":"MwFGOAmiTqm-njtUK2XcWg","modifiedBy":null,"modifiedByName":null,"modifiedDate":"2018-03-11 17:33:23","passDate":null,"recDate":null,"recTyep":null,"remark":null,"servAttitude":null,"servImpression":null,"servScore":null,"state":null,"status":null,"submitedBy":"61673B83C8C35CD9E050007F0200DE12","submitedDate":"2018-03-11 17:33:23","submitedDept":"/卓诗尼控股/信息管理中心/平台开发部/平台开发组","submitedMobile":"13713014862","submitedName":"陈健行","systemNo":"DMS","ticketId":null,"treatment":null,"ticketNo":"2018031111","valid":null},{"areaCode":null,"assignedBy":null,"attachment":"[]","cfmDate":null,"createdBy":null,"createdByName":null,"createdDate":null,"engineerDept":null,"engineerId":null,"engineerMobile":null,"engineerName":null,"engineerNo":null,"eventDesc":"我们的生活","eventStatus":"03","eventStatusText":null,"id":"fjboNnF9SBaK_Lr9WDb5vw","modifiedBy":null,"modifiedByName":null,"modifiedDate":"2018-03-11 17:32:22","passDate":null,"recDate":null,"recTyep":null,"remark":null,"servAttitude":null,"servImpression":null,"servScore":null,"state":null,"status":null,"submitedBy":"61673B83C8C35CD9E050007F0200DE12","submitedDate":"2018-03-11 17:32:22","submitedDept":"/卓诗尼控股/信息管理中心/平台开发部/平台开发组","submitedMobile":"13713014862","submitedName":"陈健行","systemNo":"RTL","ticketId":null,"treatment":null,"ticketNo":"2018031110","valid":null},{"areaCode":null,"assignedBy":null,"attachment":"[]","cfmDate":null,"createdBy":null,"createdByName":null,"createdDate":null,"engineerDept":null,"engineerId":null,"engineerMobile":null,"engineerName":null,"engineerNo":null,"eventDesc":"我们的生活","eventStatus":"03","eventStatusText":null,"id":"NOwezCVvSHyeUI165aFivQ","modifiedBy":null,"modifiedByName":null,"modifiedDate":"2018-03-11 17:30:36","passDate":null,"recDate":null,"recTyep":null,"remark":null,"servAttitude":null,"servImpression":null,"servScore":null,"state":null,"status":null,"submitedBy":"61673B83C8C35CD9E050007F0200DE12","submitedDate":"2018-03-11 17:30:36","submitedDept":"/卓诗尼控股/信息管理中心/平台开发部/平台开发组","submitedMobile":"13713014862","submitedName":"陈健行","systemNo":"DMS","ticketId":null,"treatment":null,"ticketNo":"2018031109","valid":null},{"areaCode":null,"assignedBy":null,"attachment":"[]","cfmDate":null,"createdBy":null,"createdByName":null,"createdDate":null,"engineerDept":null,"engineerId":null,"engineerMobile":null,"engineerName":null,"engineerNo":null,"eventDesc":"我们的生活方式aaaaaaaaaaaaaaaaaaa","eventStatus":"03","eventStatusText":null,"id":"WrbtoV-FRR-n83bxEJU8zQ","modifiedBy":null,"modifiedByName":null,"modifiedDate":"2018-03-11 17:29:54","passDate":null,"recDate":null,"recTyep":null,"remark":null,"servAttitude":null,"servImpression":null,"servScore":null,"state":null,"status":null,"submitedBy":"61673B83C8C35CD9E050007F0200DE12","submitedDate":"2018-03-11 17:29:54","submitedDept":"/卓诗尼控股/信息管理中心/平台开发部/平台开发组","submitedMobile":"13713014862","submitedName":"陈健行","systemNo":"DMS","ticketId":null,"treatment":null,"ticketNo":"2018031108","valid":null},{"areaCode":null,"assignedBy":null,"attachment":"[{\"name\":\"lADPBbCc1XsAXL_NAoDNAWg_360_640.jpg\",\"url\":\"http://static.dingtalk.com/media/lADPBbCc1XsAXL_NAoDNAWg_360_640.jpg\"},{\"name\":\"lADPBbCc1XsAXNvNAoDNAWg_360_640.jpg\",\"url\":\"http://static.dingtalk.com/media/lADPBbCc1XsAXNvNAoDNAWg_360_640.jpg\"}]","cfmDate":null,"createdBy":null,"createdByName":null,"createdDate":null,"engineerDept":null,"engineerId":null,"engineerMobile":null,"engineerName":null,"engineerNo":null,"eventDesc":"我","eventStatus":"03","eventStatusText":null,"id":"ruLHuN59RKSkw9dtbuJQiQ","modifiedBy":null,"modifiedByName":null,"modifiedDate":"2018-03-11 17:27:34","passDate":null,"recDate":null,"recTyep":null,"remark":null,"servAttitude":null,"servImpression":null,"servScore":null,"state":null,"status":null,"submitedBy":"61673B83C8C35CD9E050007F0200DE12","submitedDate":"2018-03-11 17:27:34","submitedDept":"/卓诗尼控股/信息管理中心/平台开发部/平台开发组","submitedMobile":"13713014862","submitedName":"陈健行","systemNo":"DMS","ticketId":null,"treatment":null,"ticketNo":"2018031107","valid":null},{"areaCode":null,"assignedBy":null,"attachment":"[{\"name\":\"lADPBbCc1XsAXL_NAoDNAWg_360_640.jpg\",\"url\":\"http://static.dingtalk.com/media/lADPBbCc1XsAXL_NAoDNAWg_360_640.jpg\"},{\"name\":\"lADPBbCc1XsAXNvNAoDNAWg_360_640.jpg\",\"url\":\"http://static.dingtalk.com/media/lADPBbCc1XsAXNvNAoDNAWg_360_640.jpg\"}]","cfmDate":null,"createdBy":null,"createdByName":null,"createdDate":null,"engineerDept":null,"engineerId":null,"engineerMobile":null,"engineerName":null,"engineerNo":null,"eventDesc":"我","eventStatus":"01","eventStatusText":null,"id":"zD1NZcjYSkSI8EwXa_GvXw","modifiedBy":null,"modifiedByName":null,"modifiedDate":"2018-03-11 17:27:21","passDate":null,"recDate":null,"recTyep":null,"remark":null,"servAttitude":null,"servImpression":null,"servScore":null,"state":null,"status":null,"submitedBy":"61673B83C8C35CD9E050007F0200DE12","submitedDate":"2018-03-11 17:27:21","submitedDept":"/卓诗尼控股/信息管理中心/平台开发部/平台开发组","submitedMobile":"13713014862","submitedName":"陈健行","systemNo":"DMS","ticketId":null,"treatment":null,"ticketNo":"2018031106","valid":null},{"areaCode":null,"assignedBy":null,"attachment":"[{\"name\":\"lADPBbCc1XsAXL_NAoDNAWg_360_640.jpg\",\"url\":\"http://static.dingtalk.com/media/lADPBbCc1XsAXL_NAoDNAWg_360_640.jpg\"},{\"name\":\"lADPBbCc1XsAXNvNAoDNAWg_360_640.jpg\",\"url\":\"http://static.dingtalk.com/media/lADPBbCc1XsAXNvNAoDNAWg_360_640.jpg\"}]","cfmDate":null,"createdBy":null,"createdByName":null,"createdDate":null,"engineerDept":null,"engineerId":null,"engineerMobile":null,"engineerName":null,"engineerNo":null,"eventDesc":"我","eventStatus":"03","eventStatusText":null,"id":"A5crYsODR5ujlG419Y9x4Q","modifiedBy":null,"modifiedByName":null,"modifiedDate":"2018-03-11 17:27:01","passDate":null,"recDate":null,"recTyep":null,"remark":null,"servAttitude":null,"servImpression":null,"servScore":null,"state":null,"status":null,"submitedBy":"61673B83C8C35CD9E050007F0200DE12","submitedDate":"2018-03-11 17:27:01","submitedDept":"/卓诗尼控股/信息管理中心/平台开发部/平台开发组","submitedMobile":"13713014862","submitedName":"陈健行","systemNo":"DMS","ticketId":null,"treatment":null,"ticketNo":"2018031105","valid":null},{"areaCode":null,"assignedBy":null,"attachment":"[{\"name\":\"lADPBbCc1XsAW6HNAoDNAWg_360_640.jpg\",\"url\":\"http://static.dingtalk.com/media/lADPBbCc1XsAW6HNAoDNAWg_360_640.jpg\"}]","cfmDate":null,"createdBy":null,"createdByName":null,"createdDate":null,"engineerDept":null,"engineerId":null,"engineerMobile":null,"engineerName":null,"engineerNo":null,"eventDesc":"我们","eventStatus":"03","eventStatusText":null,"id":"1u2AvczZSfWLEkqI9QTeHA","modifiedBy":null,"modifiedByName":null,"modifiedDate":"2018-03-11 17:23:16","passDate":null,"recDate":null,"recTyep":null,"remark":null,"servAttitude":null,"servImpression":null,"servScore":null,"state":null,"status":null,"submitedBy":"61673B83C8C35CD9E050007F0200DE12","submitedDate":"2018-03-11 17:23:16","submitedDept":"/卓诗尼控股/信息管理中心/平台开发部/平台开发组","submitedMobile":"13713014862","submitedName":"陈健行","systemNo":null,"ticketId":null,"treatment":null,"ticketNo":"2018031104","valid":null},{"areaCode":null,"assignedBy":null,"attachment":"[{\"name\":\"lADPBbCc1Xr9Aj_NAoDNAWg_360_640.jpg\",\"url\":\"http://static.dingtalk.com/media/lADPBbCc1Xr9Aj_NAoDNAWg_360_640.jpg\"}]","cfmDate":null,"createdBy":null,"createdByName":null,"createdDate":null,"engineerDept":null,"engineerId":null,"engineerMobile":null,"engineerName":null,"engineerNo":null,"eventDesc":"测试","eventStatus":"03","eventStatusText":null,"id":"97JMHY7JTtmK58oVO_xqNQ","modifiedBy":null,"modifiedByName":null,"modifiedDate":"2018-03-11 17:05:45","passDate":null,"recDate":null,"recTyep":null,"remark":null,"servAttitude":null,"servImpression":null,"servScore":null,"state":null,"status":null,"submitedBy":"61673B83C8C35CD9E050007F0200DE12","submitedDate":"2018-03-11 17:05:45","submitedDept":"/卓诗尼控股/信息管理中心/平台开发部/平台开发组","submitedMobile":"13713014862","submitedName":"陈健行","systemNo":"DMS","ticketId":null,"treatment":null,"ttcketNo":"2018031103","valid":null}],
      }
    },
    created () {
      
      this.tabPageHeight = Utils.env.getPageHeight();
      const { tabStyles } = this;
      //this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
      //this.tabPageHeight = { height: (tabPageHeight - tabStyles.height) + 'px' };
      
      this.$watch('userId',() => {
        
        this.fetchUserInfo();
        //this.fetchTodoList();
      });
      setTitle("卓诗尼SSC系统");
    },
    mounted (){
      //this.initJsApiOAuth();
      this.fetchUserId();
    },
    methods: {
      wxcTabBarCurrentTabSelected (e) {
        const self = this;
        const index = e.page;
        
        if(index==0){
          if (this.$router) {
              this.$router.push('/add')
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
          //alert("error356"+JSON.stringify(err));
          //toast('fetch user id error : ' + JSON.stringify(err));
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
      clickCell(e){
        
        if(e && e.eventStatus=='03') {
          if (this.$router) {
              this.$router.push({name:'ticketDetailToComplete',params:e});
              //this.$router.push('/ticketDetailToComplete');
            }
        }
        
      }
    }
  }
</script>

<style scoped>
  .list {
    width: 750px;
    background-color: #f2f3f4;
  }

  .item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
  }

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
