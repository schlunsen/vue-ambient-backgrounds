(function(t){function e(e){for(var a,o,c=e[0],s=e[1],h=e[2],u=0,d=[];u<c.length;u++)o=c[u],i[o]&&d.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,h||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},1131:function(t,e,n){"use strict";var a=n("9d83"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[n(t.background,{tag:"Component"})],1),n("div",{staticClass:"mainContent"},[n("v-layout",{attrs:{column:"",wrap:""}},[n("h1",[t._v("Vue Ambient Backgrounds")]),n("a",{staticClass:"github-button",attrs:{href:"https://github.com/schlunsen/vue-ambient-backgorunds","data-icon":"octicon-star","aria-label":"Star on GitHub"}},[t._v("Star")])])],1),n("div",{staticClass:"bg-selectors"},[n("v-btn",{on:{click:function(e){return t.changeBackground("aurora")}}},[t._v("Aurora")]),n("v-btn",{on:{click:function(e){return t.changeBackground("smoke")}}},[t._v("Smoke")]),n("v-btn",{on:{click:function(e){return t.changeBackground("pipeline")}}},[t._v("Pipeline")]),n("v-btn",{on:{click:function(e){return t.changeBackground("coalesce")}}},[t._v("Coalesce")]),n("v-btn",{on:{click:function(e){return t.changeBackground("shift")}}},[t._v("Shift")]),n("v-btn",{on:{click:function(e){return t.changeBackground("aether")}}},[t._v("Æther")])],1)],1)},r=[],o=n("ce5b"),c=n.n(o),s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aurora-bg"},[n("div",{staticClass:"content--canvas"})])}],l=(n("63d9"),n("16ed")),u=n.n(l),d={mounted:function(){var t,e,n,a,i,r,o,c=this,s=(Math.PI,Math.cos,Math.sin,Math.abs),h=(Math.sqrt,Math.pow,Math.round),l=Math.random,d=(Math.atan2,function(t){return t*l()}),f=function(t,e){var n=.5*e;return s((t+n)%e-n)/n},b=500,w=8,v=b*w,p=200,g=200,m=.05,y=.1,C=10,M=20,P=120,k=60,_=50,x=100,E=100,S=.0015,z=.0015,I=.0015,O="hsla(220,60%,3%,1)";this.setup=function(){c.createCanvas(),c.resize(),c.initRays(),c.draw()},this.initRays=function(){var t;for(i=0,r=new u.a,o=new Float32Array(v),t=0;t<v;t+=w)c.initRay(t)},this.initRay=function(t){var n,c,s,l,u,f,b,w,v,O;n=p+d(g),c=d(e.a.width),s=a[1]+E,l=a[1]+E-n,u=r.noise3D(c*S,s*z,i*I)*E,s+=u,l+=u,f=0,b=_+d(x),w=C+d(M),v=m+d(y)*(h(d(1))?1:-1),O=P+d(k),o.set([c,s,l,f,b,w,v,O],t)},this.drawRays=function(){var t;for(t=0;t<v;t+=w)c.updateRay(t)},this.updateRay=function(t){var e,n,a,i,r,s,h,l,u=1+t,d=2+t,f=3+t,b=4+t,w=5+t,v=6+t,p=7+t;e=o[t],n=o[u],a=o[d],i=o[f],r=o[b],s=o[w],h=o[v],l=o[p],c.drawRay(e,n,a,i,r,s,l),e+=h,i++,o[t]=e,o[f]=i,(c.checkBounds(e)||i>r)&&c.initRay(t)},this.drawRay=function(t,e,a,i,r,o,c){var s;s=n.a.createLinearGradient(t,e,t,a),s.addColorStop(0,"hsla(".concat(c,",100%,65%,0)")),s.addColorStop(.5,"hsla(".concat(c,",100%,65%,").concat(f(i,r),")")),s.addColorStop(1,"hsla(".concat(c,",100%,65%,0)")),n.a.save(),n.a.beginPath(),n.a.strokeStyle=s,n.a.lineWidth=o,n.a.moveTo(t,e),n.a.lineTo(t,a),n.a.stroke(),n.a.closePath(),n.a.restore()},this.checkBounds=function(t){return t<0||t>e.a.width},this.createCanvas=function(){t=document.querySelector(".content--canvas"),e={a:document.createElement("canvas"),b:document.createElement("canvas")},e.b.style="\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t",t.appendChild(e.b),n={a:e.a.getContext("2d"),b:e.b.getContext("2d")},a=[]},this.resize=function(){var t=window,i=t.innerWidth,r=t.innerHeight;e.a.width=i,e.a.height=r,n.a.drawImage(e.b,0,0),e.b.width=i,e.b.height=r,n.b.drawImage(e.a,0,0),a[0]=.5*e.a.width,a[1]=.5*e.a.height},this.render=function(){n.b.save(),n.b.filter="blur(12px)",n.a.globalCompositeOperation="lighter",n.b.drawImage(e.a,0,0),n.b.restore()},this.draw=function(){i++,n.a.clearRect(0,0,e.a.width,e.a.height),n.b.fillStyle=O,n.b.fillRect(0,0,e.b.width,e.a.height),c.drawRays(),c.render(),c.cancel||window.requestAnimationFrame(c.draw)},setTimeout(function(){c.setup()},100),window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize),this.cancel=!0}},f=d,b=n("2877"),w=Object(b["a"])(f,s,h,!1,null,"0d5b929e",null),v=w.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{attrs:{id:"canv"}})},g=[],m={mounted:function(){var t=document.getElementById("canv"),e=t.getContext("2d"),n=t.width=window.innerWidth,a=t.height=window.innerHeight,i=function(t,i,r){e.lineWidth=.2,e.fillStyle="hsla(220, 20%, 18%, 1)",e.fillRect(0,0,n,a);for(var o=-60;o<60;o+=1){e.strokeStyle="hsla(203, 70.5%, 65.4%, 0.07)",e.beginPath(),e.moveTo(0,a/2);for(var c=0;c<n;c+=10)e.lineTo(10*Math.sin(o/10)+c+.008*c*c,Math.floor(a/2+c/2*Math.sin(c/50-r/50-o/118)+.9*o*Math.sin(c/25-(o+r)/65)));e.stroke()}},r=0;window.addEventListener("resize",function(){t.width=n=window.innerWidth,t.height=a=window.innerHeight,e.fillStyle="hsla(360, 95%, 0%, 1)"},!1);var o=this,c=function t(){o.stopped||(window.requestAnimationFrame(t),r+=2,i(33,52*Math.sin(r/2400),r))};c()},destroyed:function(){this.stopped=!0}},y=m,C=(n("1131"),Object(b["a"])(y,p,g,!1,null,"1be28894",null)),M=C.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"coalesce-bg"},[n("div",{staticClass:"content--canvas"})])}],_={mounted:function(){var t,e,n,a,i,r=this,o=Math.PI,c=Math.cos,s=Math.sin,h=Math.abs,l=(Math.sqrt,Math.pow,Math.round,Math.random),u=Math.atan2,d=.5*o,f=function(t){return t*l()},b=function(t,e){var n=.5*e;return h((t+n)%e-n)/n},w=function(t,e,n,a){return u(a-e,n-t)},v=function(t,e,n){return(1-n)*t+n*e},p=700,g=9,m=p*g,y=100,C=500,M=.1,P=1,k=2,_=10,x=10,E=100,S="hsla(60,50%,3%,1)";this.setup=function(){r.createCanvas(),r.resize(),r.initParticles(),r.draw()},this.initParticles=function(){var t;for(0,i=new Float32Array(m),t=0;t<m;t+=g)r.initParticle(t)},this.initParticle=function(t){var n,r,o,h,l,u,d,b,v,p;r=f(e.a.width),o=f(e.a.height),n=w(r,o,a[0],a[1]),h=6*c(n),l=6*s(n),u=0,d=y+f(C),b=M+f(P),v=k+f(_),p=x+f(E),i.set([r,o,h,l,u,d,b,v,p],t)},this.drawParticles=function(){var t;for(t=0;t<m;t+=g)r.updateParticle(t)},this.updateParticle=function(t){var e,n,o,h,l,u,f,b,p,g,m,y,C=1+t,M=2+t,P=3+t,k=4+t,_=5+t,x=6+t,E=7+t,S=8+t;e=i[t],n=i[C],o=w(e,n,a[0],a[1])+.75*d,h=v(i[M],2*c(o),.05),l=v(i[P],2*s(o),.05),u=i[k],f=i[_],b=i[x],p=e+h*b,g=n+l*b,m=i[E],y=i[S],r.drawParticle(e,n,o,u,f,m,y),u++,i[t]=p,i[C]=g,i[M]=h,i[P]=l,i[k]=u,u>f&&r.initParticle(t)},this.drawParticle=function(t,e,a,i,r,o,c){var s=t-.5*o,h=e-.5*o;n.a.save(),n.a.lineCap="round",n.a.lineWidth=1,n.a.strokeStyle="hsla(".concat(c,",100%,60%,").concat(b(i,r),")"),n.a.beginPath(),n.a.translate(s,h),n.a.rotate(a),n.a.translate(-s,-h),n.a.strokeRect(s,h,o,o),n.a.closePath(),n.a.restore()},this.createCanvas=function(){t=document.querySelector(".content--canvas"),e={a:document.createElement("canvas"),b:document.createElement("canvas")},e.b.style="\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t",t.appendChild(e.b),n={a:e.a.getContext("2d"),b:e.b.getContext("2d")},a=[]},this.resize=function(){var t=window,i=t.innerWidth,r=t.innerHeight;e.a.width=i,e.a.height=r,n.a.drawImage(e.b,0,0),e.b.width=i,e.b.height=r,n.b.drawImage(e.a,0,0),a[0]=.5*e.a.width,a[1]=.5*e.a.height},this.renderGlow=function(){n.b.save(),n.b.filter="blur(8px) brightness(200%)",n.b.globalCompositeOperation="lighter",n.b.drawImage(e.a,0,0),n.b.restore(),n.b.save(),n.b.filter="blur(4px) brightness(200%)",n.b.globalCompositeOperation="lighter",n.b.drawImage(e.a,0,0),n.b.restore()},this.render=function(){n.b.save(),n.b.globalCompositeOperation="lighter",n.b.drawImage(e.a,0,0),n.b.restore()},this.draw=function(){0,console.log("Draw"),n.a.clearRect(0,0,e.a.width,e.a.height),n.b.fillStyle=S,n.b.fillRect(0,0,e.a.width,e.a.height),r.drawParticles(),r.renderGlow(),r.render(),r.cancel||window.requestAnimationFrame(r.draw)},setTimeout(function(){r.setup()},100),window.addEventListener("resize",this.resize)},beforeDestroy:function(){this.cancel=!0,window.removeEventListener("resize",this.resize)}},x=_,E=Object(b["a"])(x,P,k,!1,null,"2cf47134",null),S=E.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"coalesce-bg"},[n("div",{staticClass:"content--canvas"})])}],O={mounted:function(){var t,e,n,a,i,r,o=this,c=Math.PI,s=Math.cos,h=Math.sin,l=Math.abs,u=(Math.sqrt,Math.pow,Math.round),d=Math.random,f=(Math.atan2,.5*c),b=2*c,w=c/180,v=function(t){return t*d()},p=function(t,e){var n=.5*e;return l((t+n)%e-n)/n},g=30,m=8,y=g*m,C=8,M=360/C*w,P=58,k=.5,_=1,x=100,E=300,S=2,z=4,I=180,O=60,R="hsla(150,80%,1%,1)";this.setup=function(){o.createCanvas(),o.resize(),o.initPipes(),o.draw()},this.initPipes=function(){var t;for(r=new Float32Array(y),t=0;t<y;t+=m)o.initPipe(t)},this.initPipe=function(t){var n,i,o,c,s,h,l,d;n=v(e.a.width),i=a[1],o=u(v(1))?f:b-f,c=k+v(_),s=0,h=x+v(E),l=S+v(z),d=I+v(O),r.set([n,i,o,c,s,h,l,d],t)},this.updatePipes=function(){var t;for(i++,t=0;t<y;t+=m)o.updatePipe(t)},this.updatePipe=function(t){var e,n,a,c,l,d,f,b,w,p,g=1+t,m=2+t,y=3+t,C=4+t,k=5+t,_=6+t,x=7+t;e=r[t],n=r[g],a=r[m],c=r[y],l=r[C],d=r[k],f=r[_],b=r[x],o.drawPipe(e,n,l,d,f,b),l++,e+=s(a)*c,n+=h(a)*c,w=!(i%u(v(P)))&&(!(u(e)%6)||!(u(n)%6)),p=u(v(1))?-1:1,a+=w?M*p:0,r[t]=e,r[g]=n,r[m]=a,r[C]=l,o.checkBounds(e,n),l>d&&o.initPipe(t)},this.drawPipe=function(t,e,a,i,r,o){n.a.save(),n.a.strokeStyle="hsla(".concat(o,",75%,50%,").concat(.125*p(a,i),")"),n.a.beginPath(),n.a.arc(t,e,r,0,b),n.a.stroke(),n.a.closePath(),n.a.restore()},this.checkBounds=function(t,n){t>e.a.width&&(t=0),t<0&&(t=e.a.width),n>e.a.height&&(n=0),n<0&&(n=e.a.height)},this.createCanvas=function(){t=document.querySelector(".content--canvas"),e={a:document.createElement("canvas"),b:document.createElement("canvas")},e.b.style="\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t",t.appendChild(e.b),n={a:e.a.getContext("2d"),b:e.b.getContext("2d")},a=[],i=0},this.resize=function(){var t=window,i=t.innerWidth,r=t.innerHeight;e.a.width=i,e.a.height=r,n.a.drawImage(e.b,0,0),e.b.width=i,e.b.height=r,n.b.drawImage(e.a,0,0),a[0]=.5*e.a.width,a[1]=.5*e.a.height},this.render=function(){n.b.save(),n.b.fillStyle=R,n.b.fillRect(0,0,e.b.width,e.b.height),n.b.restore(),n.b.save(),n.b.filter="blur(12px)",n.b.drawImage(e.a,0,0),n.b.restore(),n.b.save(),n.b.drawImage(e.a,0,0),n.b.restore()},this.draw=function(){o.updatePipes(),o.render(),o.cancel||window.requestAnimationFrame(o.draw)},setTimeout(function(){o.setup(),window.addEventListener("resize",o.resize)},100)},beforeDestroy:function(){window.removeEventListener("resize",this.resize),this.cancel=!0}},R=O,A=Object(b["a"])(R,z,I,!1,null,"3b02b635",null),B=A.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"coalesce-bg"},[n("div",{staticClass:"content--canvas"})])}],j=(n("6c7b"),{mounted:function(){var t,e,n,a,i,r,o=this,c=Math.PI,s=Math.cos,h=Math.sin,l=Math.abs,d=(Math.sqrt,Math.pow,Math.round,Math.random),f=(Math.atan2,2*c),b=function(t){return t*d()},w=function(t,e){var n=.5*e;return l((t+n)%e-n)/n},v=150,p=8,g=v*p,m=.1,y=1,C=150,M=200,P=100,k=200,_=60,x=.0015,E=.0015,S=.0015,z="hsla(0,0%,5%,1)";this.setup=function(){o.createCanvas(),o.resize(),o.initCircles(),o.draw()},this.initCircles=function(){var t;for(a=new Float32Array(g),i=new u.a,r=220,t=0;t<g;t+=p)o.initCircle(t)},this.initCircle=function(t){var n,o,c,l,u,d,w,v,p,g,z;n=b(e.a.width),o=b(e.a.height),c=i.noise3D(n*x,o*E,r*S),l=b(f),u=m+b(y),d=u*s(l),w=u*h(l),v=0,p=C+b(M),g=P+b(k),z=r+c*_,a.set([n,o,d,w,v,p,g,z],t)},this.updateCircles=function(){var t;for(r++,t=0;t<g;t+=p)o.updateCircle(t)},this.updateCircle=function(t){var e,n,i,r,c,s,h,l,u=1+t,d=2+t,f=3+t,b=4+t,w=5+t,v=6+t,p=7+t;e=a[t],n=a[u],i=a[d],r=a[f],c=a[b],s=a[w],h=a[v],l=a[p],o.drawCircle(e,n,c,s,h,l),c++,a[t]=e+i,a[u]=n+r,a[b]=c,(o.checkBounds(e,n,h)||c>s)&&o.initCircle(t)},this.drawCircle=function(t,e,a,i,r,o){n.a.save(),n.a.fillStyle="hsla(".concat(o,",60%,30%,").concat(w(a,i),")"),n.a.beginPath(),n.a.arc(t,e,r,0,f),n.a.fill(),n.a.closePath(),n.a.restore()},this.checkBounds=function(t,n,a){return t<-a||t>e.a.width+a||n<-a||n>e.a.height+a},this.createCanvas=function(){t=document.querySelector(".content--canvas"),e={a:document.createElement("canvas"),b:document.createElement("canvas")},e.b.style="\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t",t.appendChild(e.b),n={a:e.a.getContext("2d"),b:e.b.getContext("2d")}},this.resize=function(){var t=window,a=t.innerWidth,i=t.innerHeight;e.a.width=a,e.a.height=i,n.a.drawImage(e.b,0,0),e.b.width=a,e.b.height=i,n.b.drawImage(e.a,0,0)},this.render=function(){n.b.save(),n.b.filter="blur(50px)",n.b.drawImage(e.a,0,0),n.b.restore()},this.draw=function(){n.a.clearRect(0,0,e.a.width,e.a.height),n.b.fillStyle=z,n.b.fillRect(0,0,e.b.width,e.b.height),o.updateCircles(),o.render(),o.cancel||window.requestAnimationFrame(o.draw)},setTimeout(function(){o.setup()},100),window.addEventListener("resize",this.resize)},beforeDestroy:function(){this.cancel=!0,window.removeEventListener("resize",this.resize)}}),T=j,$=Object(b["a"])(T,q,F,!1,null,"527ec716",null),L=$.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"coalesce-bg"},[n("div",{staticClass:"content--canvas"})])}],H={mounted:function(){var t,e,n,a,i,r,o,c,s,h,l,d,f=this,b=Math.PI,w=Math.cos,v=Math.sin,p=Math.abs,g=(Math.sqrt,Math.pow,Math.floor,Math.round,Math.random),m=(Math.atan2,2*b),y=function(t){return t*g()},C=function(t,e){return y(e-t)+t},M=function(t,e){var n=.5*e;return p((t+n)%e-n)/n},P=function(t,e,n){return(1-n)*t+n*e},k=1e3,_=100,x=6;this.setup=function(){a=0,n=[],f.createCanvas(),f.createParticles(),f.draw()},this.createParticles=function(){var t;for(i=new u.a,r=new Float32Array(2*k),o=new Float32Array(2*k),s=new Float32Array(2*k),c=new Float32Array(k),l=new Float32Array(k),h=new Float32Array(k),t=0;t<2*k;t+=2)f.initParticle(t)},this.initParticle=function(t){var e,a,i,u,d,f,b,p,g,M,P,k,x,E,S,z;e=t+1,a=.5*t|0,i=y(_),u=y(m),d=w(u),f=v(u),b=n[0]+d*i,p=n[1]+f*i,M=C(.1,1),g=C(1,8),P=M*d*.1,k=M*f*.1,E=C(.1,1),x=C(160,260),S=0,z=C(50,200),r[t]=b,r[e]=p,o[t]=P,o[e]=k,c[a]=g,l[a]=x,h[a]=E,s[t]=S,s[e]=z},this.drawParticle=function(t){var n,u,d,b,p,g,y,C,k,_,E,S,z,I,O,R;n=t+1,u=.5*t|0,d=r[t],b=r[n],p=i.noise3D(.0025*d,.0025*b,5e-4*a)*m*x,k=P(o[t],w(p),.05),_=P(o[n],v(p),.05),C=c[u],g=d+k*C,y=b+_*C,E=l[u],S=h[u],z=s[t],O=s[n],I=M(z,O),R="hsla(".concat(E,",50%,60%,").concat(I,")"),z++,e.a.save(),e.a.lineWidth=I*S+1,e.a.strokeStyle=R,e.a.beginPath(),e.a.moveTo(d,b),e.a.lineTo(g,y),e.a.stroke(),e.a.closePath(),e.a.restore(),r[t]=g,r[n]=y,o[t]=k,o[n]=_,s[t]=z,(f.checkBounds(d,b)||z>O)&&f.initParticle(t)},this.checkBounds=function(e,n){return e>t.a.width||e<0||n>t.a.height||n<0},this.createCanvas=function(){d=document.querySelector(".content--canvas"),t={a:document.createElement("canvas"),b:document.createElement("canvas")},t.b.style="\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n    ",d.appendChild(t.b),e={a:t.a.getContext("2d"),b:t.b.getContext("2d")},f.resize()},this.resize=function(){var a=window,i=a.innerWidth,r=a.innerHeight;t.a.width=i,t.a.height=r,e.a.drawImage(t.b,0,0),t.b.width=i,t.b.height=r,e.b.drawImage(t.a,0,0),n[0]=.5*t.a.width,n[1]=.5*t.a.height},this.draw=function(){var n;for(a++,e.a.clearRect(0,0,t.a.width,t.a.height),e.b.fillStyle="rgba(0,0,0,0.1)",e.b.fillRect(0,0,t.b.width,t.b.height),n=0;n<2*k;n+=2)f.drawParticle(n);e.b.save(),e.b.filter="blur(8px)",e.b.globalCompositeOperation="lighten",e.b.drawImage(t.a,0,0),e.b.restore(),e.b.save(),e.b.globalCompositeOperation="lighter",e.b.drawImage(t.a,0,0),e.b.restore(),f.cancel||window.requestAnimationFrame(f.draw)},setTimeout(function(){f.setup()},100),window.addEventListener("resize",this.resize)},beforeDestroy:function(){this.cancel=!0,window.removeEventListener("resize",this.resize)}},G=H,J=Object(b["a"])(G,W,D,!1,null,"09af496c",null),V=J.exports;n("bf40");a["default"].use(c.a);var K={aurora:v,smoke:M,pipeline:B,coalesce:S,shift:L,aether:V},N={name:"app",data:function(){return{background:S,options:{}}},methods:{changeBackground:function(t){this.background=K[t]}},components:{Aurora:v,Smoke:M,Coalesce:S,Pipeline:B,Shift:L}},Q=N,U=(n("034f"),Object(b["a"])(Q,i,r,!1,null,null,null)),X=U.exports;a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(X)}}).$mount("#app")},"64a9":function(t,e,n){},"9d83":function(t,e,n){}});
//# sourceMappingURL=app.151935dd.js.map