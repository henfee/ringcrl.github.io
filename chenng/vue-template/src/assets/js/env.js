var browser = {
  versions: function() {
    var u = navigator.userAgent;
    return { //移动终端浏览器版本信息
      u: u,
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //iOS终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // Android 终端或 uc 浏览器
      safari: u.indexOf("Safari") > -1 && u.indexOf("Chrome") < 0, // 是否为 Safari 浏览器
      qq: u.indexOf('QQ') > -1 && u.indexOf('MicroMessenger') < 0, // 是否为 QQ
      wechat: u.indexOf('MicroMessenger') > -1, // 是否为微信
      weibo: u.indexOf('Weibo') > -1 // 是否为微博
    };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
module.exports = {
  "browser": browser
}

// 判断方案
// if (env.browser.versions.mobile) {
//   console.log('在移动端运行')
//   if (env.browser.versions.android) {
//     console.log('在安卓运行')
//     if (env.browser.versions.qq || env.browser.versions.wechat || env.browser.versions.weibo) {
//       console.log('在安卓的QQ、微信、微博中打开')
//     } else {
//       console.log('在安卓自带浏览器中打开')
//     }
//   } else if (env.browser.versions.ios) {
//     console.log('在iOS运行')
//     if (env.browser.versions.qq || env.browser.versions.wechat || env.browser.versions.weibo) {
//       console.log('在iOS的QQ、微信、微博中打开')
//     } else {
//       console.log('在iOS自带浏览器中打开')
//     }
//   } else {
//     console.log('在非iOS非安卓的移动设备中打开')
//   }
// } else {
//   console.log('在非移动端打开')
// }

// 点击下载按钮时候的业务方案
// let url = 'coomixapp://?gmapp:func=postdetail?id=' + this.params.postid + '&citycode=' + this.params.citycode;
// if (env.browser.versions.mobile) {
//   console.log('在移动端运行')
//   if (env.browser.versions.android) {
//     console.log('在安卓运行')
//     if (env.browser.versions.qq || env.browser.versions.wechat || env.browser.versions.weibo) {
//       console.log('在安卓的QQ、微信、微博中打开')
//       this.showShade('浏览器')
//     } else {
//       console.log('在安卓自带浏览器中打开');
//       var ifr = document.createElement('iframe');
//       ifr.src = url;
//       ifr.style.display = 'none';
//       document.body.appendChild(ifr);
//       setTimeout(function() {
//         document.body.removeChild(ifr);
//         location.href = 'http://m.coobus.cn';
//       }, 500);
//     }
//   } else if (env.browser.versions.ios) {
//     console.log('在iOS运行')
//     if (env.browser.versions.qq || env.browser.versions.wechat || env.browser.versions.weibo) {
//       console.log('在iOS的QQ、微信、微博中打开')
//       this.showShade('Safari')
//     } else {
//       console.log('在iOS自带浏览器中打开')
//       location.href = url;
//       setTimeout(function() {
//         location.href = 'http://m.coobus.cn';
//       }, 3000)
//     }
//   } else {
//     console.log('在非iOS非安卓的移动设备中打开')
//   }
// } else {
//   console.log('在非移动端打开')
//   this.$toast({
//     message: '请使用移动端UA打开',
//     duration: 2000
//   })
// }

// 刚进入页面时候的业务方案
// let url = 'coomixapp://?gmapp:func=postdetail?id=' + this.params.postid + '&citycode=' + this.params.citycode;
// if (env.browser.versions.mobile) {
//   console.log('在移动端运行')
//   if (env.browser.versions.android) {
//     console.log('在安卓运行')
//     if (env.browser.versions.qq || env.browser.versions.wechat || env.browser.versions.weibo) {
//       console.log('在安卓的QQ、微信、微博中打开')
//     } else {
//       console.log('在安卓自带浏览器中打开');
//       var ifr = document.createElement('iframe');
//       ifr.src = url;
//       ifr.style.display = 'none';
//       document.body.appendChild(ifr);
//       setTimeout(function() {
//         document.body.removeChild(ifr);
//       }, 500);
//     }
//   } else if (env.browser.versions.ios) {
//     console.log('在iOS运行')
//     if (env.browser.versions.qq || env.browser.versions.wechat || env.browser.versions.weibo) {
//       console.log('在iOS的QQ、微信、微博中打开')
//     } else {
//       console.log('在iOS自带浏览器中打开')
//       location.href = url;
//     }
//   } else {
//     console.log('在非iOS非安卓的移动设备中打开')
//   }
// } else {
//   console.log('在非移动端打开')
// }
