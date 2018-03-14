<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/03/31. -->

<template>
  <div class="wxc-item">

    <div class="item-content">
      <text class="tag-text">新事件提醒1-{{eventStatusText}}</text> 

      <wxc-rich-text :config-list="ttcketNo"></wxc-rich-text>
      <!--
      <text class="item-text">    您有新的事件{{eventStatusText}},请{{eventStatusText}}</text>
      <text class="item-text">事件编号:{{ttcketNo}}</text>
      <text class="item-text">提报人:{{submitedName}}</text>
      <text class="item-text">提报人手机:{{submitedMobile}}</text>
      <text class="item-text">提报人时间:{{submitedDate}}</text>
      -->
    </div>
  </div>
</template>

<style scoped>
  .wxc-item {
    width: 750px;
    height: 386px;
  }

  .item-content {
    flex: 1;
    border-bottom-width: 1px;
    border-bottom-color: #e0e0e0;
    border-bottom-style: solid;
    justify-content: space-between;
    padding-top: 24px;
    padding-right: 24px;
    padding-bottom: 18px;
  }

  .item-text {
    font-size: 28px;
    line-height: 40px;
    color: #333333;
    lines: 2;
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
</style>

<script> 
  const expressionBinding = weex.requireModule('expressionBinding');
  import { WxcRichText, WxcSpecialRichText, WxcCell, Utils } from 'weex-ui';

  export default {
    components: { WxcRichText, WxcSpecialRichText, WxcCell },
    props: {
      title: {
        type: [String, Array],
        default: ''
      },
      eventStatusText: {
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
    },
    data: () => ({
      yenSymbol: '\u00A5'
    }),
    computed: {
      isTitleString () {
        return Utils.isString(this.title);
      }
    }
  };
</script>
