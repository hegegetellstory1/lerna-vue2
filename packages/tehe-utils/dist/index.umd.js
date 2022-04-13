!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self)["tehe-utils"]={})}(this,(function(t){"use strict";var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,n){return t(n={exports:{}},n.exports),n.exports}var r,o,i=function(t){return t&&t.Math==Math&&t},u=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n&&n)||function(){return this}()||Function("return this")(),c=Object.defineProperty,a=function(t,n){try{c(u,t,{value:n,configurable:!0,writable:!0})}catch(e){u[t]=n}return n},f="__core-js_shared__",l=u[f]||a(f,{}),s=e((function(t){(t.exports=function(t,n){return l[t]||(l[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})})),p=function(t){try{return!!t()}catch(t){return!0}},g=!p((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),d=Function.prototype,v=d.bind,h=d.call,y=g&&v.bind(h,h),b=g?function(t){return t&&y(t)}:function(t){return t&&function(){return h.apply(t,arguments)}},m=u.TypeError,x=function(t){if(null==t)throw m("Can't call method on "+t);return t},O=u.Object,w=b({}.hasOwnProperty),S=Object.hasOwn||function(t,n){return w(O(x(t)),n)},j=0,E=Math.random(),I=b(1..toString),P=function(t){return"Symbol("+(void 0===t?"":t)+")_"+I(++j+E,36)},R=function(t){return"function"==typeof t},T=function(t){return R(t)?t:void 0},_=function(t,n){return arguments.length<2?T(u[t]):u[t]&&u[t][n]},A=_("navigator","userAgent")||"",C=u.process,F=u.Deno,M=C&&C.versions||F&&F.version,k=M&&M.v8;k&&(o=(r=k.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&A&&(!(r=A.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=A.match(/Chrome\/(\d+)/))&&(o=+r[1]);var z=o,N=!!Object.getOwnPropertySymbols&&!p((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&z&&z<41})),L=N&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,D=s("wks"),U=u.Symbol,G=U&&U.for,B=L?U:U&&U.withoutSetter||P,K=function(t){if(!S(D,t)||!N&&"string"!=typeof D[t]){var n="Symbol."+t;N&&S(U,t)?D[t]=U[t]:D[t]=L&&G?G(n):B(n)}return D[t]},W={};W[K("toStringTag")]="z";var Y="[object z]"===String(W),$=!p((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),X=function(t){return"object"==typeof t?null!==t:R(t)},q=u.document,V=X(q)&&X(q.createElement),H=function(t){return V?q.createElement(t):{}},J=!$&&!p((function(){return 7!=Object.defineProperty(H("div"),"a",{get:function(){return 7}}).a})),Q=$&&p((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Z=u.String,tt=u.TypeError,nt=function(t){if(X(t))return t;throw tt(Z(t)+" is not an object")},et=Function.prototype.call,rt=g?et.bind(et):function(){return et.apply(et,arguments)},ot=b({}.isPrototypeOf),it=u.Object,ut=L?function(t){return"symbol"==typeof t}:function(t){var n=_("Symbol");return R(n)&&ot(n.prototype,it(t))},ct=u.String,at=function(t){try{return ct(t)}catch(t){return"Object"}},ft=u.TypeError,lt=function(t,n){var e=t[n];return null==e?void 0:function(t){if(R(t))return t;throw ft(at(t)+" is not a function")}(e)},st=u.TypeError,pt=u.TypeError,gt=K("toPrimitive"),dt=function(t,n){if(!X(t)||ut(t))return t;var e,r=lt(t,gt);if(r){if(void 0===n&&(n="default"),e=rt(r,t,n),!X(e)||ut(e))return e;throw pt("Can't convert object to primitive value")}return void 0===n&&(n="number"),function(t,n){var e,r;if("string"===n&&R(e=t.toString)&&!X(r=rt(e,t)))return r;if(R(e=t.valueOf)&&!X(r=rt(e,t)))return r;if("string"!==n&&R(e=t.toString)&&!X(r=rt(e,t)))return r;throw st("Can't convert object to primitive value")}(t,n)},vt=function(t){var n=dt(t,"string");return ut(n)?n:n+""},ht=u.TypeError,yt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,mt="enumerable",xt="configurable",Ot="writable",wt={f:$?Q?function(t,n,e){if(nt(t),n=vt(n),nt(e),"function"==typeof t&&"prototype"===n&&"value"in e&&Ot in e&&!e.writable){var r=bt(t,n);r&&r.writable&&(t[n]=e.value,e={configurable:xt in e?e.configurable:r.configurable,enumerable:mt in e?e.enumerable:r.enumerable,writable:!1})}return yt(t,n,e)}:yt:function(t,n,e){if(nt(t),n=vt(n),nt(e),J)try{return yt(t,n,e)}catch(t){}if("get"in e||"set"in e)throw ht("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},St=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},jt=$?function(t,n,e){return wt.f(t,n,St(1,e))}:function(t,n,e){return t[n]=e,t},Et=b(Function.toString);R(l.inspectSource)||(l.inspectSource=function(t){return Et(t)});var It,Pt,Rt,Tt=l.inspectSource,_t=u.WeakMap,At=R(_t)&&/native code/.test(Tt(_t)),Ct=s("keys"),Ft=function(t){return Ct[t]||(Ct[t]=P(t))},Mt={},kt="Object already initialized",zt=u.TypeError,Nt=u.WeakMap;if(At||l.state){var Lt=l.state||(l.state=new Nt),Dt=b(Lt.get),Ut=b(Lt.has),Gt=b(Lt.set);It=function(t,n){if(Ut(Lt,t))throw new zt(kt);return n.facade=t,Gt(Lt,t,n),n},Pt=function(t){return Dt(Lt,t)||{}},Rt=function(t){return Ut(Lt,t)}}else{var Bt=Ft("state");Mt[Bt]=!0,It=function(t,n){if(S(t,Bt))throw new zt(kt);return n.facade=t,jt(t,Bt,n),n},Pt=function(t){return S(t,Bt)?t[Bt]:{}},Rt=function(t){return S(t,Bt)}}var Kt={set:It,get:Pt,has:Rt,enforce:function(t){return Rt(t)?Pt(t):It(t,{})},getterFor:function(t){return function(n){var e;if(!X(n)||(e=Pt(n)).type!==t)throw zt("Incompatible receiver, "+t+" required");return e}}},Wt=Function.prototype,Yt=$&&Object.getOwnPropertyDescriptor,$t=S(Wt,"name"),Xt={EXISTS:$t,PROPER:$t&&"something"===function(){}.name,CONFIGURABLE:$t&&(!$||$&&Yt(Wt,"name").configurable)},qt=e((function(t){var n=Xt.CONFIGURABLE,e=Kt.get,r=Kt.enforce,o=String(String).split("String");(t.exports=function(t,e,i,c){var f,l=!!c&&!!c.unsafe,s=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:e;R(i)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!S(i,"name")||n&&i.name!==g)&&jt(i,"name",g),(f=r(i)).source||(f.source=o.join("string"==typeof g?g:""))),t!==u?(l?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=i:jt(t,e,i)):s?t[e]=i:a(e,i)})(Function.prototype,"toString",(function(){return R(this)&&e(this).source||Tt(this)}))})),Vt=b({}.toString),Ht=b("".slice),Jt=function(t){return Ht(Vt(t),8,-1)},Qt=K("toStringTag"),Zt=u.Object,tn="Arguments"==Jt(function(){return arguments}()),nn=Y?Jt:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Zt(t),Qt))?e:tn?Jt(n):"Object"==(r=Jt(n))&&R(n.callee)?"Arguments":r},en=Y?{}.toString:function(){return"[object "+nn(this)+"]"};Y||qt(Object.prototype,"toString",en,{unsafe:!0});var rn,on={}.propertyIsEnumerable,un=Object.getOwnPropertyDescriptor,cn={f:un&&!on.call({1:2},1)?function(t){var n=un(this,t);return!!n&&n.enumerable}:on},an=u.Object,fn=b("".split),ln=p((function(){return!an("z").propertyIsEnumerable(0)}))?function(t){return"String"==Jt(t)?fn(t,""):an(t)}:an,sn=function(t){return ln(x(t))},pn=Object.getOwnPropertyDescriptor,gn={f:$?pn:function(t,n){if(t=sn(t),n=vt(n),J)try{return pn(t,n)}catch(t){}if(S(t,n))return St(!rt(cn.f,t,n),t[n])}},dn=Math.ceil,vn=Math.floor,hn=function(t){var n=+t;return n!=n||0===n?0:(n>0?vn:dn)(n)},yn=Math.max,bn=Math.min,mn=function(t,n){var e=hn(t);return e<0?yn(e+n,0):bn(e,n)},xn=Math.min,On=function(t){return t>0?xn(hn(t),9007199254740991):0},wn=function(t){return On(t.length)},Sn=function(t){return function(n,e,r){var o,i=sn(n),u=wn(i),c=mn(r,u);if(t&&e!=e){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},jn={includes:Sn(!0),indexOf:Sn(!1)}.indexOf,En=b([].push),In=function(t,n){var e,r=sn(t),o=0,i=[];for(e in r)!S(Mt,e)&&S(r,e)&&En(i,e);for(;n.length>o;)S(r,e=n[o++])&&(~jn(i,e)||En(i,e));return i},Pn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Rn=Pn.concat("length","prototype"),Tn={f:Object.getOwnPropertyNames||function(t){return In(t,Rn)}},_n={f:Object.getOwnPropertySymbols},An=b([].concat),Cn=_("Reflect","ownKeys")||function(t){var n=Tn.f(nt(t)),e=_n.f;return e?An(n,e(t)):n},Fn=function(t,n,e){for(var r=Cn(n),o=wt.f,i=gn.f,u=0;u<r.length;u++){var c=r[u];S(t,c)||e&&S(e,c)||o(t,c,i(n,c))}},Mn=/#|\.prototype\./,kn=function(t,n){var e=Nn[zn(t)];return e==Dn||e!=Ln&&(R(n)?p(n):!!n)},zn=kn.normalize=function(t){return String(t).replace(Mn,".").toLowerCase()},Nn=kn.data={},Ln=kn.NATIVE="N",Dn=kn.POLYFILL="P",Un=kn,Gn=gn.f,Bn=u.String,Kn=function(t){if("Symbol"===nn(t))throw TypeError("Cannot convert a Symbol value to a string");return Bn(t)},Wn=function(){var t=nt(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n},Yn=u.RegExp,$n=p((function(){var t=Yn("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),Xn=$n||p((function(){return!Yn("a","y").sticky})),qn={BROKEN_CARET:$n||p((function(){var t=Yn("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:Xn,UNSUPPORTED_Y:$n},Vn=Object.keys||function(t){return In(t,Pn)},Hn=$&&!Q?Object.defineProperties:function(t,n){nt(t);for(var e,r=sn(n),o=Vn(n),i=o.length,u=0;i>u;)wt.f(t,e=o[u++],r[e]);return t},Jn={f:Hn},Qn=_("document","documentElement"),Zn=Ft("IE_PROTO"),te=function(){},ne=function(t){return"<script>"+t+"</"+"script>"},ee=function(t){t.write(ne("")),t.close();var n=t.parentWindow.Object;return t=null,n},re=function(){try{rn=new ActiveXObject("htmlfile")}catch(t){}var t,n;re="undefined"!=typeof document?document.domain&&rn?ee(rn):((n=H("iframe")).style.display="none",Qn.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(ne("document.F=Object")),t.close(),t.F):ee(rn);for(var e=Pn.length;e--;)delete re.prototype[Pn[e]];return re()};Mt[Zn]=!0;var oe,ie,ue=Object.create||function(t,n){var e;return null!==t?(te.prototype=nt(t),e=new te,te.prototype=null,e[Zn]=t):e=re(),void 0===n?e:Jn.f(e,n)},ce=u.RegExp,ae=p((function(){var t=ce(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),fe=u.RegExp,le=p((function(){var t=fe("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),se=Kt.get,pe=s("native-string-replace",String.prototype.replace),ge=RegExp.prototype.exec,de=ge,ve=b("".charAt),he=b("".indexOf),ye=b("".replace),be=b("".slice),me=(ie=/b*/g,rt(ge,oe=/a/,"a"),rt(ge,ie,"a"),0!==oe.lastIndex||0!==ie.lastIndex),xe=qn.BROKEN_CARET,Oe=void 0!==/()??/.exec("")[1];(me||Oe||xe||ae||le)&&(de=function(t){var n,e,r,o,i,u,c,a=this,f=se(a),l=Kn(t),s=f.raw;if(s)return s.lastIndex=a.lastIndex,n=rt(de,s,l),a.lastIndex=s.lastIndex,n;var p=f.groups,g=xe&&a.sticky,d=rt(Wn,a),v=a.source,h=0,y=l;if(g&&(d=ye(d,"y",""),-1===he(d,"g")&&(d+="g"),y=be(l,a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==ve(l,a.lastIndex-1))&&(v="(?: "+v+")",y=" "+y,h++),e=new RegExp("^(?:"+v+")",d)),Oe&&(e=new RegExp("^"+v+"$(?!\\s)",d)),me&&(r=a.lastIndex),o=rt(ge,g?e:a,y),g?o?(o.input=be(o.input,h),o[0]=be(o[0],h),o.index=a.lastIndex,a.lastIndex+=o[0].length):a.lastIndex=0:me&&o&&(a.lastIndex=a.global?o.index+o[0].length:r),Oe&&o&&o.length>1&&rt(pe,o[0],e,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=u=ue(null),i=0;i<p.length;i++)u[(c=p[i])[0]]=o[c[1]];return o});var we=de;!function(t,n){var e,r,o,i,c,f=t.target,l=t.global,s=t.stat;if(e=l?u:s?u[f]||a(f,{}):(u[f]||{}).prototype)for(r in n){if(i=n[r],o=t.noTargetGet?(c=Gn(e,r))&&c.value:e[r],!Un(l?r:f+(s?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Fn(i,o)}(t.sham||o&&o.sham)&&jt(i,"sham",!0),qt(e,r,i,t)}}({target:"RegExp",proto:!0,forced:/./.exec!==we},{exec:we});var Se=Function.prototype,je=Se.apply,Ee=Se.call,Ie="object"==typeof Reflect&&Reflect.apply||(g?Ee.bind(je):function(){return Ee.apply(je,arguments)}),Pe=K("species"),Re=RegExp.prototype,Te=K("match"),_e=function(){},Ae=[],Ce=_("Reflect","construct"),Fe=/^\s*(?:class|function)\b/,Me=b(Fe.exec),ke=!Fe.exec(_e),ze=function(t){if(!R(t))return!1;try{return Ce(_e,Ae,t),!0}catch(t){return!1}},Ne=function(t){if(!R(t))return!1;switch(nn(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ke||!!Me(Fe,Tt(t))}catch(t){return!0}};Ne.sham=!0;var Le=!Ce||p((function(){var t;return ze(ze.call)||!ze(Object)||!ze((function(){t=!0}))||t}))?Ne:ze,De=u.TypeError,Ue=K("species"),Ge=function(t,n){var e,r=nt(t).constructor;return void 0===r||null==(e=nt(r)[Ue])?n:function(t){if(Le(t))return t;throw De(at(t)+" is not a constructor")}(e)},Be=b("".charAt),Ke=b("".charCodeAt),We=b("".slice),Ye=function(t){return function(n,e){var r,o,i=Kn(x(n)),u=hn(e),c=i.length;return u<0||u>=c?t?"":void 0:(r=Ke(i,u))<55296||r>56319||u+1===c||(o=Ke(i,u+1))<56320||o>57343?t?Be(i,u):r:t?We(i,u,u+2):o-56320+(r-55296<<10)+65536}},$e={codeAt:Ye(!1),charAt:Ye(!0)}.charAt,Xe=function(t,n,e){return n+(e?$e(t,n).length:1)},qe=u.Array,Ve=Math.max,He=function(t,n,e){for(var r,o,i,u,c=wn(t),a=mn(n,c),f=mn(void 0===e?c:e,c),l=qe(Ve(f-a,0)),s=0;a<f;a++,s++)r=l,o=s,i=t[a],u=void 0,(u=vt(o))in r?wt.f(r,u,St(0,i)):r[u]=i;return l.length=s,l},Je=u.TypeError,Qe=function(t,n){var e=t.exec;if(R(e)){var r=rt(e,t,n);return null!==r&&nt(r),r}if("RegExp"===Jt(t))return rt(we,t,n);throw Je("RegExp#exec called on incompatible receiver")},Ze=qn.UNSUPPORTED_Y,tr=4294967295,nr=Math.min,er=[].push,rr=b(/./.exec),or=b(er),ir=b("".slice),ur=!p((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));!function(t,n,e,r){var o=K(t),i=!p((function(){var n={};return n[o]=function(){return 7},7!=""[t](n)})),u=i&&!p((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[Pe]=function(){return e},e.flags="",e[o]=/./[o]),e.exec=function(){return n=!0,null},e[o](""),!n}));if(!i||!u||e){var c=b(/./[o]),a=n(o,""[t],(function(t,n,e,r,o){var u=b(t),a=n.exec;return a===we||a===Re.exec?i&&!o?{done:!0,value:c(n,e,r)}:{done:!0,value:u(e,n,r)}:{done:!1}}));qt(String.prototype,t,a[0]),qt(Re,o,a[1])}r&&jt(Re[o],"sham",!0)}("split",(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r,o,i=Kn(x(this)),u=void 0===e?tr:e>>>0;if(0===u)return[];if(void 0===t)return[i];if(!X(r=t)||!(void 0!==(o=r[Te])?o:"RegExp"==Jt(r)))return rt(n,i,t,u);for(var c,a,f,l=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,s+"g");(c=rt(we,g,i))&&!((a=g.lastIndex)>p&&(or(l,ir(i,p,c.index)),c.length>1&&c.index<i.length&&Ie(er,l,He(c,1)),f=c[0].length,p=a,l.length>=u));)g.lastIndex===c.index&&g.lastIndex++;return p===i.length?!f&&rr(g,"")||or(l,""):or(l,ir(i,p)),l.length>u?He(l,0,u):l}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:rt(n,this,t,e)}:n,[function(n,e){var o=x(this),i=null==n?void 0:lt(n,t);return i?rt(i,n,o,e):rt(r,Kn(o),n,e)},function(t,o){var i=nt(this),u=Kn(t),c=e(r,i,u,o,r!==n);if(c.done)return c.value;var a=Ge(i,RegExp),f=i.unicode,l=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(Ze?"g":"y"),s=new a(Ze?"^(?:"+i.source+")":i,l),p=void 0===o?tr:o>>>0;if(0===p)return[];if(0===u.length)return null===Qe(s,u)?[u]:[];for(var g=0,d=0,v=[];d<u.length;){s.lastIndex=Ze?0:d;var h,y=Qe(s,Ze?ir(u,d):u);if(null===y||(h=nr(On(s.lastIndex+(Ze?d:0)),u.length))===g)d=Xe(u,d,f);else{if(or(v,ir(u,g,d)),v.length===p)return v;for(var b=1;b<=y.length-1;b++)if(or(v,y[b]),v.length===p)return v;d=g=h}}return or(v,ir(u,g)),v}]}),!ur,Ze);var cr=Object.freeze({__proto__:null,getStrFullLength:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.split("").reduce((function(t,n){var e=n.charCodeAt(0);return e>=0&&e<=128?t+1:t+2}),0)},cutStrByFullLength:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,e=0;return t.split("").reduce((function(t,r){var o=r.charCodeAt(0);return(e+=o>=0&&o<=128?1:2)<=n?t+r:t}),"")}});console.log(1212);var ar=Object.freeze({__proto__:null,addition:function(t,n){return t+n}});var fr=Object.freeze({__proto__:null,subtraction:function(t,n){return t-n}});t.StringUtil=cr,t.add=ar,t.sub=fr,Object.defineProperty(t,"__esModule",{value:!0})}));
