import{S as a,i as t,s,e as r,t as o,a as e,c as n,b as c,d as l,f as i,g as h,h as d,j as u,k as f,l as p,m as v,n as m,o as g,p as y,q as E,r as b,u as w,v as M,w as T,x as k}from"./client.ede5c1ba.js";function x(a){const t=a-1;return t*t*t+1}function H(a,{delay:t=0,duration:s=400,easing:r=x}){const o=getComputedStyle(a),e=+o.opacity,n=parseFloat(o.height),c=parseFloat(o.paddingTop),l=parseFloat(o.paddingBottom),i=parseFloat(o.marginTop),h=parseFloat(o.marginBottom),d=parseFloat(o.borderTopWidth),u=parseFloat(o.borderBottomWidth);return{delay:t,duration:s,easing:r,css:a=>`overflow: hidden;opacity: ${Math.min(20*a,1)*e};height: ${a*n}px;padding-top: ${a*c}px;padding-bottom: ${a*l}px;margin-top: ${a*i}px;margin-bottom: ${a*h}px;border-top-width: ${a*d}px;border-bottom-width: ${a*u}px;`}}function B(a){let t,s,u,m,g,y,E,k,x,B,F,A,N,$,P;return{c(){t=r("div"),s=r("button"),u=o("Attack"),m=e(),g=r("button"),y=o("Fire "),E=o(a[2]),k=e(),x=r("button"),B=o("Heal "),F=o(a[3]),this.h()},l(r){t=n(r,"DIV",{class:!0});var o=c(t);s=n(o,"BUTTON",{});var e=c(s);u=l(e,"Attack"),e.forEach(i),m=h(o),g=n(o,"BUTTON",{});var d=c(g);y=l(d,"Fire "),E=l(d,a[2]),d.forEach(i),k=h(o),x=n(o,"BUTTON",{});var f=c(x);B=l(f,"Heal "),F=l(f,a[3]),f.forEach(i),o.forEach(i),this.h()},h(){d(t,"class","controls")},m(r,o){f(r,t,o),p(t,s),p(s,u),p(t,m),p(t,g),p(g,y),p(g,E),p(t,k),p(t,x),p(x,B),p(x,F),N=!0,$||(P=[b(s,"click",a[8]),b(g,"click",a[10]),b(x,"click",a[9])],$=!0)},p(a,t){(!N||4&t)&&v(E,a[2]),(!N||8&t)&&v(F,a[3])},i(a){N||(w(()=>{A||(A=M(t,H,{y:-50},!0)),A.run(1)}),N=!0)},o(a){A||(A=M(t,H,{y:-50},!1)),A.run(0),N=!1},d(a){a&&i(t),a&&A&&A.end(),$=!1,T(P)}}}function F(a){let t,s,e,h,u,v,m;return{c(){t=r("div"),s=r("button"),e=o("Retry"),this.h()},l(a){t=n(a,"DIV",{class:!0,id:!0});var r=c(t);s=n(r,"BUTTON",{});var o=c(s);e=l(o,"Retry"),o.forEach(i),r.forEach(i),this.h()},h(){d(t,"class","retry"),d(t,"id","test")},m(r,o){f(r,t,o),p(t,s),p(s,e),u=!0,v||(m=b(s,"click",a[7]),v=!0)},p:k,i(a){u||(w(()=>{h||(h=M(t,H,{y:-50},!0)),h.run(1)}),u=!0)},o(a){h||(h=M(t,H,{y:-50},!1)),h.run(0),u=!1},d(a){a&&i(t),a&&h&&h.end(),v=!1,m()}}}function A(a){let t,s,b,w,M,T,k,x,H,A,N,$,P,R,I,D,O,S,U,V,W,j,q,C,Y,z,G,J,K,L,Q,X,Z,_,aa,ta,sa,ra;const oa=[F,B],ea=[];function na(a,t){return a[6]?0:a[6]?-1:1}return~(ta=na(a))&&(sa=ea[ta]=oa[ta](a)),{c(){t=r("main"),s=r("h1"),b=o("Monster Hunter"),w=e(),M=r("p"),T=o(a[4]),k=e(),x=r("h3"),H=o("Round: "),A=o(a[5]),N=e(),$=r("h3"),P=o("Monster"),R=e(),I=r("div"),D=r("h3"),O=o(a[1]),S=o(" ♥"),U=e(),V=r("span"),W=e(),j=r("br"),q=e(),C=r("h3"),Y=o("Player"),z=e(),G=r("div"),J=r("h3"),K=o(a[0]),L=o(" ♥"),Q=e(),X=r("span"),Z=e(),_=r("br"),aa=e(),sa&&sa.c(),this.h()},l(r){t=n(r,"MAIN",{class:!0});var o=c(t);s=n(o,"H1",{class:!0});var e=c(s);b=l(e,"Monster Hunter"),e.forEach(i),w=h(o),M=n(o,"P",{});var d=c(M);T=l(d,a[4]),d.forEach(i),k=h(o),x=n(o,"H3",{});var u=c(x);H=l(u,"Round: "),A=l(u,a[5]),u.forEach(i),N=h(o),$=n(o,"H3",{});var f=c($);P=l(f,"Monster"),f.forEach(i),R=h(o),I=n(o,"DIV",{class:!0});var p=c(I);D=n(p,"H3",{class:!0});var v=c(D);O=l(v,a[1]),S=l(v," ♥"),v.forEach(i),U=h(p),V=n(p,"SPAN",{style:!0,class:!0}),c(V).forEach(i),p.forEach(i),W=h(o),j=n(o,"BR",{}),q=h(o),C=n(o,"H3",{});var m=c(C);Y=l(m,"Player"),m.forEach(i),z=h(o),G=n(o,"DIV",{class:!0});var g=c(G);J=n(g,"H3",{class:!0});var y=c(J);K=l(y,a[0]),L=l(y," ♥"),y.forEach(i),Q=h(g),X=n(g,"SPAN",{style:!0,class:!0}),c(X).forEach(i),g.forEach(i),Z=h(o),_=n(o,"BR",{}),aa=h(o),sa&&sa.l(o),o.forEach(i),this.h()},h(){d(s,"class","headline svelte-1wv91sm"),d(D,"class","svelte-1wv91sm"),u(V,"width",a[1]+"%"),d(V,"class","svelte-1wv91sm"),d(I,"class","progress-bar svelte-1wv91sm"),d(J,"class","svelte-1wv91sm"),u(X,"width",a[0]+"%"),d(X,"class","svelte-1wv91sm"),d(G,"class","progress-bar svelte-1wv91sm"),d(t,"class","svelte-1wv91sm")},m(a,r){f(a,t,r),p(t,s),p(s,b),p(t,w),p(t,M),p(M,T),p(t,k),p(t,x),p(x,H),p(x,A),p(t,N),p(t,$),p($,P),p(t,R),p(t,I),p(I,D),p(D,O),p(D,S),p(I,U),p(I,V),p(t,W),p(t,j),p(t,q),p(t,C),p(C,Y),p(t,z),p(t,G),p(G,J),p(J,K),p(J,L),p(G,Q),p(G,X),p(t,Z),p(t,_),p(t,aa),~ta&&ea[ta].m(t,null),ra=!0},p(a,[s]){(!ra||16&s)&&v(T,a[4]),(!ra||32&s)&&v(A,a[5]),(!ra||2&s)&&v(O,a[1]),(!ra||2&s)&&u(V,"width",a[1]+"%"),(!ra||1&s)&&v(K,a[0]),(!ra||1&s)&&u(X,"width",a[0]+"%");let r=ta;ta=na(a),ta===r?~ta&&ea[ta].p(a,s):(sa&&(E(),m(ea[r],1,1,()=>{ea[r]=null}),g()),~ta?(sa=ea[ta],sa||(sa=ea[ta]=oa[ta](a),sa.c()),y(sa,1),sa.m(t,null)):sa=null)},i(a){ra||(y(sa),ra=!0)},o(a){m(sa),ra=!1},d(a){a&&i(t),~ta&&ea[ta].d()}}}function N(a,t,s){let r=14,o=100,e=11,n=100,c=3,l=1,i="Make your move",h=0,d=!1;function u(){const a=Math.ceil(Math.random()*e);s(0,o-=a),console.log(a),n<=0?(s(4,i="Player Wins"),p(!1)):o<=0?(s(4,i="Monster Ate Player, Try Again"),p(!0)):s(4,i="Make your move")}function f(a){let t=Math.ceil(10*Math.random());if(t<4&&(t+=4),"strong"===a){if(0===c)return s(4,i="No strong Attacks left");t+=7,s(2,c--,c)}s(1,n-=t),console.log(t),u()}function p(a){if(a)return s(6,d=!0);s(5,h++,h),s(0,o=100),s(1,n=100),s(2,c++,c),h%5==0&&(e++,s(2,c+=2),r+=10),h%10==0&&s(3,l++,l)}return[o,n,c,l,i,h,d,function(){s(6,d=!1),s(0,o=100),s(1,n=100),s(2,c=3),s(3,l=1),r=14,s(5,h=0),e=11},f,function(){const a=Math.ceil(10*Math.random()+r);if(l<=0)return s(4,i="You are out of heals");s(0,o+=a),s(3,l--,l),u()},()=>f("strong")]}export default class extends a{constructor(a){super(),t(this,a,N,A,s,{})}}
