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