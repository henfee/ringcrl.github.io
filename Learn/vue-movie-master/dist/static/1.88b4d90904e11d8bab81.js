webpackJsonp([1],{3:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={props:["show","near"]}},4:function(t,a){},5:function(t,a){t.exports=' <div :class="[\'ui-loading-block\',\'show\', near]" v-if=show _v-57497c0c=""> <div class=ui-loading-cnt _v-57497c0c=""> <i class=ui-loading-bright _v-57497c0c=""></i> </div> </div> '},6:function(t,a,s){var e,i;s(4),e=s(3),i=s(5),t.exports=e||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},7:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={props:["left","title","right"],methods:{back:function(){window.history.back()}}}},8:function(t,a){},9:function(t,a){t.exports=' <header class="ui-header ui-header-positive ui-border-b header"> <button class="btn back left" v-if="left == \'back\'" @click=back> <i class=ui-icon-return></i> </button> <button class="btn menu left" v-if="left == \'menu\'"> <i></i> <i></i> <i></i> </button> <button class="btn search right" v-if="right == \'search\'" v-link="{name: \'search\'}"> <i class=ui-icon-search></i> </button> <h1>{{title}}</h1> </header> '},10:function(t,a,s){var e,i;s(8),e=s(7),i=s(9),t.exports=e||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},14:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={props:["score","size"]}},17:function(t,a){},18:function(t,a){t.exports=' <div :class="[\'star\', size]"> <div class=gray> <i class=ui-icon-star v-for="n in 5"></i> </div> <div class=ligh :style="{width: (score * 10) + \'%\'}"> <i class=ui-icon-star v-for="n in 5"></i> </div> <div class=score> {{score}} </div> </div> '},19:function(t,a,s){var e,i;s(17),e=s(14),i=s(18),t.exports=e||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},49:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={data:function(){return{title:"详情",image:"",genres:[],casts:[],score:0,countries:[],summary:"",directors:[]}},route:{data:function(t){var a=this,s=t.to.params;this.$http.jsonp("http://api.douban.com/v2/movie/subject/"+s.id).then(function(t){document.title=a.title=t.data.title,a.image=t.data.images.large,a.genres=t.data.genres,a.casts=t.data.casts,a.score=t.data.rating.average,a.countries=t.data.countries,a.summary=t.data.summary,a.directors=t.data.directors,a.$loadingRouteData=!1})}},components:{headerBar:s(10),star:s(19),loading:s(6)}}},88:function(t,a){},94:function(t,a){t.exports=' <div class=page v-if=!$loadingRouteData transition=fade _v-49b59a67=""> <header-bar left=back :title=title right=search _v-49b59a67=""></header-bar> <div class=banner _v-49b59a67=""> <div class=blur :style="{backgroundImage: \'url(\'+ image +\')\'}" _v-49b59a67=""></div> <div class=info _v-49b59a67=""> <div class=img _v-49b59a67=""><img :src=image alt="" _v-49b59a67=""></div> <div class=txt _v-49b59a67=""> <h1 class=ui-nowrap _v-49b59a67="">{{title}}</h1> <p class=ui-nowrap _v-49b59a67=""><star :score=score size=large _v-49b59a67=""></star></p> <p class=ui-nowrap _v-49b59a67="">类型：{{genres.join(\' \')}}</p> <p class=ui-nowrap _v-49b59a67="">主演：<span v-for="cast in casts" _v-49b59a67="">{{cast.name}} </span></p> <p class=ui-nowrap _v-49b59a67="">地区：{{countries.join(\' \')}}</p> </div> </div> </div> <section class="ui-panel summary" _v-49b59a67=""> <h2 _v-49b59a67=""><a _v-49b59a67="">剧情简介</a><span class=ui-panel-subtitle _v-49b59a67=""></span></h2> <div class="ui-whitespace ui-txt-justify ui-txt-sub ui-txt-info" _v-49b59a67="">{{summary}}</div> </section> <section class="ui-panel directors" _v-49b59a67=""> <h2 _v-49b59a67=""><a _v-49b59a67="">导演</a><span class=ui-panel-subtitle _v-49b59a67=""></span></h2> <div class="ui-row ui-whitespace" _v-49b59a67=""> <div class="ui-col ui-col-33" v-for="director in directors" v-link="{name: \'director\', params: {id: director.id}}" _v-49b59a67=""> <img :src=director.avatars.large _v-49b59a67=""> <h5 class="ui-nowrap ui-arrow" _v-49b59a67="">{{director.name}} <a _v-49b59a67="">(查看)</a></h5> </div> </div> </section> </div> <loading :show=$loadingRouteData _v-49b59a67=""></loading> '},102:function(t,a,s){var e,i;s(88),e=s(49),i=s(94),t.exports=e||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}});
//# sourceMappingURL=1.88b4d90904e11d8bab81.js.map