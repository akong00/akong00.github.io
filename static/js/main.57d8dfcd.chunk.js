(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{57:function(e,n,t){e.exports=t(81)},65:function(e,n,t){},66:function(e,n,t){},78:function(e,n,t){},79:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"setLayer1",function(){return R});var i=t(0),o=t.n(i),a=t(22),u=t.n(a),c=t(28),l=t(35),s=t(19),v=t(18),m={home:{panels:[{position:"center",colorTheme:["w"],title:"Albert Kong",body:"all my babies",link:"/bio"},{position:"right",colorTheme:["v","v","b"],title:"Projects",body:"all my babies",link:"/projects"},{position:"top",colorTheme:["o","o","o"],title:"Work Experience",body:"all the experience in the world",link:"/experience"},{position:"left",colorTheme:["r"],title:"Education",body:"all my babies",link:"/education"},{position:"bottom",colorTheme:["g","y"],title:"Activities",body:"all my babies",link:"/activities"}]}};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_LAYER_1":return function(e,n){return Object(v.a)({},e,{home:Object(v.a)({},e.home,{layer1:n.payload.data})})}(e,n);default:return e}},h=Object(s.b)({content:f}),d=Object(s.c)(h),p=(t(65),t(66),t(24)),g=t(25),b=t(30),y=t(26),x=t(31),T=t(16),E="SET_LAYER_1";function R(e){return{type:E,payload:{data:e}}}var D=Object(v.a)({},r),w=t(5),L=t(17),F=t(29),S=t(46),A=64,O=256,B=.96,_=.98,P=.9,M=5,U=40,G=.5,C=!1,j=0;function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=function(e,n,t,r){var i,o,a,u=Math.floor(6*e),c=.7,l=6*e-u,s=t*(1-n),v=t*(1-l*n),m=t*(1-(1-l)*n);switch(r[Math.floor(Math.random()*r.length)]){case"r":i=t,o=s,a=v;break;case"o":i=t,o=m,a=s;break;case"y":i=v,o=t,a=s;break;case"g":i=s,o=t,a=m;break;case"b":i=s,o=v,a=t;break;case"v":i=m,o=s,a=t;break;case"w":i=c,o=c,a=c;break;default:switch(u%6){case 0:i=t,o=m,a=s;break;case 1:i=v,o=t,a=s;break;case 2:i=s,o=t,a=m;break;case 3:i=s,o=v,a=t;break;case 4:i=m,o=s,a=t;break;case 5:i=t,o=s,a=v;break;default:i=c,o=c,a=c}}return{r:i,g:o,b:a}}(Math.random(),1,1,e);return n.r*=.15,n.g*=.15,n.b*=.15,n}var z="\n  precision highp float;\n\n  // This shader is from the awesome demo at:\n  // https://github.com/PavelDoGreat/WebGL-Fluid-Simulation\n\n  attribute vec2 aPosition;\n\n  uniform vec2 texelSize;\n\n  varying vec2 vUv;\n  varying vec2 vL;\n  varying vec2 vR;\n  varying vec2 vT;\n  varying vec2 vB;\n  \n  void main () {\n    vUv = aPosition * 0.5 + 0.5;\n    vL = vUv - vec2(texelSize.x, 0.0);\n    vR = vUv + vec2(texelSize.x, 0.0);\n    vT = vUv + vec2(0.0, texelSize.y);\n    vB = vUv - vec2(0.0, texelSize.y);\n\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n  }\n",W="\n  precision highp float;\n  precision highp sampler2D;\n\n  // This shader is from the awesome demo at:\n  // https://github.com/PavelDoGreat/WebGL-Fluid-Simulation\n\n  varying vec2 vUv;\n  uniform sampler2D uVelocity;\n  uniform sampler2D uSource;\n  uniform vec2 texelSize;\n  uniform float dt;\n  uniform float dissipation;\n\n  void main () {\n    vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n    gl_FragColor = dissipation * texture2D(uSource, coord);\n    gl_FragColor.a = 1.0;\n  }\n",N="\n  precision highp float;\n  precision highp sampler2D;\n\n  // This shader is from the awesome demo at:\n  // https://github.com/PavelDoGreat/WebGL-Fluid-Simulation\n\n  varying vec2 vUv;\n  uniform sampler2D uVelocity;\n  uniform sampler2D uSource;\n  uniform vec2 texelSize;\n  uniform vec2 dyeTexelSize;\n  uniform float dt;\n  uniform float dissipation;\n\n  vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n    vec2 st = uv / tsize - 0.5;\n\n    vec2 iuv = floor(st);\n    vec2 fuv = fract(st);\n\n    vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n    vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n    vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n    vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n\n    return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n  }\n\n  void main () {\n    vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n\n    gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);\n    gl_FragColor.a = 1.0;\n  }\n",V="\n  precision highp float;\n  precision highp sampler2D;\n\n  // This shader is from the awesome demo at:\n  // https://github.com/PavelDoGreat/WebGL-Fluid-Simulation\n\n  varying vec2 vUv;\n  uniform sampler2D uTexture;\n  uniform float aspectRatio;\n\n  #define SCALE 25.0\n\n  void main () {\n    vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));\n    float v = mod(uv.x + uv.y, 2.0);\n    v = v * 0.1 + 0.8;\n    gl_FragColor = vec4(vec3(v), 1.0);\n  }\n",I="\n  precision mediump float;\n  precision mediump sampler2D;\n\n  // This shader is from the awesome demo at:\n  // https://github.com/PavelDoGreat/WebGL-Fluid-Simulation\n\n  varying highp vec2 vUv;\n  uniform sampler2D uTexture;\n  uniform float value;\n\n  void main () {\n    gl_FragColor = value * texture2D(uTexture, vUv);\n  }\n",X="\n  precision mediump float;\n\n  // This shader is from the awesome demo at:\n  // https://github.com/PavelDoGreat/WebGL-Fluid-Simulation\n\n  uniform vec4 color;\n\n  void main () {\n    gl_FragColor = color;\n  }\n",H="\n  precision mediump float;\n  precision mediump sampler2D;\n\n  // This shader is from the awesome demo at:\n  // https://github.com/PavelDoGreat/WebGL-Fluid-Simulation\n\n  uniform sampler2D uVelocity;\n\n  varying highp vec2 vUv;\n  varying highp vec2 vL;\n  varying highp vec2 vR;\n  varying highp vec2 vT;\n  varying highp vec2 vB;\n\n  void main () {\n    float L = texture2D(uVelocity, vL).y;\n    float R = texture2D(uVelocity, vR).y;\n    float T = texture2D(uVelocity, vT).x;\n    float B = texture2D(uVelocity, vB).x;\n    float vorticity = R - L - T + B;\n\n    gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n  }\n",Y="\n  precision highp float;\n  precision highp sampler2D;\n\n  // This shader is from the awesome demo at:\n  // https://github.com/PavelDoGreat/WebGL-Fluid-Simulation\n\n  varying vec2 vUv;\n  varying vec2 vL;\n  varying vec2 vR;\n  varying vec2 vT;\n  varying vec2 vB;\n  uniform sampler2D uTexture;\n  uniform vec2 texelSize;\n\n  void main () {\n    vec3 L = texture2D(uTexture, vL).rgb;\n    vec3 R = texture2D(uTexture, vR).rgb;\n    vec3 T = texture2D(uTexture, vT).rgb;\n    vec3 B = texture2D(uTexture, vB).rgb;\n    vec3 C = texture2D(uTexture, vUv).rgb;\n\n    float dx = length(R) - length(L);\n    float dy = length(T) - length(B);\n\n    vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n    vec3 l = vec3(0.0, 0.0, 1.0);\n\n    float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n    C.rgb *= diffuse;\n\n    float a = max(C.r, max(C.g, C.b));\n    gl_FragColor = vec4(C, a);\n  }\n",J="\n  precision mediump float;\n  precision mediump sampler2D;\n\n  // This shader is from the awesome demo at:\n  // https://github.com/PavelDoGreat/WebGL-Fluid-Simulation\n\n  varying highp vec2 vUv;\n  varying highp vec2 vL;\n  varying highp vec2 vR;\n  varying highp vec2 vT;\n  varying highp vec2 vB;\n  uniform sampler2D uVelocity;\n\n  void main () {\n    float L = texture2D(uVelocity, vL).x;\n    float R = texture2D(uVelocity, vR).x;\n    float T = texture2D(uVelocity, vT).y;\n    float B = texture2D(uVelocity, vB).y;\n\n    vec2 C = texture2D(uVelocity, vUv).xy;\n    if (vL.x < 0.0) { L = -C.x; }\n    if (vR.x > 1.0) { R = -C.x; }\n    if (vT.y > 1.0) { T = -C.y; }\n    if (vB.y < 0.0) { B = -C.y; }\n\n    float div = 0.5 * (R - L + T - B);\n\n    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n  }\n",K="\n  precision mediump float;\n  precision mediump sampler2D;\n\n  // This shader is from the awesome demo at:\n  // https://github.com/PavelDoGreat/WebGL-Fluid-Simulation\n\n  varying highp vec2 vUv;\n  varying highp vec2 vL;\n  varying highp vec2 vR;\n  varying highp vec2 vT;\n  varying highp vec2 vB;\n  uniform sampler2D uPressure;\n  uniform sampler2D uVelocity;\n\n  vec2 boundary (vec2 uv) {\n    return uv;\n    // uv = min(max(uv, 0.0), 1.0);\n    // return uv;\n  }\n\n  void main () {\n    float L = texture2D(uPressure, boundary(vL)).x;\n    float R = texture2D(uPressure, boundary(vR)).x;\n    float T = texture2D(uPressure, boundary(vT)).x;\n    float B = texture2D(uPressure, boundary(vB)).x;\n    vec2 velocity = texture2D(uVelocity, vUv).xy;\n    velocity.xy -= vec2(R - L, T - B);\n    gl_FragColor = vec4(velocity, 0.0, 1.0);\n  }\n",q="\n  precision mediump float;\n  precision mediump sampler2D;\n\n  // This shader is from the awesome demo at:\n  // https://github.com/PavelDoGreat/WebGL-Fluid-Simulation\n\n  varying highp vec2 vUv;\n  varying highp vec2 vL;\n  varying highp vec2 vR;\n  varying highp vec2 vT;\n  varying highp vec2 vB;\n  uniform sampler2D uPressure;\n  uniform sampler2D uDivergence;\n\n  vec2 boundary (vec2 uv) {\n    return uv;\n    // uncomment if you use wrap or repeat texture mode\n    // uv = min(max(uv, 0.0), 1.0);\n    // return uv;\n  }\n\n  void main () {\n    float L = texture2D(uPressure, boundary(vL)).x;\n    float R = texture2D(uPressure, boundary(vR)).x;\n    float T = texture2D(uPressure, boundary(vT)).x;\n    float B = texture2D(uPressure, boundary(vB)).x;\n    float C = texture2D(uPressure, vUv).x;\n    float divergence = texture2D(uDivergence, vUv).x;\n    float pressure = (L + R + B + T - divergence) * 0.25;\n    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n  }\n",Q="\n  precision highp float;\n  precision highp sampler2D;\n\n  // This shader is from the awesome demo at:\n  // https://github.com/PavelDoGreat/WebGL-Fluid-Simulation\n\n  varying vec2 vUv;\n\n  uniform sampler2D uTarget;\n  uniform float aspectRatio;\n  uniform vec3 color;\n  uniform vec2 point;\n  uniform float radius;\n\n  void main () {\n    vec2 p = vUv - point.xy;\n    p.x *= aspectRatio;\n    vec3 splat = exp(-dot(p, p) / radius) * color;\n    vec3 base = texture2D(uTarget, vUv).xyz;\n    gl_FragColor = vec4(base + splat, 1.0);\n  }\n",Z="\n  precision highp float;\n  precision highp sampler2D;\n\n  // This shader is from the awesome demo at:\n  // https://github.com/PavelDoGreat/WebGL-Fluid-Simulation\n\n  varying vec2 vUv;\n  varying vec2 vL;\n  varying vec2 vR;\n  varying vec2 vT;\n  varying vec2 vB;\n  uniform sampler2D uVelocity;\n  uniform sampler2D uCurl;\n  uniform float curl;\n  uniform float dt;\n\n  void main () {\n    float L = texture2D(uCurl, vL).x;\n    float R = texture2D(uCurl, vR).x;\n    float T = texture2D(uCurl, vT).x;\n    float B = texture2D(uCurl, vB).x;\n    float C = texture2D(uCurl, vUv).x;\n\n    vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n    force /= length(force) + 0.0001;\n    force *= curl * C;\n    force.y *= -1.0;\n\n    vec2 vel = texture2D(uVelocity, vUv).xy;\n    gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n  }\n";function $(e,n){var t=Object(w.h)(e,z,n),r=Object(w.i)(e,t);return Object(i.useMemo)(function(){return{program:t,uniforms:r}},[t,r])}var ee=function(e,n,t,r){var o=r.R,a=r.RG,u=r.RGBA,c=r.halfFloat,l=r.hasLinear,s=function(){return{type:c,minMag:e.NEAREST,format:o.format,internalFormat:o.internalFormat}},v=w.g.apply(void 0,[e].concat(Object(L.a)(t),[s])),m=w.g.apply(void 0,[e].concat(Object(L.a)(t),[s])),f=w.f.apply(void 0,[e].concat(Object(L.a)(n),[function(){return{type:c,minMag:l?e.LINEAR:e.NEAREST,format:u.format,internalFormat:u.internalFormat}}])),h=w.f.apply(void 0,[e].concat(Object(L.a)(t),[s])),d=w.f.apply(void 0,[e].concat(Object(L.a)(t),[function(){return{type:c,minMag:l?e.LINEAR:e.NEAREST,format:a.format,internalFormat:a.internalFormat}}]));return Object(i.useMemo)(function(){return{curlFBO:v,divergenceFBO:m,densityDFBO:f,pressureDFBO:h,velocityDFBO:d}},[v,m,f,h,d])};function ne(){this.id=-1,this.x=0,this.y=0,this.dx=0,this.dy=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}function te(e,n,t,r){if(!function(e,n,t,r){var i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,n,4,4,0,t,r,null);var o=e.createFramebuffer(),a=e.COLOR_ATTACHMENT0;return e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,a,e.TEXTURE_2D,i,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE}(e,n,t,r))switch(n){case e.R16F:return te(e,e.RG16F,e.RG,r);case e.RG16F:return te(e,e.RGBA16F,e.RGBA,r);default:return null}return{internalFormat:n,format:t}}function re(e,n,t){return Object(i.useMemo)(function(){var r=1;n&&t&&(r=n/t),r<1&&(r=1/r);var i=Math.round(e*r),o=Math.round(e);return n>t?[i,o]:[o,i]},[e,n,t])}var ie=Object(S.a)("#282b34");var oe=function(e){var n=Object(w.d)(),t=n.width,r=n.clientWidth,o=n.height,a=n.clientHeight,u=e.colorTheme,c=e.splatRadiusMultiplier,l=Object(w.l)(),s=function(e){var n=Object(w.m)();return Object(i.useMemo)(function(){var t,r,i=2===n;i?(e.getExtension("EXT_color_buffer_float"),r=!!e.getExtension("OES_texture_float_linear")):(t=e.getExtension("OES_texture_half_float"),r=!!e.getExtension("OES_texture_half_float_linear"));var o,a,u,c=i?e.HALF_FLOAT:t.HALF_FLOAT_OES;return i?(o=te(e,e.RGBA16F,e.RGBA,c),a=te(e,e.RG16F,e.RG,c),u=te(e,e.R16F,e.RED,c)):(o=te(e,e.RGBA,e.RGBA,c),a=te(e,e.RGBA,e.RGBA,c),u=te(e,e.RGBA,e.RGBA,c)),{RGBA:o,RG:a,R:u,halfFloat:c,hasLinear:r}},[e,n])}(l),v=function(e){var n=Object(w.c)(),t=Object(i.useMemo)(function(){return[new ne]},[]);return Object(i.useEffect)(function(){var n=0,r=Object(F.a)(function(){if(n+100<Date.now()){n=Date.now();for(var r=0;r<t.length;r++)t[r].color=k(e)}});return function(){return r.stop()}}),Object(i.useEffect)(function(){function r(r){t[0].down=!0,t[0].color=k(e);var i=r.pageX,o=r.pageY;i-=n.offsetLeft,o-=n.offsetTop,t[0].moved=t[0].down,t[0].dx=5*(i-t[0].x),t[0].dy=5*(o-t[0].y),t[0].x=i,t[0].y=o}function i(e){e.preventDefault();for(var r=e.targetTouches,i=0;i<r.length;i++){var o=t[i];o.moved=o.down;var a=r[i].pageX,u=r[i].pageY;a-=n.offsetLeft,u-=n.offsetTop,o.dx=8*(a-o.x),o.dy=8*(u-o.y),o.x=a,o.y=u}}function o(){}function a(r){r.preventDefault();for(var i=r.targetTouches,o=0;o<i.length;o++){o>=t.length&&t.push(new ne);var a=i[o].pageX,u=i[o].pageY;a-=n.offsetLeft,u-=n.offsetTop,t[o].id=i[o].identifier,t[o].down=!0,t[o].x=a,t[o].y=u,t[o].color=k(e)}}function u(){t[0].down=!1}function c(e){for(var n=e.changedTouches,r=0;r<n.length;r++)for(var i=0;i<t.length;i++)n[r].identifier===t[i].id&&(t[i].down=!1)}return n.addEventListener("mousemove",r),n.addEventListener("touchmove",i,!1),n.addEventListener("mousedown",o),n.addEventListener("touchstart",a),window.addEventListener("mouseup",u),window.addEventListener("touchend",c),function(){n.removeEventListener("mousemove",r),n.removeEventListener("touchmove",i,!1),n.removeEventListener("mousedown",o),n.removeEventListener("touchstart",a),window.removeEventListener("mouseup",u),window.removeEventListener("touchend",c)}},[t,n,e]),t}(u),m=function(e,n){var t=$(e,n?W:N),r=$(e,V),o=$(e,I),a=$(e,X),u=$(e,H),c=$(e,Y),l=$(e,J),s=$(e,K),v=$(e,q),m=$(e,Q),f=$(e,Z);return Object(i.useMemo)(function(){return{advection:t,background:r,clear:o,color:a,curl:u,displayShading:c,divergence:l,gradient:s,pressure:v,splat:m,vorticity:f}},[t,r,o,a,u,c,l,s,v,m,f])}(l,s.hasLinear),f=re(A,t,o),h=re(O,t,o),d=ee(l,h,f,s);return Object(i.useEffect)(function(){var e=m.advection,n=m.background,i=m.clear,p=m.color,g=m.curl,b=m.displayShading,y=m.divergence,x=m.gradient,T=m.pressure,E=m.splat,R=m.vorticity,D=d.curlFBO,w=d.divergenceFBO,S=d.densityDFBO,A=d.pressureDFBO,O=d.velocityDFBO,z=[],W=function(){var e=new Float32Array([-1,-1,-1,1,1,1,1,-1]),n=new Uint16Array([0,1,2,0,2,3]);return l.bindBuffer(l.ARRAY_BUFFER,l.createBuffer()),l.bufferData(l.ARRAY_BUFFER,e,l.STATIC_DRAW),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,l.createBuffer()),l.bufferData(l.ELEMENT_ARRAY_BUFFER,n,l.STATIC_DRAW),l.vertexAttribPointer(0,2,l.FLOAT,!1,0,0),l.enableVertexAttribArray(0),function(e){l.bindFramebuffer(l.FRAMEBUFFER,e),l.drawElements(l.TRIANGLES,6,l.UNSIGNED_SHORT,0)}}();function N(e,n,i,u,s){l.viewport(0,0,f[0],f[1]);var v=e/r,m=1-n/a;l.useProgram(E.program),l.uniform1i(E.uniforms.uTarget,O.read.attach(0)),l.uniform1f(E.uniforms.aspectRatio,t/o),l.uniform2f(E.uniforms.point,v,m),l.uniform3f(E.uniforms.color,i,-u,1),l.uniform1f(E.uniforms.radius,G/100*c),W(O.write.fbo),O.swap(),l.viewport(0,0,h[0],h[1]),l.uniform1i(E.uniforms.uTarget,S.read.attach(0)),l.uniform3f(E.uniforms.color,s.r,s.g,s.b),W(S.write.fbo),S.swap()}function V(e){for(var n=0;n<e;n++){var r=k(u);r.r*=10,r.g*=10,r.b*=10,N(t*Math.random(),o*Math.random(),1e3*(Math.random()-.5),1e3*(Math.random()-.5),r)}}var I=Object(F.a)(function(){!function(){z.length>0&&V(z.pop());for(var e=0;e<v.length;e++){var n=v[e];n.moved&&(N(n.x,n.y,n.dx,n.dy,n.color),n.moved=!1)}}(),function(n){l.disable(l.BLEND),l.viewport(0,0,f[0],f[1]),l.useProgram(g.program),l.uniform2f(g.uniforms.texelSize,1/f[0],1/f[1]),l.uniform1i(g.uniforms.uVelocity,O.read.attach(0)),W(D.fbo),l.useProgram(R.program),l.uniform2f(R.uniforms.texelSize,1/f[0],1/f[1]),l.uniform1i(R.uniforms.uVelocity,O.read.attach(0)),l.uniform1i(R.uniforms.uCurl,D.attach(1)),l.uniform1f(R.uniforms.curl,U),l.uniform1f(R.uniforms.dt,n),W(O.write.fbo),O.swap(),l.useProgram(y.program),l.uniform2f(y.uniforms.texelSize,1/f[0],1/f[1]),l.uniform1i(y.uniforms.uVelocity,O.read.attach(0)),W(w.fbo),l.useProgram(i.program),l.uniform1i(i.uniforms.uTexture,A.read.attach(0)),l.uniform1f(i.uniforms.value,P),W(A.write.fbo),A.swap(),l.useProgram(T.program),l.uniform2f(T.uniforms.texelSize,1/f[0],1/f[1]),l.uniform1i(T.uniforms.uDivergence,w.attach(0));for(var t=0;t<M;t++)l.uniform1i(T.uniforms.uPressure,A.read.attach(1)),W(A.write.fbo),A.swap();l.useProgram(x.program),l.uniform2f(x.uniforms.texelSize,1/f[0],1/f[1]),l.uniform1i(x.uniforms.uPressure,A.read.attach(0)),l.uniform1i(x.uniforms.uVelocity,O.read.attach(1)),W(O.write.fbo),O.swap(),l.useProgram(e.program),l.uniform2f(e.uniforms.texelSize,1/f[0],1/f[1]),s.shasLinear||l.uniform2f(e.uniforms.dyeTexelSize,1/f[0],1/f[1]);var r=O.read.attach(0);l.uniform1i(e.uniforms.uVelocity,r),l.uniform1i(e.uniforms.uSource,r),l.uniform1f(e.uniforms.dt,n),l.uniform1f(e.uniforms.dissipation,_),W(O.write.fbo),O.swap(),l.viewport(0,0,h[0],h[1]),s.hasLinear||l.uniform2f(e.uniforms.dyeTexelSize,1/h[0],1/h[1]),l.uniform1i(e.uniforms.uVelocity,O.read.attach(0)),l.uniform1i(e.uniforms.uSource,S.read.attach(1)),l.uniform1f(e.uniforms.dissipation,B),W(S.write.fbo),S.swap()}(.016),function(e){null!=e&&C?l.disable(l.BLEND):(l.blendFunc(l.ONE,l.ONE_MINUS_SRC_ALPHA),l.enable(l.BLEND));var r=null==e?t:h[0],i=null==e?o:h[1];l.viewport(0,0,t,o),C||(l.useProgram(p.program),l.uniform4f.apply(l,[p.uniforms.color].concat(Object(L.a)(ie))),W(e)),null==e&&C&&(l.useProgram(n.program),l.uniform1f(n.uniforms.aspectRatio,r/i),W(null)),l.useProgram(b.program),l.uniform2f(b.uniforms.texelSize,1/r,1/i),l.uniform1i(b.uniforms.uTexture,S.read.attach(0)),W(e)}(null)});return j>0&&V(j),function(){return I.stop()}},[l,s,v,f,h,t,r,o,a,m,d,u,c]),null},ae=(t(78),{alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1}),ue={borderRadius:0,cursor:"default",userSelect:"none",WebkitTapHighlightColor:"transparent"};var ce=function(e){var n=Object(i.useRef)(),t=e.colorTheme,r=e.splatRadiusMultiplier,a=e.width,u=e.height;return o.a.createElement("div",{className:"fluid-simulation"},o.a.createElement("div",{className:"container",ref:n,style:{width:a,height:u}},a?o.a.createElement(w.a,{webgl2:!0,width:a,height:u,canvasStyle:ue,contextAttrs:ae},o.a.createElement(oe,{colorTheme:t,splatRadiusMultiplier:r})):null))};t(79);var le=function(e){function n(e){var t;return Object(p.a)(this,n),(t=Object(b.a)(this,Object(y.a)(n).call(this,e))).state={width:window.innerWidth,height:window.innerHeight,curPanel:""},t}return Object(x.a)(n,e),Object(g.a)(n,[{key:"updateScreenDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.updateScreenDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateScreenDimensions.bind(this))}},{key:"render",value:function(){var e=this,n=this.props.data.panels;return o.a.createElement("div",{className:"home"},n.map(function(n){var t=function(e){var n={position:"fixed",zIndex:1,width:window.innerWidth,height:window.innerHeight,clipPath:""};switch(e){case"right":n.clipPath="polygon(100% 0, 66.67% 33.33%, 66.67% 66.67%, 100% 100%)",n.paddingLeft=Math.round(n.width/3*2),n.width=Math.round(n.width/3);break;case"top":n.clipPath="polygon(0 0, 33.33% 100%, 66.67% 100%, 100% 0)",n.height=Math.round(n.height/3),n.zIndex=2;break;case"left":n.clipPath="polygon(0 0, 100% 33.33%, 100% 66.67%, 0 100%)",n.width=Math.round(n.width/3),n.zIndex=2;break;case"bottom":n.clipPath="polygon(33.33% 66.67%, 0 100%, 100% 100%, 66.67% 66.7%)",n.paddingTop=Math.round(n.height/3*2),n.height=Math.round(n.height/3);break;case"center":n.clipPath="polygon(0 0, 0 100%, 100% 100%, 100% 0)",n.paddingLeft=Math.round(n.width/3),n.paddingTop=Math.round(n.height/3),n.width=Math.floor(n.width/3)+1,n.height=Math.floor(n.height/3)+1,n.zIndex=2;break;default:n.clipPath="polygon(33.3% 33.3%, 33.3% 66.7%, 66.7% 66.7%, 66.7% 33.3%)",n.height=Math.round(n.height/3),n.width=Math.round(n.width/3),n.zIndex=2}return n}(n.position),r=function(e){var n={position:"fixed",pointerEvents:"none"},t=window.innerHeight;switch(e){case"right":n.top=Math.floor(t/2),n.bottom=Math.floor(t/2),n.right="-8em",n.textAlign="center",n.transform="rotate(90deg)";break;case"top":n.top=0,n.left=0,n.right=0,n.textAlign="center";break;case"left":n.top=Math.floor(t/2),n.bottom=Math.floor(t/2),n.left="-8em",n.textAlign="center",n.transform="rotate(-90deg)";break;case"bottom":n.bottom=0,n.left=0,n.right=0,n.textAlign="center";break;case"center":n.right=0,n.left=0,n.top=Math.floor(t/3),n.marginTop="2em",n.textAlign="center"}return n}(n.position),i=function(e){var n={pointerEvents:"all",minWidth:"5em"};switch(e){case"right":break;case"top":n.marginRight="auto",n.marginLeft="auto",n.maxWidth="8em";break;case"left":break;case"bottom":n.marginRight="auto",n.marginLeft="auto",n.maxWidth="1em";break;case"center":n.marginRight="auto",n.marginLeft="auto",n.maxWidth="6em"}return n}(n.position);return o.a.createElement("div",{key:n.title,style:t,onMouseEnter:function(){return e.setState({curPanel:n.title})}},o.a.createElement(ce,Object.assign({},t,{colorTheme:n.colorTheme,splatRadiusMultiplier:"left"!==n.position&&"right"!==n.position?10:1})),o.a.createElement("div",{className:"description-text-container",style:r},o.a.createElement("a",{href:n.link},o.a.createElement("h3",{style:e.state.curPanel===n.title?Object(v.a)({},i,{fontSize:45}):i},n.title))))}))}}]),n}(i.Component),se=Object(c.b)(function(e,n){return{data:e.content.home}},function(e){return{setLayer1:function(n){return e(D.setLayer1(n))}}})(le),ve=function(e){function n(){return Object(p.a)(this,n),Object(b.a)(this,Object(y.a)(n).apply(this,arguments))}return Object(x.a)(n,e),Object(g.a)(n,[{key:"render",value:function(){return o.a.createElement("section",{className:"content"},o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(T.a,{exact:!0,path:"/",render:function(){return o.a.createElement(se,null)}})))}}]),n}(i.Component),me=Object(T.e)(ve);var fe=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(me,null))};u.a.render(o.a.createElement(c.a,{store:d},o.a.createElement(l.a,null,o.a.createElement(fe,null))),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.57d8dfcd.chunk.js.map