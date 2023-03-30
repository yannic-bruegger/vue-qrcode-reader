(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{310:function(e,t,r){"use strict";r.d(t,"c",(function(){return F})),r.d(t,"a",(function(){return M})),r.d(t,"b",(function(){return W}));r(176),r(69),r(9);var n,a,i,o=r(371),c=(r(97),r(42)),s=(r(179),r(178),r(95)),u=(r(68),r(28)),d=r(168),l=r(171),f=r(409),h=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.call(this,"can't process cross-origin image")).name="DropImageFetchError",e}return r}(Object(f.a)(Error)),m=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.call(this,"this browser has no Stream API support")).name="StreamApiNotSupportedError",e}return r}(Object(f.a)(Error)),p=function(e){Object(d.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.call(this,"camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.")).name="InsecureContextError",e}return r}(Object(f.a)(Error)),v=r(357),b=function(e){if(e.length>0){var t=Object(s.a)(e,1)[0],r=Object(s.a)(t.cornerPoints,4),n=r[0],a=r[1],i=r[2],o=r[3];return{content:t.rawValue,location:{topLeftCorner:n,topRightCorner:a,bottomRightCorner:i,bottomLeftCorner:o,topLeftFinderPattern:{},topRightFinderPattern:{},bottomLeftFinderPattern:{}},imageData:null}}return{content:null,location:null,imageData:null}},g=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.startsWith("http")||!1!==t.includes(location.host)){e.next=2;break}throw new h;case 2:return(r=document.createElement("img")).src=t,e.next=6,Object(v.a)(r,"load");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new BarcodeDetector({formats:["qr_code"]}),e.next=3,r.detect(t);case 3:return n=e.sent,e.abrupt("return",b(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new BarcodeDetector({formats:["qr_code"]}),e.next=3,g(t);case 3:return n=e.sent,e.next=6,r.detect(n);case 6:return a=e.sent,e.abrupt("return",b(a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=(r(24),r(98),r(25),r(99),r(30),r(397),r(64)),O=r(401),j=r(402),y=r(403),R=r(404),D=r(325),C=(n=function(){switch(Object(D.c)(window).browser){case"chrome":Object(O.a)(window);break;case"firefox":Object(y.a)(window);break;case"edge":Object(j.a)(window);break;case"safari":Object(R.a)(window);break;default:throw new m}},a=!1,i=void 0,function(){return a||(i=n.apply(void 0,arguments),a=!0),i}),S=function(){function e(t,r){Object(u.a)(this,e),this.videoEl=t,this.stream=r}return Object(k.a)(e,[{key:"stop",value:function(){var e=this;this.videoEl.srcObject=null,this.stream.getTracks().forEach((function(t){e.stream.removeTrack(t),t.stop()}))}},{key:"getCapabilities",value:function(){var e,t,r=this.stream.getVideoTracks(),n=Object(s.a)(r,1)[0];return null!==(e=null==n||null===(t=n.getCapabilities)||void 0===t?void 0:t.call(n))&&void 0!==e?e:{}}}]),e}(),I=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,n,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=["OBS Virtual Camera","OBS-Camera","Desk View Camera","Schreibtischansicht-Kamera","Caméra Desk View","Fotocamera di Panoramica Scrivania","Rückseitige Ultra-Weitwinkelkamera","Rückseitige Telefotokamera","Rückseitige Dual-Weitwinkelkamera","Rückseitige Triple-Kamera","Back Dual Wide Camera","Back Triple Camera","Back Ultra Wide Camera"],e.next=3,navigator.mediaDevices.enumerateDevices();case 3:if(!((n=e.sent.filter((function(e){return"videoinput"===e.kind})).filter((function(e){var t=e.label;return!r.includes(t)})).filter((function(e){return!e.label.includes("infrared")}))).length>2)){e.next=16;break}a=n[0],i=n[n.length-1],e.t0=t,e.next="auto"===e.t0?10:"rear"===e.t0?11:"front"===e.t0?12:13;break;case 10:case 11:return e.abrupt("return",{deviceId:{exact:i.deviceId}});case 12:return e.abrupt("return",{deviceId:{exact:a.deviceId}});case 13:return e.abrupt("return",void 0);case 14:e.next=23;break;case 16:e.t1=t,e.next="auto"===e.t1?19:"rear"===e.t1?20:"front"===e.t1?21:22;break;case 19:return e.abrupt("return",{facingMode:{ideal:"environment"}});case 20:return e.abrupt("return",{facingMode:{exact:"environment"}});case 21:return e.abrupt("return",{facingMode:{exact:"user"}});case 22:return e.abrupt("return",void 0);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e,t){return B.apply(this,arguments)};function B(){return(B=Object(c.a)(regeneratorRuntime.mark((function e(t,r){var n,a,i,c,u,d,l,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.camera,c=r.torch,!0===window.isSecureContext){e.next=3;break}throw new p;case 3:if(void 0!==(null===(n=navigator)||void 0===n||null===(a=n.mediaDevices)||void 0===a?void 0:a.getUserMedia)){e.next=5;break}throw new m;case 5:return e.next=7,C();case 7:return e.t0=o.a,e.t1={width:{min:360,ideal:640,max:1920},height:{min:240,ideal:480,max:1080}},e.next=11,I(i);case 11:return e.t2=e.sent,e.t3=(0,e.t0)(e.t1,e.t2),u={audio:!1,video:e.t3},e.next=16,navigator.mediaDevices.getUserMedia(u);case 16:return d=e.sent,void 0!==t.srcObject?t.srcObject=d:void 0!==t.mozSrcObject?t.mozSrcObject=d:window.URL.createObjectURL?t.src=window.URL.createObjectURL(d):window.webkitURL?t.src=window.webkitURL.createObjectURL(d):t.src=d,e.next=20,Object(v.a)(t,"loadeddata");case 20:return e.next=22,Object(v.b)(500);case 22:return c&&(l=d.getVideoTracks(),f=Object(s.a)(l,1),h=f[0],h.getCapabilities().torch?h.applyConstraints({advanced:[{torch:!0}]}):console.warn("device does not support torch capability")),e.abrupt("return",new S(t,d));case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=r(405),P={beforeMount:function(){window.BarcodeDetector=L.a},methods:{onDetect:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.$emit("detect",e),r.prev=1,r.next=4,e;case 4:n=r.sent,null!==(a=n.content)&&t.$emit("decode",a),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(1);case 11:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}},E=r(41),$=Object(E.a)(P,void 0,void 0,!1,null,null,null).exports,_={name:"qrcode-stream",mixins:[$],props:{camera:{type:String,default:"auto",validator:function(e){return["auto","rear","front","off"].includes(e)}},torch:{type:Boolean,default:!1},track:{type:Function}},data:function(){return{cameraInstance:null,destroyed:!1}},computed:{shouldStream:function(){return!1===this.destroyed&&"off"!==this.camera},shouldScan:function(){return!0===this.shouldStream&&null!==this.cameraInstance},scanInterval:function(){return void 0===this.track?500:40}},watch:{shouldStream:function(e){if(!e){var t=this.$refs.pauseFrame,r=t.getContext("2d"),n=this.$refs.video;t.width=n.videoWidth,t.height=n.videoHeight,r.drawImage(n,0,0,n.videoWidth,n.videoHeight)}},shouldScan:function(e){e&&(this.clearCanvas(this.$refs.pauseFrame),this.clearCanvas(this.$refs.trackingLayer),this.startScanning())},torch:function(){this.init()},camera:function(){this.init()}},mounted:function(){this.init()},beforeDestroy:function(){this.beforeResetCamera(),this.destroyed=!0},methods:{init:function(){var e=this,t=Object(c.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.beforeResetCamera(),"off"!==e.camera){t.next=6;break}return e.cameraInstance=null,t.abrupt("return",{capabilities:{}});case 6:return t.next=8,q(e.$refs.video,{camera:e.camera,torch:e.torch});case 8:return e.cameraInstance=t.sent,r=e.cameraInstance.getCapabilities(),e.destroyed&&e.cameraInstance.stop(),t.abrupt("return",{capabilities:r});case 12:case"end":return t.stop()}}),t)})))();this.$emit("init",t)},startScanning:function(){var e=this;!function(e,t){var r=new BarcodeDetector({formats:["qr_code"]}),n=t.detectHandler,a=t.locateHandler,i=t.minDelay;!function t(o){return function(){var s=Object(c.a)(regeneratorRuntime.mark((function c(s){var u,d,l,f,h,m,p,v;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!(e.readyState>1)){c.next=13;break}if(u=o.lastScanned,d=o.contentBefore,l=o.locationBefore,!(s-u>=i)){c.next=12;break}return c.next=5,r.detect(e);case 5:f=c.sent,h=b(f),m=h.content,p=h.location,v=h.imageData,null!==m&&m!==d&&n({content:m,location:p,imageData:v}),null===p&&null===l||a(f),window.requestAnimationFrame(t({lastScanned:s,contentBefore:null!=m?m:d,locationBefore:p})),c.next=13;break;case 12:window.requestAnimationFrame(t(o));case 13:case"end":return c.stop()}}),c)})));return function(e){return s.apply(this,arguments)}}()}({contentBefore:null,locationBefore:null,lastScanned:performance.now()})()}(this.$refs.video,{detectHandler:function(t){e.onDetect(Promise.resolve(t))},locateHandler:this.onLocate,minDelay:this.scanInterval})},beforeResetCamera:function(){null!==this.cameraInstance&&(this.cameraInstance.stop(),this.cameraInstance=null)},onLocate:function(e){var t=this.$refs.trackingLayer,r=this.$refs.video;if(void 0!==t)if(e.length>0&&void 0!==this.track&&void 0!==r){var n=r.offsetWidth,a=r.offsetHeight,i=r.videoWidth,c=r.videoHeight,s=Math.max(n/i,a/c),u=i*s,d=c*s,l=u/i,f=d/c,h=(n-u)/2,m=(a-d)/2,p=function(e){var t=e.x,r=e.y;return{x:Math.floor(t*l),y:Math.floor(r*f)}},v=function(e){var t=e.x,r=e.y;return{x:Math.floor(t+h),y:Math.floor(r+m)}},b=e.map((function(e){var t=e.boundingBox,r=e.cornerPoints,n=v(p({x:t.x,y:t.y})),a=n.x,i=n.y,c=p({x:t.width,y:t.height}),s=c.x,u=c.y;return Object(o.a)(Object(o.a)({},e),{},{cornerPoints:r.map((function(e){return v(p(e))})),boundingBox:DOMRectReadOnly.fromRect({x:a,y:i,width:s,height:u})})}));t.width=r.offsetWidth,t.height=r.offsetHeight;var g=t.getContext("2d");this.track(b,g)}else this.clearCanvas(t)},repaintTrackingLayer:function(e,t,r){var n=this,a=t.getContext("2d");window.requestAnimationFrame((function(){t.width=displayWidth,t.height=displayHeight,n.trackRepaintFunction(coordinatesAdjusted,a)}))},clearCanvas:function(e){e.getContext("2d").clearRect(0,0,e.width,e.height)}}},F=(r(406),Object(E.a)(_,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"qrcode-stream-wrapper"},[t("video",{ref:"video",staticClass:"qrcode-stream-camera",class:{"qrcode-stream-camera--hidden":!this.shouldScan},attrs:{autoplay:"",muted:"",playsinline:""},domProps:{muted:!0}}),this._v(" "),t("canvas",{directives:[{name:"show",rawName:"v-show",value:!this.shouldScan,expression:"!shouldScan"}],ref:"pauseFrame",staticClass:"qrcode-stream-camera"}),this._v(" "),t("canvas",{ref:"trackingLayer",staticClass:"qrcode-stream-overlay"}),this._v(" "),t("div",{staticClass:"qrcode-stream-overlay"},[this._t("default")],2)])}),[],!1,null,"35411cc1",null).exports),T=r(39),H={name:"qrcode-capture",mixins:[$],methods:{onChangeInput:function(e){Object(T.a)(e.target.files).map(w).forEach(this.onDetect)}}},M=Object(E.a)(H,(function(){var e=this.$createElement;return(this._self._c||e)("input",{attrs:{type:"file",name:"image",accept:"image/*",capture:"environment",multiple:""},on:{change:this.onChangeInput}})}),[],!1,null,null,null).exports,U={name:"qrcode-drop-zone",mixins:[$],methods:{onDragOver:function(e){this.$emit("dragover",e)},onDrop:function(e){var t=this,r=e.dataTransfer;this.onDragOver(!1);var n=Object(T.a)(r.files),a=r.getData("text/uri-list");n.forEach((function(e){t.onDetect(w(e))})),""!==a&&this.onDetect(x(a))}}},W=Object(E.a)(U,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{on:{drop:function(t){return t.preventDefault(),t.stopPropagation(),e.onDrop(t)},dragenter:function(t){return t.preventDefault(),t.stopPropagation(),e.onDragOver(!0)},dragleave:function(t){return t.preventDefault(),t.stopPropagation(),e.onDragOver(!1)},dragover:function(e){e.preventDefault(),e.stopPropagation()}}},[e._t("default")],2)}),[],!1,null,null,null).exports;var V={install:function(e){e.component("qrcode-stream",F),e.component("qrcode-capture",M),e.component("qrcode-drop-zone",W)}},A=null;"undefined"!=typeof window?A=window.Vue:"undefined"!=typeof global&&(A=global.Vue),A&&A.use(V)},341:function(e,t,r){},406:function(e,t,r){"use strict";var n=r(341);r.n(n).a}}]);