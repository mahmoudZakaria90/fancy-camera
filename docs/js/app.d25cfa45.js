(function(t){function e(e){for(var a,s,o=e[0],u=e[1],l=e[2],d=0,f=[];d<o.length;d++)s=o[d],r[s]&&f.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,o=1;o<i.length;o++){var u=i[o];0!==r[u]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},r={app:0},n=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/fancy-camera/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("64a9"),r=i.n(a);r.a},"179e":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],s={},o=s,u=(i("034f"),i("2877")),l=Object(u["a"])(o,r,n,!1,null,null,null),c=l.exports,d=(i("f5df"),i("2f62"));a["a"].use(d["a"]);var f=new d["a"].Store({strict:!0,state:{file:{blob:null}},mutations:{uploadFile:function(t,e){t.file.blob=e}},actions:{uploadFile:function(t,e){t.commit("uploadFile",e)}}}),h=i("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),i("Header"),i("Uploader")],1)},m=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"text-align":"right"}},[i("h3",{staticStyle:{display:"inline-block",margin:"0 200px 0 0",padding:"10px 0"}},[t._v("No UI, not yet!")]),i("a",{attrs:{href:"https://github.com/mahmoudZakaria90/fancy-camera"}},[i("img",{staticClass:"attachment-full size-full",staticStyle:{position:"fixed",right:"0",top:"0"},attrs:{width:"149",height:"149",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149",alt:"Fork me on GitHub","data-recalc-dims":"1"}})])])}],g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("h1",[t._v("Fancy Camera")]),i("p",[t._v("Upload files type: .JPEG, .PNG")])])}],b={},_=b,y=(i("7cf8"),Object(u["a"])(_,g,v,!1,null,"5c580bfd",null)),w=y.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("input",{attrs:{type:"file",id:"uploader",hidden:"",accept:"image/*"},on:{change:t.upload}}),i("label",{attrs:{for:"uploader"}},[i("span",[t._v("Choose file")]),i("span",[t._v(t._s(t.fileName))])]),i("router-link",{staticClass:"submit",attrs:{to:"/tool",tag:"button"}},[t._v("Submit")])],1)},C=[],$=(i("7f7f"),{data:function(){return{fileName:"No file."}},methods:{upload:function(t){var e=t.target.files;e.length&&(this.fileName=e[0].name,this.$store.dispatch("uploadFile",URL.createObjectURL(e[0])))}}}),H=$,R=(i("6d12"),Object(u["a"])(H,x,C,!1,null,"59191f19",null)),j=R.exports,O={components:{Header:w,Uploader:j}},k=O,W=Object(u["a"])(k,p,m,!1,null,null,null),E=W.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{on:{mousemove:t.setCameraCoords}},[i("Adjuster",{attrs:{width:t.cameraWidth,height:t.cameraHeight}}),i("img",{ref:"img",attrs:{src:t.file,alt:"image"}}),i("Camera",{attrs:{coordLeft:t.coordLeft,coordTop:t.coordTop,width:t.cameraWidth,height:t.cameraHeight,img:t.img}})],1)},L=[],P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"adjuster"},[i("label",[i("span",[t._v("Width:")]),i("input",{attrs:{disabled:t.isResult,type:"text"},domProps:{value:t.width},on:{input:t.setWidth}})]),i("label",[i("span",[t._v("Height:")]),i("input",{attrs:{disabled:t.isResult,type:"text"},domProps:{value:t.height},on:{input:t.setHeight}})]),i("span",[t._v("Min = 250, Max = Screen resolution")])])},T=[],N={data:function(){return{isResult:!1}},props:["width","height"],methods:{setWidth:function(t){t.target.value>=this.width&&t.target.value<=window.innerWidth&&Q.$emit("setWidth",t.target.value)},setHeight:function(t){t.target.value>=this.height&&t.target.value<=window.innerHeight&&Q.$emit("setHeight",t.target.value)}},created:function(){var t=this;Q.$on("isResult",function(e){return t.isResult=e})}},U=N,F=(i("f3b3"),Object(u["a"])(U,P,T,!1,null,"2bd93fb6",null)),I=F.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isResult?t._e():i("div",{ref:"camera",staticClass:"camera",style:Object.assign({},t.coords,{width:t.mutableWidth+"px",height:t.mutableHeight+"px"}),on:{click:t.capture}},[i("div",{staticClass:"camera-square"}),i("div",{staticClass:"camera-square"}),i("div",{staticClass:"camera-square"}),i("div",{staticClass:"camera-square"}),i("span",{staticClass:"camera-circle"})]),t.isResult?i("div",{staticClass:"result",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.resetIsResult(e)}}},[i("div",{staticClass:"result-header"},[i("span",[t._v("Here you go!")]),i("button",{staticClass:"dismiss",on:{click:t.resetIsResult}},[t._v("×")])]),i("canvas",{ref:"result",attrs:{width:t.mutableWidth,height:t.mutableHeight}}),i("a",{attrs:{href:t.resultHref,download:""}},[t._v("Download")])]):t._e()])},q=[],G=(i("a481"),i("c5f6"),{props:["width","height","coordLeft","coordTop","img"],data:function(){return{mutableWidth:this.width,mutableHeight:this.height,camera:null,resultHref:null,isResult:!1}},created:function(){var t=this;Q.$on("setWidth",function(e){return t.mutableWidth=e}),Q.$on("setHeight",function(e){return t.mutableHeight=e}),this.initSetup()},computed:{coords:function(){var t=this.mutableWidth/2,e=this.mutableHeight/2;return{top:this.coordTop-e+"px",left:this.coordLeft-t+"px"}}},mounted:function(){this.$refs.camera&&(this.camera=this.$refs.camera)},updated:function(){if(this.$refs.result){var t=this.$refs.result,e=t.getContext("2d"),i=54,a=Number(this.coords.left.replace("px","")),r=Number(this.coords.top.replace("px",""))-i;e.drawImage(this.img,a,r,this.mutableWidth,this.mutableHeight,0,0,this.mutableWidth,this.mutableHeight),this.resultHref=t.toDataURL()}Q.$emit("isResult",this.isResult)},methods:{initSetup:function(){var t=this;document.addEventListener("keyup",function(e){"Escape"===e.key&&27===e.keyCode&&t.resetIsResult()})},resetIsResult:function(){this.isResult=!1},capture:function(){var t=this.img.getBoundingClientRect(),e=t.top,i=t.bottom,a=t.left,r=t.right,n=this.camera.getBoundingClientRect(),s=n.top,o=n.bottom,u=n.left,l=n.right;u>=a&&l<=r&&s>=e&&o<=i&&(this.isResult=!0)}}}),J=G,z=(i("8696"),Object(u["a"])(J,M,q,!1,null,"03a4869b",null)),A=z.exports,B={data:function(){return{cameraWidth:250,cameraHeight:250,coordLeft:0,coordTop:0,img:null}},components:{Adjuster:I,Camera:A},computed:{file:function(){return this.$store.state.file.blob}},created:function(){this.file||this.$router.push("/")},mounted:function(){this.$refs.img&&(this.img=this.$refs.img)},methods:{setCameraCoords:function(t){this.coordLeft=t.pageX,this.coordTop=t.pageY}}},D=B,X=Object(u["a"])(D,S,L,!1,null,"f9d92b5e",null),Y=X.exports;a["a"].use(h["a"]);var Z=[{path:"/",name:"dashboard",component:E},{path:"/tool",name:"tool",component:Y}],K=new h["a"]({mode:"history",base:"/fancy-camera/",routes:Z});i.d(e,"bus",function(){return Q}),a["a"].config.productionTip=!1;var Q=new a["a"];new a["a"]({store:f,router:K,render:function(t){return t(c)}}).$mount("#app")},"64a9":function(t,e,i){},"6d12":function(t,e,i){"use strict";var a=i("179e"),r=i.n(a);r.a},7594:function(t,e,i){},"7cf8":function(t,e,i){"use strict";var a=i("927d"),r=i.n(a);r.a},8696:function(t,e,i){"use strict";var a=i("c015"),r=i.n(a);r.a},"927d":function(t,e,i){},c015:function(t,e,i){},f3b3:function(t,e,i){"use strict";var a=i("7594"),r=i.n(a);r.a}});
//# sourceMappingURL=app.d25cfa45.js.map