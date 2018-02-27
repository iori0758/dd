<template>
  <div>
    <wxc-button text="Open Popup"
                @wxcButtonClicked="buttonClicked"></wxc-button>
    <wxc-popup width="500"
               pos="left"
               :show="isShow"
               @wxcPopupOverlayClicked="overlayClicked"></wxc-popup>
  </div>
</template>
<script>
  import { WxcButton, WxcPopup } from 'weex-ui';
  module.exports = {
    components: { WxcButton, WxcPopup },
    data: () => ({
      isShow: false
    }),
    methods: {
      buttonClicked () {
        this.isShow = true;
      },
      overlayClicked () {
        this.isShow = false;
      }
    }
  };
</script>
<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 750px;
    align-items: center;
  }
  .title {
    font-size: 60px;
    color: #505050;
    text-align: center;
  }
  .subtitle {
    display: block;
    font-size: 30px;
    color: #AAAAAA;
    text-align: center;
    margin-top: 20px;
  }
  .bind-vue-container {
    width: 702px;
    height: 88px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: #4fc08d;
  }
  .bind-vue{
    font-size: 34px;
    color: #ffffff;
    text-align: center;
  }
</style>
