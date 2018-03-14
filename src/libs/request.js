//import dingtalk from 'weex-dingtalk';
var dingtalk = require('dingtalk-javascript-sdk');
import { request, authCode, fetchBundleUrl } from './util.js';
import { APPHOST } from './env.js';


export function jsApiOAuth (){
  let Config = {
    method: 'GET',
    uri: APPHOST + '/api/dingtalk/jsapi-oauth',
    body: {
      href: 'http://192.168.210.199:8082/?corpId=ding008c300096090fa7'
    }
  };
  let jsApiList = [];
  return new Promise(function(resolve, reject){
    request(Config,function(error,res){
      if (!error){
        const data = res.data;
        
        if (data.errcode === 0){
          const oauth = {
            /**agentId: data.agentId || '',
            corpId: data.corpId || '',  
            timeStamp: data.timeStamp || '',
            nonceStr: data.nonceStr || '',
            signature: data.signature || '',*/
            agentId: data.agentId || '',
            corpId: data.corpId || '',  
            timeStamp: data.timeStamp || '',
            nonceStr: data.nonceStr || '',
            signature: data.signature || '',
            url: 'http://192.168.210.199:8082/?corpId=ding008c300096090fa7',
            jsApiList:  ['biz.chat.chooseConversationByCorpId','biz.chat.pickConversation','biz.util.uploadImageFromCamera','biz.util.uploadImage' ]
          };
          
          dingtalk.config(oauth);
          dingtalk.error(function(err){
            /**
             {
                message:"错误信息",//message信息会展示出钉钉服务端生成签名使用的参数，请和您生成签名的参数作对比，找出错误的参数
                errorCode:"错误码"
             }
             **/
            //alert('48'+ JSON.stringify(err));
            error({errCode:-1,msg:'dd.error配置信息不对'})
        });
        
          resolve(data.corpId);
        }
      } else {
        reject(res);
      }
    });
  });
}

export function getUserId (){
  let Config = {
    method: 'GET',
    uri: APPHOST + '/api/dingtalk/get-user-info'
  };
  return new Promise(function(resolve, reject){
    authCode().then(function(result){
      // alert(result.code);
      const code = result.code;
      Config.body = {};
      Config.body.code = code;
      request(Config,function(error,res){
        if (!error && res.ok){
          
          const data = res.data;
          if (data.name){
            resolve(data);
          } else {
            reject(data);
          }
        }
      });
    }).catch(function(err){
      reject(err);
    });
  });
}

export function getUserInfo(userId){
  let Config = {
    method: 'GET',
    uri: APPHOST + '/api/dingtalk/get',
    body: {
      userid: userId
    }
  };
  return new Promise(function(resolve, reject){
    request(Config, function(error, res){
      if (!error && res.ok){
        const data = res.data;
        if (data.name){
          // 再处理
          resolve(data);
        } else {
          reject(data);
        }
      }
    });
  });
}

export function listDict(key){
  let Config = {
    method: 'GET',
    uri: APPHOST + '/api/dingtalk/listDict',
    body: {
      key: key
    }
  };
  return new Promise(function(resolve, reject){
    request(Config, function(error, res){
      if (!error && res.ok){
        const data = res.data;
        if (data.code===0){
          // 再处理
          resolve(data);
        } else {
          reject(data);
        }
      }
    });
  });
}

export function fetchMyTicketApi (userId){
  let Config = {
    method: 'GET',
    body:{
      userId:userId
    },
    uri: APPHOST + '/api/dingtalk/listMyTicket'
  };
  return new Promise(function(resolve, reject){
      request(Config,function(error,res){
        if (!error && res.ok){
          const data = res.data;
          if (data.code==0){
            resolve(data.rows);
          } else {
            reject(data);
          }
        }
      });
  });
}

export function takePhotoFun (userName, time){
  return new Promise(function(resolve, reject){
    dingtalk.ready(function(){
      const dd = dingtalk.apis;
      
      dd.biz.util.uploadImage({
        compression:true,//(是否压缩，默认为true)
        multiple: false, //是否多选，默认false
        max: 3, //最多可选个数
        quality: 50, // 图片压缩质量, 
        resize: 50, // 图片缩放率
        stickers: {   // 水印信息
            time: time,
            dateWeather: "2016.05.06 周六·晴转多云 16℃",
            username: userName,
            address: "卓诗尼"
        },
        onSuccess : function(result) {
          resolve(result)

            //onSuccess将在图片上传成功之后调用
        },
        onFail : function(err) {}
    })
     
    });
  });
          
}

export function saveTicketFun (submitedBy, submitedName, submitedMobile, submitedDept, systemNo, systemName, eventDesc, imageLists){
    let Config = {
      method: 'post',
      headers:{'Content-Type':'application/json; charset=utf-8'},
      body:JSON.stringify({
        submitedBy:submitedBy,
        submitedName: submitedName,
        submitedMobile: submitedMobile,
        submitedDept: submitedDept,
        systemNo: systemNo,
        systemName: systemName,
        eventDesc: eventDesc,
        attachment: imageLists
      }),
      uri: APPHOST + '/api/dingtalk/saveMyTicket'
    };
    return new Promise(function(resolve, reject){
        request(Config,function(error,res){
          
          if (!error && res.ok){
            const data = res.data;
            if (data.code==0){
              alert('aaaaaaaaa')
              resolve(data);
            } else {
              reject(data);
            }
          }
        });
    });
}
