// 记录工作中一些解决问题的方法
computed: {
  /**
   * [imgMin description]
   * 后台获取到的图片取缩略图 url 的方法
   * @param  {[type]} imgUrl 原图片 url
   * @param  {[type]} size   压缩后的尺寸 '-800x800'
   * @return {[type]}        压缩后的图片的 url
   */
  minImg: function(imgUrl, size) {
    let url = imgUrl;
    let dotLength = url.lastIndexOf('.');
    let prefix = url.slice(0, dotLength);
    let suffix = url.slice(dotLength);
    url = prefix + size + suffix;
    return url;
  },
  /**
   * [maxImg description]
   * 将压缩图转换为制定尺寸的大图或原图
   * @param  {[type]} imgUrl 压缩后的图片 url
   * @param  {[type]} size   大图的尺寸 '-1000x1000'，传 0 则为原图
   * @return {[type]}        大图 url
   */
  maxImg: function(imgUrl, size) {
    let url = imgUrl
    let stubLength = url.lastIndexOf('-');
    let dotLength = url.lastIndexOf('.');
    let prefix = url.slice(0, stubLength);
    let suffix = url.slice(dotLength);
    if (size == 0) {
      size = ''
    };
    url = prefix + size + suffix;
    return url
  },
  proto: function() {
    return {
      /**
       * [isInteger description]
       * 判断一个数是不是整数
       * @param  {[type]}  num 
       * @return {Boolean}     
       */
      isInteger: function(num) {
        return typeof num == 'number' && num % 1 == 0;
      },
      /**
       * [copyArr description]
       * 拷贝数组
       * @param  {[type]} arr 元素组
       * @return {[type]}     拷贝后的新数组
       */
      copyArr: function(arr) {
        return arr.slice()
      },
      /**
       * [consoleLog description]
       * 指定间隔时间打印出数组中的元素
       * @param  {[type]} a 数组
       * @param  {[type]} t 间隔时间
       * @return {[type]}   
       */
      consoleLog: function(a, t) {
        let arr = a,
          len = arr.length,
          index = 0;
        let timer = setInterval(function() {
          if (index >= len) {
            clearInterval(timer)
          } else {
            console.log(arr[index]);
          }
          index += 1;
        }, t)
      },
      /**
       * [shuffle description]
       * 生成固定长度的乱序数组
       * @param  {[type]} length 要生成的数组长度
       * @return {[type]}        乱序后的数组
       */
      shuffleArr: function(length) {
        let arr = [];
        let len = length;
        for (let i = 0; i < len; i++) {
          arr.push(i)
        }
        arr.sort(function() {
          return Math.random() > 0.5 ? -1 : 1;
        });
        return arr;
      },
      /**
       * [getUrlParams description]
       * 获取 url 中的参数
       * @param  {[type]} url 传入的 url
       * @return {[type]}     参数对象，如果没有参数，则为 {}
       */
      getUrlParams: function(url) {
        var search = url ? (url.split('?')[1] || '') : window.location.search.substr(1),
          paramArray = search.split('&'),
          paramObj = {};
        for (var i = 0; i < paramArray.length; i++) {
          // 将每个键值按 '=' 拆分
          var param = paramArray[i].split('=');
          // 参数值需要 decodeURI
          paramObj[param[0]] = decodeURI(param[1] || '');
          // 如果没有参数，返回空对象
          if (Object.keys(paramObj) == '') {
            paramObj = {};
          }
        }
        return paramObj;
      },
      /**
       * [isHttps description]
       * 判断当前网址是否是 https 网址
       * @return {Boolean} 
       */
      isHttps: function() {
        if ('https:' == location.protocol) {
          console.log('这是一个https网址')
          return true
        } else {
          console.log('这是一个http网址')
          return false
        }
      },
      /**
       * [getHost description]
       * 获取域名主机
       * https://zhuanlan.zhihu.com/p/23076321 => zhuanlan.zhihu.com
       * @param  {[type]} url 完整的 url
       * @return {[type]}     域名主机
       */
      getHost: function(url) {
        var host = "null";
        if (typeof url == "undefined" || null == url) {
          url = window.location.href;
        }
        var regex = /^\w+\:\/\/([^\/]*).*/;
        var match = url.match(regex);
        if (typeof match != "undefined" && null != match) {
          host = match[1];
        }
        return host;
      },
      /**
       * [randomNum description]
       * 返回 min-max 之间的一个随机整数
       * @param  {[type]} min 最小值
       * @param  {[type]} max 最大值
       * @return {[type]}     随机整数
       */
      randomNum: function(min, max) {
        var c = max - min + 1;
        return Math.floor(Math.random() * c + min);
      }
    }
  }
}
