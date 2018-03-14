//import dingtalk from 'weex-dingtalk';
//import dingtalk from 'weex-dingtalk';
//import journey from 'weex-dingtalk-journey';
var dingtalk = require('dingtalk-javascript-sdk');
import DTUtility from 'dingtalk-javascript-utility';

const { requireModule, querystring, url, env, config  } = DTUtility;
const modal = requireModule('modal');
const stream = requireModule('stream');
const domModule=weex.requireModule("dom");
let uid = 1;

export function fetchBundleUrl(){
  return env.bundleUrl;
}

export function initIconFont(msg, cb){
  domModule.addRule('fontFace',{
    'fontFamily':'iconfont',   //注意这里必须是驼峰命名，跟上面的css样式对照
    'src':"url(\'http://at.alicdn.com/t/font_355062_oh3brk0z2o2h85mi.ttf\')"
  })
}

export function openUrl (url) {
  dingtalk.ready(function(){
    dingtalk.apis.biz.util.openLink({
      url :url
    });
  });
}

export function request (config,cb,progressCb){
  let { method, uri, body, type, headers } = config;
  if (!uri || typeof uri !== 'string'){
    return;
  }
  let requestConf = {
    method,
    type: type || 'json',
    headers
  };
  if (method === 'GET'){
    let cur = false;
    const len = uri.length - 1;
    const middle = uri.lastIndexOf('?');
    if (middle > -1 && middle === len ){
      uri = uri.substring(0,middle);
    }
    if (middle === -1){
      uri = uri + '?';
    }
    if (typeof body === 'object' && body !== null){
      uri = uri + querystring.stringify(body);
    }
    if (typeof body === 'string'){
      uri = uri + body;
    }
    requestConf.url = uri;
  } else {
    requestConf.url = uri;
    requestConf.body = body;
  }
  stream.fetch(requestConf,function(res){
    let u = false;
    let data = {};
    if (res.ok){
      u = true;
    }
    if (typeof cb === 'function'){
      cb(u ? null : {}, res);
    }
  },progressCb);
}

export function fetchCorpId(){
  return url.parse(config.originalUrl,'corpId');
}

export function authCode(){
  return new Promise(function(resolve, reject){
    dingtalk.ready(function(){
      dingtalk.apis.runtime.permission.requestAuthCode({
        corpId: fetchCorpId(),
        onSuccess (result){
          
          resolve(result);
          //alert('authCode80'+result);
        },
        onFail (err){
          //alert('authCode80'+err);
          reject(err);
        }
      });
    });
  });
}

export function setRight(config,cb){
  const { control } = config;
  dingtalk.ready(function(){
    dingtalk.apis.biz.navigation.setRight(config);
    if (control){
      dingtalk.on('navRightButton',cb);
    }
  });
}

export function removeRightEvent(cb){
  dingtalk.ready(function(){
    dingtalk.off('navRightButton',cb);
  });
}

export function setLeft(config, cb){
  const { control } = config;
  dingtalk.ready(function(){
    dingtalk.apis.biz.navigation.setLeft(config);
    if (control){
      dingtalk.on('goBack',cb);
    }
  });
}

export function removeLeftEvent(cb){
  dingtalk.ready(function(){
    dingtalk.off('goBack',cb);
  });
}

export function toast (msg) {
  modal.toast({
    message: msg,
    duration: 2
  });
}

export function confirm(msg, cb){
  modal.confirm({
    message: msg
  },function(result){
    if (typeof cb === 'function'){
      cb(result);
    }
  })
}

export function getUid(){
  uid++;
  return String(uid + 'icepy');
}

export function setTitle(title){
  dingtalk.ready(function(){
    dingtalk.apis.biz.navigation.setTitle({
      title: title
    })
  });
}

export function share(opt){
  dingtalk.ready(function(){
    dingtalk.apis.biz.util.share({
      type: 0,
      url: 'https://github.com/icepy',
      title: 'icepy',
      content: '1234',
      image:'https://avatars2.githubusercontent.com/u/3321837?v=4&s=400&u=474bf7c009911c87a36679fe18ab6e5aba26d9b7'
    })
  })
}

export function getNowFormatDate(){
  var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}
