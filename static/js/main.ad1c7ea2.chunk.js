(this["webpackJsonporb-stream"]=this["webpackJsonporb-stream"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);t.default="\nvarying vec2 vUv;\nvoid main() {\n    vUv = uv;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    //gl_Position = vec4(position, 1.0);\n}"},21:function(e,t,n){"use strict";n.r(t);t.default="\nvarying vec2 vUv;\n\nuniform sampler2D videoTexture;\nuniform vec2 resolution;\n\nvoid main()\n{\n  vec2 uv = vec2(0.5) + vUv * resolution.xy - resolution.xy*0.5;\n  vec4 color = vec4(0.);\n  if (uv.x>=0.0 && uv.y>=0.0 && uv.x<1.0 && uv.y<1.0) color = vec4(texture2D(videoTexture, uv).rgb, 1.0);\n  gl_FragColor = color;\n}\n"},22:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(3),i=n.n(r),c=n(9),a=n.n(c),s=(n(18),n(4)),u=n(0),d=n(10),l=n(6),v=n.n(l),h=n(11),f=n(7),m=n.n(f),w=n.p+"static/media/fire.5b252a8b.mp4",b=n(12),p=function(e){return Math.floor(Math.random()*e)},j=0,x=20,g=50,O=new u.s(1,30,30),y=new u.p,k=new b.a,E=new u.o,M=new u.t(9999,9999),S=[],z=[],C=function(e){var t=n(20).default,o=n(21).default,r=new u.v(e),i=new u.m(10,10),c=new u.q({uniforms:{resolution:{value:new u.t(1,16/9)},videoTexture:{value:r}},transparent:!0,vertexShader:t,fragmentShader:o,depthWrite:!0,depthTest:!0}),a=new u.g(i,c);a.position.z=-10,a.position.y=.5,y.add(a);var s=new u.b(10,6.5,2),d=new u.i({color:"black"}),l=new u.g(s,d);l.castShadow=!0,l.position.z=-11.1,z.push(l),y.add(l)},P=100,L=function(e){for(var t=e.video,n=void 0===t?document.querySelector("#master"):t,o=e.color,r=e.n,i=void 0===r?1:r,c=0;c<i;c++){var a=new u.c("rgb(".concat(p(255)+20,", ").concat(p(255)+20,", ").concat(p(255)+20,")")),s=O,d=new u.h({color:o||a,transparent:!0,opacity:0}),l=new u.g(s,d),v=2*Math.random()*P-100,h=Math.random()*P,f=2*Math.random()*P-100;l.position.set(v,h,f),l.rotation.y=1.5*Math.PI,l.castShadow=!0,n&&(l.vId=n.id.replace("remote-video-","")),y.add(l),S.push(l)}};function A(e){var t=e.changeVolume,n=Object(r.useRef)();return Object(r.useEffect)((function(){var e=n.current,o=e.getContext("2d"),r=e.width,i=e.height;o.rect(0,0,r,i),o.fillStyle="#00ffb1",o.fill();var c=!0;e.onmousedown=function(e){c=!1},e.ontouchstart=function(){return c=!1};var a=function(n){if(!c){var o=e.getBoundingClientRect(),r=e.getContext("2d"),a={x:(n.touches?n.touches[0].clientX:n.clientX)-o.left};r.clearRect(0,0,r.canvas.width,r.canvas.height),r.beginPath(),r.rect(0,0,a.x,i),r.fill(),t(a.x/r.canvas.width)}};e.onmousemove=a,e.ontouchmove=a,document.onmouseup=function(){return c=!0}}),[t]),Object(o.jsx)("div",{id:"volume",children:Object(o.jsx)("canvas",{ref:n})})}function R(e){var t=e.videoRef,n=e.isPlaying,r=e.isMuted,i=e.toggleMute;e.setupAudioContext;return Object(o.jsxs)("div",{id:"controls-container",children:[Object(o.jsx)("div",{onClick:function(){var e=t.current;e.currentTime=e.seekable.end(0)},children:"Go To Live"}),Object(o.jsx)("div",{onClick:function(){var e=t.current;n?e.pause():e.play()},children:n?"Pause":"Play"}),Object(o.jsx)("div",{onClick:i,children:r?"Unmute":"Mute"}),"iPhone"!==navigator.platform&&Object(o.jsx)(A,{changeVolume:function(e){return t.current.volume=(o=0,(n=e)>(r=1)?r:n<o?o:n);var n,o,r}})]})}var B="https://ice.raptor.pizza/hls/meiosis.m3u8";function X(e){var t=e.createScreen,n=e.phase,i=e.videoRef,c=e.setupAudioContext,a=e.test,u=void 0!==a&&a,d=e.muteOverride,l=Object(r.useState)(!u),f=Object(s.a)(l,2),b=f[0],p=f[1],j=Object(r.useState)(0),x=Object(s.a)(j,2),g=x[0],O=x[1],y=Object(r.useState)(!1),k=Object(s.a)(y,2),E=k[0],M=k[1],S=Object(r.useState)(!0),z=Object(s.a)(S,2),C=z[0],P=z[1],L=Object(r.useCallback)(Object(h.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.current,e.next=3,fetch(B).then((function(e){return e})).then((function(e){if(404===e.status)return!1;p(!1);var n=B;if(m.a.isSupported()){var o=new m.a;o.loadSource(n),o.attachMedia(t)}else t.src=n}));case 3:case"end":return e.stop()}}),e)}))),[i]);Object(r.useEffect)((function(){P(d)}),[d]),Object(r.useEffect)((function(){L()}),[L]);var A=Object(r.useCallback)((function(){return O(g+1)}),[g]);Object(r.useEffect)((function(){if(b)return g>15?(O(0),L()):void setTimeout(A,1e3)}),[L,A,g,b]),Object(r.useEffect)((function(){i.current.src=w,t(i.current),i.current.onplay=function(){return M(!0)},i.current.onpause=function(){return M(!1)}}),[]),Object(r.useEffect)((function(){var e=i.current;e.muted=!!C}),[C,i]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("video",{id:"artist-stream",className:"video-js",crossOrigin:"true",ref:i,playsInline:!0,autoPlay:!0,loop:!0,controls:!0,muted:!0}),n>1&&Object(o.jsx)(R,{videoRef:i,isPlaying:E,isMuted:C,toggleMute:function(e){P(!C)},setupAudioContext:c})]})}var I=n(8);function T(e){var t=e.setupAudioContext,n=e.setPhase,i=Object(r.useState)(),c=Object(s.a)(i,2),a=c[0],u=c[1],d=Object(r.useRef)();return Object(r.useEffect)((function(){var e=d.current.getBoundingClientRect();setTimeout((function(){u({marginLeft:-e.width/2+"px",marginTop:-e.height/2+"px",opacity:1})}),1e3)}),[]),Object(o.jsxs)("div",{ref:d,style:Object(I.a)(Object(I.a)({opacity:0},a),{},{transition:"opacity 1s",userSelect:"none",color:"#ff0000"}),className:"centered-cta",children:["Sound?",Object(o.jsxs)("div",{className:"icon-cta",children:[Object(o.jsx)("div",{onClick:function(){console.log("sound"),n(2),t({muted:!1})},children:Object(o.jsx)(q,{})}),Object(o.jsx)("div",{onClick:function(){console.log("no sound"),n(2),t({muted:!0})},children:Object(o.jsx)(W,{})})]})]})}var F,N,Y,q=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"#ff0000",children:Object(o.jsx)("path",{d:"M3 9v6h-1v-6h1zm13-7l-9 5v2.288l7-3.889v13.202l-7-3.889v2.288l9 5v-20zm-11 5h-5v10h5v-10zm13.008 2.093c.742.743 1.2 1.77 1.198 2.903-.002 1.133-.462 2.158-1.205 2.9l1.219 1.223c1.057-1.053 1.712-2.511 1.715-4.121.002-1.611-.648-3.068-1.702-4.125l-1.225 1.22zm2.142-2.135c1.288 1.292 2.082 3.073 2.079 5.041s-.804 3.75-2.096 5.039l1.25 1.254c1.612-1.608 2.613-3.834 2.616-6.291.005-2.457-.986-4.681-2.595-6.293l-1.254 1.25z"})})},W=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"#ff0000",children:Object(o.jsx)("path",{d:"M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm15.324 4.993l1.646-1.659-1.324-1.324-1.651 1.67-1.665-1.648-1.316 1.318 1.67 1.657-1.65 1.669 1.318 1.317 1.658-1.672 1.666 1.653 1.324-1.325-1.676-1.656z"})})};function U(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(!0),a=Object(s.a)(c,2),l=a[0],v=a[1],h=Object(r.useRef)(void 0),f=Object(r.useRef)(void 0);Object(r.useEffect)((function(){if(2===n)try{Y.lock(),Y.isLocked=!0}catch(e){Y.isLocked=!0}}),[Y,n]);var m=function e(t){var n=t.muted;if(console.log("uaidoai"),v(n),"iPhone"!==navigator.platform){var o=new(window.AudioContext||window.webkitAudioContext);F=o.createAnalyser();var r=o.createMediaElementSource(f.current);r.connect(F),r.connect(o.destination),F.fftSize=512;var i=F.frequencyBinCount;N=new Uint8Array(i),h.current.removeEventListener("click",e,!0),h.current.removeEventListener("touchstart",e,!0)}};return Object(r.useEffect)((function(){if(void 0!==h.current){var e=new u.k(75,window.innerWidth/window.innerHeight,.1,1e3),t=j,n=x,o=g;e.position.set(t,n,o),e.lookAt(0,0,0);var r=!1,c=!1,a=!1,s=!1,l=new u.u,v=new u.u,m=new u.w;m.setClearColor(new u.c(1,1,1)),m.setSize(window.innerWidth,window.innerHeight),m.setPixelRatio(window.devicePixelRatio),m.shadowMap.enabled=!0,m.shadowMap.type=u.j,h.current.appendChild(m.domElement);var w=function(){var e=new u.s(1,20,20),t=new u.h({color:new u.c(1,0,0),transparent:!0}),n=new u.g(e,t);n.name="start-button";var o={x:j,y:x-2,z:g-5,widthSegments:1,heightSegments:1};return n.position.set(o.x,o.y,o.z),y.add(n),n}();!function(){var e=new u.l(200,200,100,100);e.rotateX(-Math.PI/2),e=e.toNonIndexed();var t=new u.i({color:"white"}),n=new u.g(e,t);n.position.y=-2,n.receiveShadow=!0,n.castShadow=!0,n.name="floor",y.add(n)}(),function(){var e=new u.d(16777215,1.9,100);e.position.set(0,70,30),e.target.position.set(0,0,-10),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=500,e.shadow.camera.left=-50,e.shadow.camera.right=50,e.shadow.camera.top=50,e.shadow.camera.bottom=-50,y.add(e),y.add(e.target)}(),h.current.addEventListener("touchstart",G,!0),h.current.addEventListener("click",G,!0);var b=!1,p=!1;document.addEventListener("touchstart",(function(e){var t=function(e){return e.touches||e.originalEvent.touches}(e)[0];O=t.clientX,C=t.clientY,P.set(e.touches[0].clientX,e.touches[0].clientY)}),!1),document.addEventListener("touchend",(function(e){r=!1,c=!1}),!1),document.addEventListener("touchmove",(function(e){if(!b)return;if(A.set(e.touches[0].clientX,e.touches[0].clientY),R.subVectors(A,P),P.copy(A),B+=2*Math.PI*R.y/m.domElement.height*.3,X+=2*Math.PI*R.x/m.domElement.width*.5,!O||!C)return;var t=e.touches[0].clientX,n=e.touches[0].clientY,o=O-t,i=C-n;Math.abs(o)>Math.abs(i)||(i>0?c=!0:r=!0);O=null,C=null}),!1);var O=null,C=null,P=new u.t,A=new u.t,R=new u.t,B=0,X=1*Math.PI/180,I={minPolarAngle:0};I.maxPolarAngle=Math.PI;var T,q,W,U,H=new u.e(0,0,0,"YXZ"),V=new u.a,D=!0,_=new u.n,J=0;!function t(){T=requestAnimationFrame(t),B===W&&X===U||b&&(W=B,U=X,H.set(B,X,0,"YXZ"),_.setFromEuler(H),e.quaternion.copy(_));var n=performance.now();if(Y&&Y.isLocked){v.z=Number(r)-Number(c),v.x=Number(s)-Number(a),v.normalize();var o=(n-q)/1e3;l.x-=10*l.x*o,l.z-=10*l.z*o;var i=Y.getObject(),d=new u.u;d.copy(i.position),l.y-=98*o,(r||c)&&(l.z-=400*v.z*o),(a||s)&&(l.x-=400*v.x*o),Y.moveRight(-l.x*o),Y.moveForward(-l.z*o);var h=new u.r(i.position,2);if(z.length>0){var f=z[0];f.geometry.computeBoundingBox(),V.copy(f.geometry.boundingBox).applyMatrix4(f.matrixWorld),h.intersectsBox(V)&&(l.y=Math.max(0,l.y),0===Y.getObject().position.y&&i.position.copy(d),D=!0)}Y.getObject().position.y+=l.y*o,Y.getObject().position.y<0&&(l.y=0,Y.getObject().position.y=0,D=!0)}q=n,F&&F.getByteFrequencyData(N),b&&(J+=.9);for(var w=0;w<S.length;w++){S[w].material.opacity=J/w,S[w].rotation.y+=.01;var p=Math.sin(.001*n+w);if(S[w].scale.set(p,p,p),F){var j=N[w%256]/100;S[w].scale.set(j,j,j)}}m.render(y,e),k.update()}();var Z=function(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Z,!1),function(){cancelAnimationFrame(T),window.removeEventListener("resize",Z,!1)}}function G(t){if(function(e){var t={x:0,y:0};e instanceof TouchEvent?(t.x=e.touches[0].clientX,t.y=e.touches[0].clientY):(t.x=e.clientX,t.y=e.clientY),M.x=t.x/window.innerWidth*2-1,M.y=-t.y/window.innerHeight*2+1}(t),E.setFromCamera(M,e),E.intersectObjects([w]).length>0){if(f.current.play(),!p){p=!0;var n,o=performance.now(),v=w.material.color;!function t(){var f=.001*(performance.now()-o);if(w.material.color.set(v.lerp(new u.c(0,0,1),f)),w.material.opacity=function(e,t,n){return e*(n-t)+t}(f-1,1,0),i(1),f>2)return b=!0,Y=new d.a(e,h.current),h.current.addEventListener("click",(function(){return Y.lock()})),y.add(Y.getObject()),document.addEventListener("keydown",(function(e){switch(e.key){case"w":r=!0;break;case"a":a=!0;break;case"s":c=!0;break;case"d":s=!0;break;case" ":D&&(l.y+=100),D=!1}}),!1),document.addEventListener("keyup",(function(e){switch(e.key){case"w":r=!1;break;case"a":a=!1;break;case"s":c=!1;break;case"d":s=!1}}),!1),L({n:1e3}),cancelAnimationFrame(n);n=requestAnimationFrame(t)}()}h.current.removeEventListener("click",G,!0),h.current.removeEventListener("touchstart",G,!0)}}}),[]),Object(o.jsxs)("div",{style:{width:"100%",height:"100%"},ref:h,children:[1===n&&Object(o.jsx)(T,{setupAudioContext:m,setPhase:i}),Object(o.jsx)(X,{createScreen:C,phase:n,videoRef:f,test:false,setupAudioContext:m,muteOverride:l})]})}function H(){return Object(o.jsx)("div",{children:Object(o.jsx)(U,{})})}a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(H,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ad1c7ea2.chunk.js.map