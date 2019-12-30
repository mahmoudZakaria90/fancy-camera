(function(t){function e(e){for(var i,s,o=e[0],c=e[1],u=e[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},r={app:0},n=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/fancy-camera/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("64a9"),r=a.n(i);r.a},2676:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],s=(a("034f"),a("2877")),o={},c=Object(s["a"])(o,r,n,!1,null,null,null),u=c.exports,l=(a("f5df"),a("2f62"));i["a"].use(l["a"]);var f=new l["a"].Store({strict:!0,state:{file:{blob:null},camera:{width:250,height:250}},getters:{cameraSize:function(t){return t.camera}},mutations:{uploadFile:function(t,e){t.file.blob=e},setWidth:function(t,e){t.camera.width=e},setHeight:function(t,e){t.camera.height=e}},actions:{uploadFile:function(t,e){t.commit("uploadFile",e)},setWidth:function(t,e){t.commit("setWidth",e)},setHeight:function(t,e){t.commit("setHeight",e)}}}),d=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero-outer"},[a("div",{staticClass:"hero-inner"},[t._m(0),a("Hero")],1)])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://github.com/mahmoudZakaria90/fancy-camera"}},[a("img",{staticClass:"attachment-full size-full",staticStyle:{position:"fixed",right:"0",top:"0"},attrs:{width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149",alt:"Fork me on GitHub","data-recalc-dims":"1"}})])}],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero"},[a("h1",[t._v("Fancy Camera")]),a("p",[t._v("Upload and crop images using camera lens style!")]),a("uploader")],1)},g=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.upload(e)}}},[a("input",{attrs:{type:"file",id:"uploader",hidden:"",accept:"image/*"},on:{change:t.viewFileName}}),a("label",{attrs:{for:"uploader"}},[a("span",[t._v("Choose file")]),a("span",{staticClass:"filename"},[t._v(t._s(t.fileName))])]),a("button",{staticClass:"submit",attrs:{type:"submit",disabled:"No file."===t.fileName}},[t._v("Submit")])])},b=[],_=(a("7f7f"),a("768b")),w={data:function(){return{fileName:"No file."}},methods:{viewFileName:function(t){var e=t.target.files,a=Object(_["a"])(e,1),i=a[0],r=i.name;e.length&&(this.fileName=r)},upload:function(t){var e=Object(_["a"])(t.target,1),a=e[0],i=a.files,r=Object(_["a"])(i,1),n=r[0];i.length&&(this.$store.dispatch("uploadFile",URL.createObjectURL(n)),this.$router.push("/tool"))}}},y=w,C=(a("9b5c"),Object(s["a"])(y,v,b,!1,null,"0b5bc38e",null)),S=C.exports,x={components:{Uploader:S}},$=x,j=(a("8147"),Object(s["a"])($,m,g,!1,null,"5c5e712e",null)),O=j.exports,z={components:{Hero:O}},R=z,k=(a("b6c1"),Object(s["a"])(R,h,p,!1,null,"4ace2350",null)),H=k.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{on:{mousemove:t.setCameraCoords}},[a("Adjuster"),a("img",{ref:"img",attrs:{src:t.file,alt:"image"}}),a("Camera",{attrs:{coordLeft:t.coordLeft,coordTop:t.coordTop,img:t.img}})],1)},L=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"adjuster"},[a("label",[a("span",[t._v("Lens width: ")]),a("input",{attrs:{disabled:t.isResult,type:"text"},domProps:{value:t.cameraSize.width},on:{input:t.setWidth}})]),a("label",[a("span",[t._v("Lens height: ")]),a("input",{attrs:{disabled:t.isResult,type:"text"},domProps:{value:t.cameraSize.height},on:{input:t.setHeight}})]),a("span",[t._v("Min = 250, Max = Screen resolution")])])},P=[],T={data:function(){return{isResult:!1}},computed:{cameraSize:function(){return this.$store.getters.cameraSize}},methods:{setWidth:function(t){t.target.value>=this.cameraSize.width&&t.target.value<=window.innerWidth&&this.$store.dispatch("setWidth",t.target.value)},setHeight:function(t){t.target.value>=this.cameraSize.height&&t.target.value<=window.innerHeight&&this.$store.dispatch("setHeight",t.target.value)}},created:function(){var t=this;Q.$on("isResult",(function(e){return t.isResult=e}))}},F=T,W=(a("7907"),Object(s["a"])(F,N,P,!1,null,"94dc3ece",null)),M=W.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isResult?t._e():a("div",{ref:"camera",staticClass:"camera",style:Object.assign({},t.coords,{width:t.cameraSize.width+"px",height:t.cameraSize.height+"px"}),on:{click:t.capture}},[a("div",{staticClass:"camera-square"}),a("div",{staticClass:"camera-square"}),a("div",{staticClass:"camera-square"}),a("div",{staticClass:"camera-square"}),a("span",{staticClass:"camera-circle"})]),t.isResult?a("div",{staticClass:"result",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.resetIsResult(e)}}},[a("div",{staticClass:"result-header"},[a("span",[t._v("Here you go!")]),a("button",{staticClass:"dismiss",on:{click:t.resetIsResult}},[t._v("×")])]),a("canvas",{ref:"result",attrs:{width:t.cameraSize.width,height:t.cameraSize.height}}),a("a",{attrs:{href:t.resultHref,download:""}},[t._v("Download")])]):t._e()])},U=[],q=(a("a481"),a("c5f6"),{props:["coordLeft","coordTop","img"],data:function(){return{camera:null,resultHref:null,isResult:!1}},created:function(){this.initSetup()},computed:{cameraSize:function(){return this.$store.getters.cameraSize},coords:function(){var t=this.cameraSize.width/2,e=this.cameraSize.height/2;return{top:this.coordTop-e+"px",left:this.coordLeft-t+"px"}}},mounted:function(){this.$refs.camera&&(this.camera=this.$refs.camera)},updated:function(){if(this.$refs.result){var t=this.$refs.result,e=t.getContext("2d"),a=54,i=Number(this.coords.left.replace("px","")),r=Number(this.coords.top.replace("px",""))-a;e.drawImage(this.img,i,r,this.cameraSize.width,this.cameraSize.height,0,0,this.cameraSize.width,this.cameraSize.height),this.resultHref=t.toDataURL()}Q.$emit("isResult",this.isResult)},methods:{initSetup:function(){var t=this;document.addEventListener("keyup",(function(e){"Escape"===e.key&&27===e.keyCode&&t.resetIsResult()}))},resetIsResult:function(){this.isResult=!1},capture:function(){var t=this.img.getBoundingClientRect(),e=t.top,a=t.bottom,i=t.left,r=t.right,n=this.camera.getBoundingClientRect(),s=n.top,o=n.bottom,c=n.left,u=n.right;c>=i&&u<=r&&s>=e&&o<=a&&(this.isResult=!0)}}}),D=q,A=(a("d111"),Object(s["a"])(D,I,U,!1,null,"88ebc9b2",null)),B=A.exports,J={data:function(){return{coordLeft:0,coordTop:0,img:null}},components:{Adjuster:M,Camera:B},computed:{file:function(){return this.$store.state.file.blob}},created:function(){this.file||this.$router.push("/")},mounted:function(){this.$refs.img&&(this.img=this.$refs.img)},methods:{setCameraCoords:function(t){this.coordLeft=t.pageX,this.coordTop=t.pageY}}},G=J,X=Object(s["a"])(G,E,L,!1,null,"50c67114",null),Y=X.exports;i["a"].use(d["a"]);var Z=[{path:"/",name:"dashboard",component:H},{path:"/tool",name:"tool",component:Y}],K=new d["a"]({mode:"hash",base:"/fancy-camera/",routes:Z});a.d(e,"bus",(function(){return Q})),i["a"].config.productionTip=!1;var Q=new i["a"];new i["a"]({store:f,router:K,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,a){},7907:function(t,e,a){"use strict";var i=a("2676"),r=a.n(i);r.a},8147:function(t,e,a){"use strict";var i=a("b905"),r=a.n(i);r.a},"9a00":function(t,e,a){},"9b5c":function(t,e,a){"use strict";var i=a("b378"),r=a.n(i);r.a},a4d0:function(t,e,a){},b378:function(t,e,a){},b6c1:function(t,e,a){"use strict";var i=a("9a00"),r=a.n(i);r.a},b905:function(t,e,a){},d111:function(t,e,a){"use strict";var i=a("a4d0"),r=a.n(i);r.a}});
//# sourceMappingURL=app.6372ce06.js.map