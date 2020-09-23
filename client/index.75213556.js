import{d as t,w as a,S as e,i as r,s as n,e as s,t as o,a as l,c,b as i,f as h,g as u,h as f,j as d,k as m,l as p,m as g,n as $,o as v,p as k,q as y,r as E,u as T,v as b,x as w,y as A,z as x,A as I,B,C as M,D as P,E as N,F as S,G as H,H as F}from"./client.4462d41f.js";function D(t){const a=t-1;return a*a*a+1}function U(t,{delay:a=0,duration:e=400,easing:r=D}){const n=getComputedStyle(t),s=+n.opacity,o=parseFloat(n.height),l=parseFloat(n.paddingTop),c=parseFloat(n.paddingBottom),i=parseFloat(n.marginTop),h=parseFloat(n.marginBottom),u=parseFloat(n.borderTopWidth),f=parseFloat(n.borderBottomWidth);return{delay:a,duration:e,easing:r,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*s};height: ${t*o}px;padding-top: ${t*l}px;padding-bottom: ${t*c}px;margin-top: ${t*i}px;margin-bottom: ${t*h}px;border-top-width: ${t*u}px;border-bottom-width: ${t*f}px;`}}const z=[{name:"easy",healStr:16,monsterStr:9,heals:2},{name:"normal",healStr:14,monsterStr:11,heals:1},{name:"hard",healStr:16,monsterStr:13,heals:1}],R=a("Welcome, please pick a difficulty"),V=a(1),L=t(V,t=>z[t]),O=a([]);function W(t){let a,e,r,n,k,y,E,T,b,w,A,x,I,B,M;return{c(){a=s("div"),e=s("h3"),r=o(t[0]),n=l(),k=s("div"),y=s("h3"),E=o("♥ "),T=o(t[1]),b=l(),w=s("div"),A=o(t[2]),x=l(),I=s("span"),B=l(),M=s("br"),this.h()},l(s){a=c(s,"DIV",{class:!0});var o=i(a);e=c(o,"H3",{});var l=i(e);r=h(l,t[0]),l.forEach(u),n=f(o),k=c(o,"DIV",{class:!0});var d=i(k);y=c(d,"H3",{class:!0});var m=i(y);E=h(m,"♥ "),T=h(m,t[1]),b=f(m),w=c(m,"DIV",{id:!0,class:!0});var p=i(w);A=h(p,t[2]),p.forEach(u),m.forEach(u),x=f(d),I=c(d,"SPAN",{style:!0,class:!0}),i(I).forEach(u),d.forEach(u),B=f(o),M=c(o,"BR",{}),o.forEach(u),this.h()},h(){d(w,"id",t[3]),d(w,"class","atk svelte-1azcl0o"),d(y,"class","svelte-1azcl0o"),m(I,"width",t[1]+"%"),d(I,"class","svelte-1azcl0o"),d(k,"class","progress-bar svelte-1azcl0o"),d(a,"class","health-bar")},m(t,s){p(t,a,s),g(a,e),g(e,r),g(a,n),g(a,k),g(k,y),g(y,E),g(y,T),g(y,b),g(y,w),g(w,A),g(k,x),g(k,I),g(a,B),g(a,M)},p(t,[a]){1&a&&$(r,t[0]),2&a&&$(T,t[1]),4&a&&$(A,t[2]),8&a&&d(w,"id",t[3]),2&a&&m(I,"width",t[1]+"%")},i:v,o:v,d(t){t&&u(a)}}}function C(t,a,e){let{name:r}=a,{health:n}=a,{atk:s}=a,{atkId:o}=a;return t.$$set=t=>{"name"in t&&e(0,r=t.name),"health"in t&&e(1,n=t.health),"atk"in t&&e(2,s=t.atk),"atkId"in t&&e(3,o=t.atkId)},[r,n,s,o]}class K extends e{constructor(t){super(),r(this,t,C,W,n,{name:0,health:1,atk:2,atkId:3})}}function j(t){let a,e,r,n,m,v,k,y,E,b,w,A,x,I,B;return{c(){a=s("div"),e=s("button"),r=o("Attack"),n=l(),m=s("button"),v=o("Fire "),k=o(t[2]),y=l(),E=s("button"),b=o("Heal "),w=o(t[6]),this.h()},l(s){a=c(s,"DIV",{class:!0});var o=i(a);e=c(o,"BUTTON",{});var l=i(e);r=h(l,"Attack"),l.forEach(u),n=f(o),m=c(o,"BUTTON",{});var d=i(m);v=h(d,"Fire "),k=h(d,t[2]),d.forEach(u),y=f(o),E=c(o,"BUTTON",{});var p=i(E);b=h(p,"Heal "),w=h(p,t[6]),p.forEach(u),o.forEach(u),this.h()},h(){d(a,"class","controls")},m(s,o){p(s,a,o),g(a,e),g(e,r),g(a,n),g(a,m),g(m,v),g(m,k),g(a,y),g(a,E),g(E,b),g(E,w),x=!0,I||(B=[T(e,"click",t[10]),T(m,"click",t[13]),T(E,"click",t[11])],I=!0)},p(t,a){(!x||4&a)&&$(k,t[2]),(!x||64&a)&&$(w,t[6])},i(t){x||(M(()=>{A||(A=P(a,U,{y:-50},!0)),A.run(1)}),x=!0)},o(t){A||(A=P(a,U,{y:-50},!1)),A.run(0),x=!1},d(t){t&&u(a),t&&A&&A.end(),I=!1,N(B)}}}function q(t){let a,e,r,n,l,f,m;return{c(){a=s("div"),e=s("button"),r=o("Retry"),this.h()},l(t){a=c(t,"DIV",{class:!0,id:!0});var n=i(a);e=c(n,"BUTTON",{});var s=i(e);r=h(s,"Retry"),s.forEach(u),n.forEach(u),this.h()},h(){d(a,"class","retry"),d(a,"id","test")},m(n,s){p(n,a,s),g(a,e),g(e,r),l=!0,f||(m=T(e,"click",t[9]),f=!0)},p:v,i(t){l||(M(()=>{n||(n=P(a,U,{y:-50},!0)),n.run(1)}),l=!0)},o(t){n||(n=P(a,U,{y:-50},!1)),n.run(0),l=!1},d(t){t&&u(a),t&&n&&n.end(),f=!1,m()}}}function G(t){let a,e,r,n,m,v,B,M,P,N,S,H,F,D,U,z,R,V,L,O=t[7].name+"";S=new K({props:{name:"Monster",atkId:"playerAtk",health:t[1],atk:t[8][1]?t[8][1].atk:""}}),F=new K({props:{name:"Player",atkId:"monsterAtk",health:t[0],atk:t[8][0]?t[8][0].atk:""}});const W=[q,j],C=[];function G(t,a){return t[4]?0:t[4]?-1:1}return~(U=G(t))&&(z=C[U]=W[U](t)),{c(){a=s("div"),e=s("h3"),r=o(O),n=l(),m=s("h2"),v=o("Round: "),B=o(t[3]),M=o(" Best: "),P=o(t[5]),N=l(),k(S.$$.fragment),H=l(),k(F.$$.fragment),D=l(),z&&z.c(),this.h()},l(s){a=c(s,"DIV",{id:!0});var o=i(a);e=c(o,"H3",{});var l=i(e);r=h(l,O),l.forEach(u),n=f(o),m=c(o,"H2",{});var d=i(m);v=h(d,"Round: "),B=h(d,t[3]),M=h(d," Best: "),P=h(d,t[5]),d.forEach(u),N=f(o),y(S.$$.fragment,o),H=f(o),y(F.$$.fragment,o),D=f(o),z&&z.l(o),o.forEach(u),this.h()},h(){d(a,"id","gameBoard")},m(s,o){p(s,a,o),g(a,e),g(e,r),g(a,n),g(a,m),g(m,v),g(m,B),g(m,M),g(m,P),g(a,N),E(S,a,null),g(a,H),E(F,a,null),g(a,D),~U&&C[U].m(a,null),R=!0,V||(L=T(window,"keydown",t[12]),V=!0)},p(t,[e]){(!R||128&e)&&O!==(O=t[7].name+"")&&$(r,O),(!R||8&e)&&$(B,t[3]),(!R||32&e)&&$(P,t[5]);const n={};2&e&&(n.health=t[1]),256&e&&(n.atk=t[8][1]?t[8][1].atk:""),S.$set(n);const s={};1&e&&(s.health=t[0]),256&e&&(s.atk=t[8][0]?t[8][0].atk:""),F.$set(s);let o=U;U=G(t),U===o?~U&&C[U].p(t,e):(z&&(b(),w(C[o],1,1,()=>{C[o]=null}),A()),~U?(z=C[U],z||(z=C[U]=W[U](t),z.c()),x(z,1),z.m(a,null)):z=null)},i(t){R||(x(S.$$.fragment,t),x(F.$$.fragment,t),x(z),R=!0)},o(t){w(S.$$.fragment,t),w(F.$$.fragment,t),w(z),R=!1},d(t){t&&u(a),I(S),I(F),~U&&C[U].d(),V=!1,L()}}}function J(t,a,e){let r,n;B(t,L,t=>e(7,r=t)),B(t,O,t=>e(8,n=t));let s,o=100,l=100,c=3,i=0,h=!1,u=0,{healStr:f,monsterStr:d,heals:m}=r;R.set("Attack to start!");const p=t=>{S.fromTo(t,{duration:1.25,autoAlpha:.9,yPercent:0,xPercent:0},{autoAlpha:0,yPercent:-20,xPercent:15,ease:"power1.out"})};function g(){e(5,u=i>=u?i:u),e(4,h=!1),O.set([]),e(0,o=100),e(1,l=100),e(2,c=3),e(3,i=0),R.set("Try harder! Attack!"),e(6,({healStr:f,monsterStr:d,heals:m}=r),m)}function $(t,a,e){let r={event:t,atk:a,hp:e};O.set([r,...n])}function v(){const t=Math.ceil(Math.random()*d);e(0,o-=t),$("monster attacks",t,o),p("#monsterAtk"),l<=0?(R.set("Player Wins Round "+i),O.set([]),E(!1)):o<=0?(R.set("Monster Ate Player, Try Again"),E(!0)):R.set("Make your next move")}function k(t){let a=Math.ceil(10*Math.random());if(a<4&&(a+=4),"strong"===t){if(0===c)return void R.set("No strong Attacks left");a+=7,e(2,c--,c)}e(1,l-=a),$("player attacks",a,l),p("#playerAtk"),v()}function y(){const t=Math.ceil(10*Math.random()+f);if(m<=0)return R.set("You are out of heals");e(0,o+=t),e(6,m--,m),$("player heals",t,o),v()}function E(t){if(t)return e(4,h=!0);e(3,i++,i),e(0,o=100),e(1,l=100),!(c>=9)&&e(2,c++,c),i%5==0&&(d++,!(c>=9)&&e(2,c+=2),f+=10),i%10==0&&e(6,m++,m)}return[o,l,c,i,h,u,m,r,n,g,k,y,function(t){s=t.keyCode,!0!==h?74==s?k():75===s?k("strong"):72===s?y():R.set("use H heal, J atk, K fire"):82===s?g():R.set("press R to reset game")},()=>k("strong")]}class Y extends e{constructor(t){super(),r(this,t,J,G,n,{})}}function Q(t,a,e){const r=t.slice();return r[1]=a[e],r}function X(t){let a,e,r,n,l=t[1].event+"",f=t[1].atk+"";return{c(){a=s("p"),e=o(l),r=o(" | "),n=o(f)},l(t){a=c(t,"P",{});var s=i(a);e=h(s,l),r=h(s," | "),n=h(s,f),s.forEach(u)},m(t,s){p(t,a,s),g(a,e),g(a,r),g(a,n)},p(t,a){1&a&&l!==(l=t[1].event+"")&&$(e,l),1&a&&f!==(f=t[1].atk+"")&&$(n,f)},d(t){t&&u(a)}}}function Z(t){let a,e=t[0],r=[];for(let a=0;a<e.length;a+=1)r[a]=X(Q(t,e,a));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();a=H()},l(t){for(let a=0;a<r.length;a+=1)r[a].l(t);a=H()},m(t,e){for(let a=0;a<r.length;a+=1)r[a].m(t,e);p(t,a,e)},p(t,[n]){if(1&n){let s;for(e=t[0],s=0;s<e.length;s+=1){const o=Q(t,e,s);r[s]?r[s].p(o,n):(r[s]=X(o),r[s].c(),r[s].m(a.parentNode,a))}for(;s<r.length;s+=1)r[s].d(1);r.length=e.length}},i:v,o:v,d(t){F(r,t),t&&u(a)}}}function _(t,a,e){let r;return B(t,O,t=>e(0,r=t)),[r]}class tt extends e{constructor(t){super(),r(this,t,_,Z,n,{})}}function at(t){let a,e,r,n,m,$,k,y,E,b,w,A,x,I;return{c(){a=s("div"),e=s("label"),r=s("input"),n=o(" Easy"),m=l(),$=s("label"),k=s("input"),y=o("\r\n    Normal"),E=l(),b=s("label"),w=s("input"),A=o(" Hard"),this.h()},l(t){a=c(t,"DIV",{class:!0});var s=i(a);e=c(s,"LABEL",{});var o=i(e);r=c(o,"INPUT",{type:!0,name:!0,value:!0}),n=h(o," Easy"),o.forEach(u),m=f(s),$=c(s,"LABEL",{});var l=i($);k=c(l,"INPUT",{type:!0,name:!0,value:!0,checked:!0}),y=h(l,"\r\n    Normal"),l.forEach(u),E=f(s),b=c(s,"LABEL",{});var d=i(b);w=c(d,"INPUT",{type:!0,name:!0,value:!0}),A=h(d," Hard"),d.forEach(u),s.forEach(u),this.h()},h(){d(r,"type","radio"),d(r,"name","gameMode"),r.value="0",d(k,"type","radio"),d(k,"name","gameMode"),k.value="1",k.checked=!0,d(w,"type","radio"),d(w,"name","gameMode"),w.value="2",d(a,"class","difficulty svelte-mfxsu0")},m(s,o){p(s,a,o),g(a,e),g(e,r),g(e,n),g(a,m),g(a,$),g($,k),g($,y),g(a,E),g(a,b),g(b,w),g(b,A),x||(I=[T(r,"change",t[0]),T(k,"change",t[0]),T(w,"change",t[0])],x=!0)},p:v,i:v,o:v,d(t){t&&u(a),x=!1,N(I)}}}function et(t){return[function(t){V.set(t.currentTarget.value)}]}class rt extends e{constructor(t){super(),r(this,t,et,at,n,{})}}function nt(t){let a,e,r,n;return a=new Y({}),r=new tt({}),{c(){k(a.$$.fragment),e=l(),k(r.$$.fragment)},l(t){y(a.$$.fragment,t),e=f(t),y(r.$$.fragment,t)},m(t,s){E(a,t,s),p(t,e,s),E(r,t,s),n=!0},p:v,i(t){n||(x(a.$$.fragment,t),x(r.$$.fragment,t),n=!0)},o(t){w(a.$$.fragment,t),w(r.$$.fragment,t),n=!1},d(t){I(a,t),t&&u(e),I(r,t)}}}function st(t){let a,e,r,n,d,m,$;return a=new rt({}),{c(){k(a.$$.fragment),e=l(),r=s("button"),n=o("Play!")},l(t){y(a.$$.fragment,t),e=f(t),r=c(t,"BUTTON",{});var s=i(r);n=h(s,"Play!"),s.forEach(u)},m(s,o){E(a,s,o),p(s,e,o),p(s,r,o),g(r,n),d=!0,m||($=T(r,"click",t[2]),m=!0)},p:v,i(t){d||(x(a.$$.fragment,t),d=!0)},o(t){w(a.$$.fragment,t),d=!1},d(t){I(a,t),t&&u(e),t&&u(r),m=!1,$()}}}function ot(t){let a,e,r,n,m,v,k,y,E,T;const I=[st,nt],B=[];function M(t,a){return t[0]?0:1}return y=M(t),E=B[y]=I[y](t),{c(){a=s("main"),e=s("h1"),r=o("Monsta Killa"),n=l(),m=s("p"),v=o(t[1]),k=l(),E.c(),this.h()},l(s){a=c(s,"MAIN",{class:!0});var o=i(a);e=c(o,"H1",{class:!0});var l=i(e);r=h(l,"Monsta Killa"),l.forEach(u),n=f(o),m=c(o,"P",{});var d=i(m);v=h(d,t[1]),d.forEach(u),k=f(o),E.l(o),o.forEach(u),this.h()},h(){d(e,"class","headline svelte-1csww7z"),d(a,"class","svelte-1csww7z")},m(t,s){p(t,a,s),g(a,e),g(e,r),g(a,n),g(a,m),g(m,v),g(a,k),B[y].m(a,null),T=!0},p(t,[e]){(!T||2&e)&&$(v,t[1]);let r=y;y=M(t),y===r?B[y].p(t,e):(b(),w(B[r],1,1,()=>{B[r]=null}),A(),E=B[y],E||(E=B[y]=I[y](t),E.c()),x(E,1),E.m(a,null))},i(t){T||(x(E),T=!0)},o(t){w(E),T=!1},d(t){t&&u(a),B[y].d()}}}function lt(t,a,e){let r;B(t,R,t=>e(1,r=t));let n=!0;return[n,r,function(){e(0,n=!1)}]}export default class extends e{constructor(t){super(),r(this,t,lt,ot,n,{})}}