(function(t){function e(e){for(var a,n,c=e[0],l=e[1],o=e[2],f=0,d=[];f<c.length;f++)n=c[f],r[n]&&d.push(r[n][0]),r[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,c=1;c<s.length;c++){var l=s[c];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1293:function(t,e,s){},1892:function(t,e,s){},"3b20":function(t,e,s){},4466:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],n=(s("5c0b"),s("2877")),c={},l=Object(n["a"])(c,r,i,!1,null,null,null),o=l.exports,u=s("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"start"},[s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"text-center mt-3 mt-sm-0"},[s("a",{staticClass:"btn btn-light start-game",attrs:{href:"@"},on:{click:function(e){return e.preventDefault(),t.statGame(e)}}},[t._v("START")])])])])},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-wrap"},[s("div",[s("span",{staticStyle:{color:"white"}},[t._v("TIC")])]),s("div",[s("i",{staticClass:"far fa-circle fa-6x",staticStyle:{color:"#ED494C"}})]),s("div",[s("i",{staticClass:"fas fa-times fa-7x",staticStyle:{color:"#ED494C","text-stroke":"2px white","text-fill-color":"transparent"}})]),s("div",[s("i",{staticClass:"fas fa-times fa-7x",staticStyle:{color:"#ED494C"}})]),s("div",[s("span",{staticStyle:{color:"white"}},[t._v("TAC")])]),s("div",[s("i",{staticClass:"far fa-circle fa-7x",staticStyle:{color:"#FF6D70","text-stroke":"3px #FF6D70","text-fill-color":"transparent"}})]),s("div",[s("i",{staticClass:"far fa-circle fa-7x",staticStyle:{color:"#FF6D70","text-stroke":"3px #FF6D70","text-fill-color":"transparent"}})]),s("div",[s("i",{staticClass:"fas fa-times fa-7x",staticStyle:{color:"#ED494C"}})]),s("div",[s("span",{staticStyle:{color:"white"}},[t._v("TOE")])])])}],p={name:"home",methods:{statGame:function(){this.$router.push("./start")}}},h=p,v=(s("b3c6"),Object(n["a"])(h,f,d,!1,null,"6042d368",null)),y=v.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"game"},[s("div",{staticClass:"container"},[s("div",{staticClass:"d-flex",staticStyle:{transform:"translate(0,15px)"}},[s("div",{staticClass:"text-center align-self-end circle d-flex"},[t._m(0),s("div",{attrs:{clsas:"text-center"}},[t._v(t._s(t.circle))]),t.step%2===0?s("span",[t._v("YOUR TURN!")]):t._e()]),s("div",{staticClass:"text-center vs"},[t._v("VS")]),s("div",{staticClass:"text-center align-self-end cross d-flex"},[s("div",{attrs:{clsas:"text-center"}},[t._v(t._s(t.cross))]),t._m(1),t.step%2!==0?s("span",[t._v("YOUR TURN!")]):t._e()])]),s("transition",{key:"process",attrs:{name:"fade",mode:"out-in"}},["process"===t.statu?s("div",{key:"process",staticClass:"d-flex flex-wrap mt-5"},t._l(t.dataAry,function(e,a){return s("button",{key:a,staticClass:"space",on:{click:function(e){return t.userInput(a)}}},[1===e?s("i",{staticClass:"fas fa-times fa-2x",staticStyle:{color:"white"}}):t._e(),10===e?s("i",{staticClass:"far fa-circle fa-2x"}):t._e()])}),0):t._e(),"over"===t.statu?s(t.view,{key:"over",tag:"component"}):t._e()],1),s("div",{staticClass:"text-center mt-sm-5 mt-3"},[s("a",{staticClass:"btn btn-light restart-game",attrs:{href:"@"},on:{click:function(e){return e.preventDefault(),t.restatGame(e)}}},[t._v("RESTART")])])],1)])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("i",{staticClass:"far fa-circle fa-3x",staticStyle:{color:"white"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("i",{staticClass:"fas fa-times fa-3x",staticStyle:{color:"white"}})])}],_=(s("7514"),s("f499")),C=s.n(_),b=s("795b"),w=s.n(b),A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-5 d-flex justify-content-center result"},[s("div",{staticClass:"shape"}),s("span",{staticClass:"text-center",staticStyle:{"font-style":"italic","text-stroke":"5px white","text-fill-color":"transparent",color:"#fff"}},[t._v("WINNER")])])}],g=(s("65de"),{}),k=Object(n["a"])(g,A,S,!1,null,"515776d6",null),E=k.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-5 d-flex justify-content-center result"},[s("span",{staticClass:"text-center",staticStyle:{"font-style":"italic","text-stroke":"5px white","text-fill-color":"transparent"}},[t._v("WINNER")]),s("div",{staticClass:"cross-bg"},[s("div"),s("div")])])}],T=(s("c17d"),{}),$=Object(n["a"])(T,O,j,!1,null,"2c52f652",null),D=$.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-5 d-flex justify-content-center result"},[s("div",{staticClass:"cross-bg"},[s("div"),s("div")]),s("div",{staticClass:"shape"}),s("span",{staticClass:"text-center",staticStyle:{"font-style":"italic","text-stroke":"5px white","text-fill-color":"transparent"}},[t._v("DRAW")]),s("span",{staticClass:"text-center",staticStyle:{"font-style":"italic","text-stroke":"5px white","text-fill-color":"transparent"}},[t._v("DRAW")]),s("span",{staticClass:"text-center",staticStyle:{"font-style":"italic","text-stroke":"5px white","text-fill-color":"transparent"}},[t._v("DRAW")])])}],F=(s("a859"),{}),I=Object(n["a"])(F,W,R,!1,null,"24e1219a",null),N=I.exports,P=null,G={data:function(){return{dataAry:[0,0,0,0,0,0,0,0,0],step:0,turn:0,statu:"process",circle:0,cross:0,view:""}},components:{CircleWin:E,CrossWin:D,Tie:N},methods:{userInput:function(t){0===this.dataAry[t]&&(this.step++,this.step%2!==0?this.turn=10:this.turn=1,this.$set(this.dataAry,t,this.turn))},restatGame:function(){for(var t=0;t<this.dataAry.length;t++)this.$set(this.dataAry,t,0);this.statu="process",this.step=0},check:function(){var t=this;return new w.a(function(e,s){e("over"),t.winner&&("circle"===t.winner?(t.view="CircleWin",t.circle++):"cross"===t.winner&&(t.view="CrossWin",t.cross++),localStorage.setItem("data",C()([{circle:t.circle,cross:t.cross}])),P=setTimeout(function(){t.statu="over"},200))})}},computed:{calcWinner:function(){return[this.dataAry[0]+this.dataAry[1]+this.dataAry[2],this.dataAry[3]+this.dataAry[4]+this.dataAry[5],this.dataAry[6]+this.dataAry[7]+this.dataAry[8],this.dataAry[0]+this.dataAry[3]+this.dataAry[6],this.dataAry[1]+this.dataAry[4]+this.dataAry[7],this.dataAry[2]+this.dataAry[5]+this.dataAry[8],this.dataAry[0]+this.dataAry[4]+this.dataAry[8],this.dataAry[2]+this.dataAry[4]+this.dataAry[6]]},winner:function(){var t="",e="";return t=this.calcWinner.find(function(t){return 3===t||30===t}),30===t?e="circle":3===t&&(e="cross"),e}},watch:{step:function(){var t=this;this.step>=2&&this.step<9&&this.check(),9===this.step&&this.check().then(function(e){P=setTimeout(function(){t.statu=e;var s="";s=t.calcWinner.find(function(t){return 3===t||30===t}),t.view=30===s?"CircleWin":3===s?"CrosseWin":"Tie"},200)})}},mounted:function(){this.circle=JSON.parse(localStorage.getItem("data"))[0].circle,this.cross=JSON.parse(localStorage.getItem("data"))[0].cross},beforeDestroy:function(){clearTimeout(P)}},J=G,M=(s("64bf"),Object(n["a"])(J,m,x,!1,null,"706e0b49",null)),U=M.exports;a["a"].use(u["a"]);var Y=new u["a"]({routes:[{path:"/",name:"home",component:y},{path:"/start",name:"start",component:U},{path:"*",redirect:"/"}]}),V=s("2f62");a["a"].use(V["a"]);var q=new V["a"].Store({state:{},mutations:{},actions:{}});s("4989"),s("ab8b");a["a"].config.productionTip=!1,new a["a"]({router:Y,store:q,render:function(t){return t(o)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("5e27"),r=s.n(a);r.a},"5e27":function(t,e,s){},6221:function(t,e,s){},"64bf":function(t,e,s){"use strict";var a=s("1293"),r=s.n(a);r.a},"65de":function(t,e,s){"use strict";var a=s("6221"),r=s.n(a);r.a},a859:function(t,e,s){"use strict";var a=s("3b20"),r=s.n(a);r.a},b3c6:function(t,e,s){"use strict";var a=s("1892"),r=s.n(a);r.a},c17d:function(t,e,s){"use strict";var a=s("4466"),r=s.n(a);r.a}});
//# sourceMappingURL=app.b149878a.js.map