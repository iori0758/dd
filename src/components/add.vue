<template>
    <div>
    <scroller class="container">
      <wxc-cell :has-arrow="false"
                  :cell-style="cellStyle"
                  :has-top-border="false"
                  :auto-accessible="false">
          <text class="left" slot="label">&#xe73d;</text>
          <text class="input-title"
                slot="title">提报人信息</text>
      </wxc-cell>
      <div class="demo">
        <wxc-cell label="提报人"
                  :title="ticket.submitedName"
                  :has-margin="false"></wxc-cell>

        <wxc-cell label="提报部门"
                  :title="ticket.submitedDept"
                  :has-top-border="false"></wxc-cell>

        <wxc-cell label="提报人手机"
                  :title="ticket.submitedMobile"
                  :has-top-border="false"></wxc-cell>

      </div>
      <wxc-cell :has-arrow="false"
                  :cell-style="cellStyle"
                  :has-top-border="false"
                  :auto-accessible="false" >
          <text class="left" slot="label">&#xe659;</text>
          <text class="input-title"
                slot="title">系统归类</text>
      </wxc-cell>
      <wxc-cell label="请选择系统"
                  :title="ticket.systemName"
                  :has-arrow="true"
                  @wxcCellClicked="openBottomPopup"
                  :has-top-border="false"></wxc-cell>
      <div class="demo">
      </div>
      <wxc-cell :has-arrow="false"
                  :cell-style="cellStyle"
                  :has-top-border="false"
                  :auto-accessible="false" >
          <text class="left" slot="label">&#xe6ec;</text>
          <text class="input-title"
                slot="title">信息输入</text>
      </wxc-cell>
      <wxc-cell title="事件描述" class="red"
                  :has-arrow="false"
                  :has-top-border="false"></wxc-cell>
        <div>
          <textarea type="textarea" class="textarea" value="" 
          @input="ticket.eventDesc=$event.value" />
        </div>
        <div class="btn" @click="initJsApiOAuth">
        <text class="btn-txt">打开Dialog试一试</text>
      </div>
    </scroller>
    <wxc-popup popup-color="rgb(92, 184, 92)"
               :show="isBottomShow"
               @wxcPopupOverlayClicked="popupOverlayBottomClick"
               pos="bottom"
               height="500">
      <div class="demo-content" :style="{ height: '500px' }">
        <scroller class="container">
          <cell class="cell" v-for="item in targetSys" :key="item.value">
          <wxc-cell :title="item.name"
                  :has-arrow="true"
                  @wxcCellClicked="wxcCellClicked(item)"
                  :has-top-border="true"></wxc-cell>
          </cell>
        </scroller>

      </div>
    </wxc-popup>
  </div>
</template>

<style scoped>
  .textarea {
    width: 650px;
    margin-top: 10px;
    margin-left: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-width: 2px;
    border-style: solid;
  }
