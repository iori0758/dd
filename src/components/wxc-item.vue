<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/03/31. -->

<template>
  <div class="wxc-item">

    <text class="icon-font" >&#xe61a;</text>
    <div class="item-content">
    
      <text class="item-text">新事件提醒-{{eventStatusList[eventStatus]}}</text> 

      <text class="item-text">    您有新的事件{{eventStatusList[eventStatus]}}{{eventTODOStatusList[eventStatus]}}</text>
      <text class="item-text">事件编号: {{ttcketNo}}</text>
      <text class="item-text">提报人:  {{submitedName}}</text>
      <text class="item-text">提报人手机: {{submitedMobile}}</text>
      <text class="item-text">提报时间:  {{submitedDate}}</text>
      <text class="item-text" lines=1>事件描述: {{eventDesc}}</text>
      <div class="empty-row">1</div>
      <text class="item-text">查看详情</text>
    </div>
  </div>
</template>

<style scoped>
.empty-row {
    height: 30px;
  }
  .wxc-item {
    width: 750px;
    height: 376px;
    background-color: #FFFFFF;
    flex-direction: row;
  }

  .item-image {
    width: 168px;
    height: 168px;
    margin-top: 24px;
    margin-left: 24px;
    margin-bottom: 24px;
    margin-right: 24px;
  }

  .image-desc {
    position: absolute;
    left: 24px;
    top: 186px;
    width: 198px;
    height: 36px;
    background-color: rgba(0, 0, 0, .8);
    align-items: center;
    justify-content: center;
  }

  .image-text {
    font-size: 24px;
    color: #ffffff;
  }

  .item-content {
    flex: 1;
    background-color: #FFFFFF;
    border-bottom-width: 1px;
    border-bottom-color: #e0e0e0;
    border-bottom-style: solid;
    justify-content: space-between;
    padding-top: 24px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 18px;
  }

  .item-text {
    padding-left: 24px;
    font-size: 28px;
    line-height: 40px;
    color: #333333;
    lines: 1;
    text-overflow: ellipsis;
  }

  .item-price {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 36px;
  }

  .price-num {
    flex-direction: row;
    align-items: center;
  }

  .yen {
    color: #FF5E00;
    font-size: 24px;
    line-height: 26px;
    margin-right: 2px;
    margin-top: 4px;
  }

  .price {
    color: #FF5E00;
    font-size: 36px;
    line-height: 40px;
  }

  .postfix {
    font-size: 24px;
    line-height: 28px;
    color: #A5A5A5;
    margin-top: 6px;
    margin-left: 2px;
  }

  .category-tag {
    padding-right: 16px;
    padding-left: 12px;
    height: 36px;
    justify-content: center;
    border-top-right-radius: 0;
    border-bottom-right-radius: 24px;
    background-color: #FFC900;
    position: absolute;
    top: 24px;
    left: 24px;
  }

  .tag-text {
    font-size: 32px;
    line-height: 40px;
    margin-right: 2px;
    margin-top: 4px;
    color: #3d3d3d;
    lines: 2;
    text-overflow: ellipsis;
  }

    .icon-font{
      width: 168px;
    height: 168px;
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

</style>

<script> 
  const expressionBinding = weex.requireModule('expressionBinding');
  const domModule=weex.requireModule("dom");
  import { WxcRichText, WxcSpecialRichText, WxcCell, Utils } from 'weex-ui';
  import { EVENTSTATUS, EVENTTODOSTATUS } from '../libs/env.js';

  export default {
    components: { WxcRichText, WxcSpecialRichText, WxcCell },
    props: {
      title: {
        type: [String, Array],
        default: ''
      },
      eventStatus: {
        type: String,
        default: ''
      },
      ttcketNo: {
        type: [String, Array],
        default: 'aaa'
      },
      submitedName: {
        type: String,
        default: ''
      },
      submitedMobile: {
        type: String,
        default: ''
      },
      submitedDate: {
        type: String,
        default: ''
      },
      eventDesc: {
        type: String,
        default: ''
      },
    },
    data: () => ({
      yenSymbol: '\u00A5',
      eventStatusList: EVENTSTATUS,
      eventTODOStatusList : EVENTTODOSTATUS,
    }),
    computed: {
      isTitleString () {
        return Utils.isString(this.title);
      }
    },
    created () {
      var domModule=weex.requireModule("dom");
      domModule.addRule('fontFace',{
        'fontFamily':'iconfont',   //注意这里必须是驼峰命名，跟上面的css样式对照
        'src':"url(\'http://at.alicdn.com/t/font_355062_oh3brk0z2o2h85mi.ttf\')"
      })
    },
    methods: {
    }
  };
</script>
