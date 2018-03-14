<template>
    <div class="ticketDetail" :style="{ height: (tabPageHeight) + 'px' }">
    <scroller class="scroller" :style="{ width: (tabPageWidth) + 'px'}">
      <wxc-cell :has-arrow="false"
                  :cell-style="cellStyle"
                  :has-top-border="false"
                  :auto-accessible="false">
          <text class="left" slot="label">&#xe73d;</text>
          <text class="input-title"
                slot="title">提报人信息</text>
      </wxc-cell>
        <wxc-cell label="事件编号"
                  :title="ticket.ticketNo"
                  :has-margin="false"></wxc-cell>

        <wxc-cell label="提报时间"
                  :title="ticket.submitedDate"
                  :has-top-border="false"></wxc-cell>

        <wxc-cell title="解决方案" 
                  :has-arrow="false"
                  :has-top-border="false"></wxc-cell>
          <textarea type="textarea" class="textarea" disabled="true" rows = 3,
          :value="ticket.treament" ></textarea>
      <wxc-cell title="图片附件" 
                  :has-arrow="false"
                  :has-top-border="false"></wxc-cell>
        <div class='finish_room2' >
       	   <div v-for='(item ,index ) in ticket.attachment' class="room_img">
       	   	  <image style="width:150px;height:100px" :src="item"> </image>
       	   </div>
        </div>
      <div class="demo">
      </div>
      <div class="btn">
          <text class="btn-txt">确认完成</text>
        </div>
    </scroller>
    <wxc-popup popup-color="rgb(92, 184, 92)"
               :show="isBottomShow"
               @wxcPopupOverlayClicked="popupOverlayBottomClick"
               pos="bottom"
               height="0">
               <wxc-button text="确定"
              </wxc-button>
      <div :style="{ height: '0px' }">
        
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
.slider {
    width: 400px;
    height: 300px;
    background-color: #c3413d;
    align-items: center;
    justify-content: center;
  }
.ticketDetail {
    width: 750px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ffffff;
  }
  .textarea {
    width: 730px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
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
    width: 750px;
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
.icon-font{
    width: 10px;
    height: 10px;
    margin-top: 24px;
    margin-left: 24px;
    margin-bottom: 24px;
    margin-right: 24px;
        font-size: 168px;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale; 
        padding-left:10px;
　　　　 font-family: iconfont
　　}
     .finish_room2{
   	 width: 750px;
   	 height: 150px;
   	 padding-top: 15px;
   	 padding-bottom: 15px;
   	 display: flex;
   	 align-items: center;
     flex-direction: row;
   	 border-bottom: 2px solid #e1e1e1;
   }
   .finish_room2 .room_img{
   	 width: 150px;
   	 height: 100px;
   	 margin-right: 10px;
   	 position: relative;
   	 overflow: hidden;
   }

  .finish_room2 .room_img .cusImg{
   	 
   	 width: 100%;
   	 height: 100%;
   }

   .finish_room2 .room_img .cusIcon{
   	  position: absolute;
   	  width: auto;
   	  height: auto;
   	  right: 5px;
   	  bottom:3px;
   }

     .room_add_img{
   	 width: 148px;
   	 height: 98px;
   	 border:1px solid #e1e1e1;
   	 display: flex;
   	 flex-direction: column;
   	 align-items: center;
   	 justify-content: space-between;
   	 position: relative;
   }
</style>
<script>
  var stream = weex.requireModule('stream');
  var modal = weex.requireModule('modal');
  const domModule=weex.requireModule("dom");
  var dingtalk = require('dingtalk-javascript-sdk');
  const storage = weex.requireModule('storage')
  import { APPHOST } from '../libs/env.js';
  //import dingtalk from 'weex-dingtalk';

  import { getUserId, getUserInfo, jsApiOAuth, listDict, takePhotoFun, saveTicketFun} from '../libs/request.js';
  import { toast, getNowFormatDate } from '../libs/util.js';
  import { WxcTabBar, WxcTabPage, WxcPanItem, WxcCell, WxcPopup, WxcIcon, WxcButton, Utils } from 'weex-ui';
 



  export default {
    components: { WxcTabBar, WxcTabPage, WxcPanItem, WxcCell, WxcIcon, WxcButton, WxcPopup  },
    data: () => ({
      delImg:'',
      addImg:'',
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
        attachment: []
      },
      color: '#000',
      cellStyle: {
        width: '750px',
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
      supportSlide: true,
      isTabView: true,
      tabPageWidth: 750,
      tabPageHeight: 1334,
      targetSys:[],
      isBottomShow: false,
      height: 400,
      imageLists:[],
      sliderId: 1,
      autoSliderId: 2,
      cardLength: 5,
      cardSize: {
        width: 400,
        height: 300,
        spacing: 0,
        scale: 0.8
      }
    }),
    created () {
     
      this.tabPageHeight = Utils.env.getPageHeight();
      var domModule=weex.requireModule("dom");
      domModule.addRule('fontFace',{
        'fontFamily':'iconfont',   //注意这里必须是驼峰命名，跟上面的css样式对照
        'src':"url(\'http://at.alicdn.com/t/font_355062_oh3brk0z2o2h85mi.ttf\')"
      });
      this.ticket.ticketNo = this.$route.params.ticketNo;
      this.ticket.submitedDate = this.$route.params.submitedDate;
      this.ticket.treament = this.$route.params.treament;
      this.ticket.attachment = this.$route.params.attachment;
    },
    mounted (){
      //this.init JsApiOAuth();
      //this.fetchUserId();
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
        alert('aaa');
        var time = getNowFormatDate();
        alert(time);
        takePhotoFun(this.ticket.submitedName,  time).then((res) => {
          this.imageLists.push(res);
        });
      },
      delete_img(item){
        this.imageLists.splice(item,1);
		 	},
        saveTicket(){
          if(this.ticket.systemNo==null || this.ticket.systemNo.replace(/(^s*)|(s*$)/g, "").length==0) {
            alert('请选择系统!');
            return;
          }
          if(this.ticket.eventDesc==null || this.ticket.eventDesc.replace(/(^s*)|(s*$)/g, "").length==0) {
            alert('事件描述不能为空!');
            return;
          }
          if(this.ticket.submitedBy==null || this.ticket.submitedBy.length==0) {
            alert('获取用户出现错误，请联系管理员!'+this.ticket.submitedName);
            //return;
          }
          saveTicketFun(this.ticket.submitedBy, this.ticket.submitedName, this.ticket.submitedMobile, 
        this.ticket.submitedDept, this.ticket.systemNo, this.ticket.systemName, this.ticket.eventDesc, this.imageLists).then((res) => {
            alert('保存成功!');
            if (this.$router) {
              this.$router.back(-1);
            }
          });
        },
    }
  };
</script>