.container {
    flex: 1;
  }
  .demo {
    width: 750px;
    background-color: #f2f3f4;
  }
  .category {
    margin-top: 40px;
  }
  .default {
    color: #000000;
  }
  .active {
    color: #FFC900;
  }
  .red {
    color: #C3413D;
  }
  .image {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
  .demo-title {
    font-size: 30px;
    color: #333333;
    margin-top: 30px;
    margin-left: 30px;
    margin-bottom: 16px;
  }

  .input-title {
    font-size: 35px;
    color: #333333;
  }
  .scroller {
    flex: 1;
  }

  .input {
    width: 500px;
    height: 80px;
    line-height: 80px;
    text-align: right;
  }

  .descInput {
    width: 750px;
    height: 240px;
    line-height: 80px;
    text-align: left;
  }

  .btn {
    width: 600px;
    height: 80px;
    margin-top: 40px;
    margin-left: 75px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: #ffc300;
    border-color: #ffc300;
  }

  .btn-txt {
    font-size: 32px;
    color: #ffffff;
  }

  .cell {
    background-color: #ffffff;
  }
  .left{
        font-size: 64px;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale; 
        padding-left:10px;
　　　　 font-family: iconfont
　　}
</style>
<script>
  var stream = weex.requireModule('stream');
  var modal = weex.requireModule('modal');
  var dingtalk = require('dingtalk-javascript-sdk');
  //import dingtalk from 'weex-dingtalk';
  //import { getUserId, getUserInfo, jsApiOAuth, listDict, takePhotoFun } from '../home/libs/request.js';

  import { WxcTabBar, WxcTabPage, WxcPanItem, WxcCell, WxcPopup, Utils } from 'weex-ui';
 



  export default {
    components: { WxcTabBar, WxcTabPage, WxcPanItem, WxcCell,  WxcPopup  },
    data: () => ({
      userId: '',
      userInfo: {
          id: '',
          avatar: '',
          name: '',
          mobile: '',
          fullDeptName: '',
          deptName: ''
        },
      ticket: {
        submitedBy: '',
        submitedName: '',
        submitedMobile: '',
        submitedDept: '',
        systemNo: '',
        systemName: '',
        eventDesc: '',
      },
      color: '#000',
      cellStyle: {
        backgroundColor: '#f2f3f4'
      },
      link: 'https://h5.m.taobao.com/trip/weex-ui/index.html?_wx_tpl=https%3A%2F%2Fh5.m.taobao.com%2Ftrip%2Fweex-ui%2Fdemo%2Findex.native-min.js',
      title: '标题',
        content: '用户需要阅读的内容，这是用户需要阅读的内容。',
        confirmText: '确定',
        cancelText: '取消',
        noPromptText: '不再提示',
        show: false,
        single: false,
        showNoPrompt: false,
        isChecked: false,

      needSlider: true,
      demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      supportSlide: true,
      isTabView: true,
      tabPageHeight: 1334,
      desc: [{
        type: 'text',
        value: '特价机票|班期:清明 3/27-4/2等',
        theme: 'gray'
      }],
      tags: [{
        type: 'tag',
        value: '满100减20测试',
        theme: 'yellow'
      }],
      targetSys:[],
      isBottomShow: false,
      height: 400
    }),
    created () {
    },
    mounted (){
      //this.initJsApiOAuth();
      this.fetchUserId();
      this.fetchTargetSys();
    },
    methods: {
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
          }
          this.ticket.submitedBy = id;
          this.ticket.submitedName = name;
          this.ticket.submitedMobile = mobile;
          this.ticket.submitedDept = fullDeptName;
        }).catch((err) => {
          toast('fetch user info error : ' + JSON.stringify(err));
        });
      },
      openDialog () {
        const self = this;
        self.show = true;
      },
      dialogCancelBtnClick () {
        this.show = false;
        modal.toast({ 'message': '取消回调', 'duration': 1 });
      },
      dialogConfirmBtnClick () {
        this.show = false;
        modal.toast({ 'message': '确认回调', 'duration': 1 });
      },
      dialogNoPromptClick (e) {
        this.isChecked = e.isChecked;
        modal.toast({ 'message': `noPrompt isChecked: ${e.isChecked}`, 'duration': 1 });
      },
      wxcCellClicked (e) {
        this.ticket.systemNo = e.value;
        this.ticket.systemName = e.name;
        this.isBottomShow = false;
      },
      fetchTargetSys (){
        listDict('目标系统').then((res) => {
          this.targetSys = res.rows;
        }).catch((err) => {
          alert(JSON.stringify(err));
          toast('fetch user id error : ' + JSON.stringify(err));
        });
      },
      openBottomPopup () {
        this.isBottomShow = true;
      },
      //非状态组件，需要在这里关闭
      popupOverlayBottomClick () {
        this.isBottomShow = false;
      },
      takePhoto (){
        takePhotoFun();
      }
    }
  };
</script>