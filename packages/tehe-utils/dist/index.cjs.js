"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,n){return t(n={exports:{}},n.exports),n.exports}var e,r,o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof t&&t)||function(){return this}()||Function("return this")(),u=Object.defineProperty,c=function(t,n){try{u(i,t,{value:n,configurable:!0,writable:!0})}catch(e){i[t]=n}return n},a=i["__core-js_shared__"]||c("__core-js_shared__",{}),l=n((function(t){(t.exports=function(t,n){return a[t]||(a[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})})),f=function(t){try{return!!t()}catch(t){return!0}},s=!f((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),p=Function.prototype,g=p.bind,d=p.call,v=s&&g.bind(d,d),h=s?function(t){return t&&v(t)}:function(t){return t&&function(){return d.apply(t,arguments)}},y=i.TypeError,b=function(t){if(null==t)throw y("Can't call method on "+t);return t},m=i.Object,x=h({}.hasOwnProperty),O=Object.hasOwn||function(t,n){return x(m(b(t)),n)},w=0,S=Math.random(),j=h(1..toString),E=function(t){return"Symbol("+(void 0===t?"":t)+")_"+j(++w+S,36)},I=function(t){return"function"==typeof t},_=function(t){return I(t)?t:void 0},P=function(t,n){return arguments.length<2?_(i[t]):i[t]&&i[t][n]},R=P("navigator","userAgent")||"",T=i.process,A=i.Deno,C=T&&T.versions||A&&A.version,F=C&&C.v8;F&&(r=(e=F.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!r&&R&&(!(e=R.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=R.match(/Chrome\/(\d+)/))&&(r=+e[1]);var M=r,k=!!Object.getOwnPropertySymbols&&!f((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&M&&M<41})),z=k&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,N=l("wks"),L=i.Symbol,D=L&&L.for,U=z?L:L&&L.withoutSetter||E,G=function(t){if(!O(N,t)||!k&&"string"!=typeof N[t]){var n="Symbol."+t;k&&O(L,t)?N[t]=L[t]:N[t]=z&&D?D(n):U(n)}return N[t]},B={};B[G("toStringTag")]="z";var K="[object z]"===String(B),W=!f((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),Y=function(t){return"object"==typeof t?null!==t:I(t)},$=i.document,X=Y($)&&Y($.createElement),q=function(t){return X?$.createElement(t):{}},V=!W&&!f((function(){return 7!=Object.defineProperty(q("div"),"a",{get:function(){return 7}}).a})),H=W&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),J=i.String,Q=i.TypeError,Z=function(t){if(Y(t))return t;throw Q(J(t)+" is not an object")},tt=Function.prototype.call,nt=s?tt.bind(tt):function(){return tt.apply(tt,arguments)},et=h({}.isPrototypeOf),rt=i.Object,ot=z?function(t){return"symbol"==typeof t}:function(t){var n=P("Symbol");return I(n)&&et(n.prototype,rt(t))},it=i.String,ut=function(t){try{return it(t)}catch(t){return"Object"}},ct=i.TypeError,at=function(t,n){var e=t[n];return null==e?void 0:function(t){if(I(t))return t;throw ct(ut(t)+" is not a function")}(e)},lt=i.TypeError,ft=i.TypeError,st=G("toPrimitive"),pt=function(t,n){if(!Y(t)||ot(t))return t;var e,r=at(t,st);if(r){if(void 0===n&&(n="default"),e=nt(r,t,n),!Y(e)||ot(e))return e;throw ft("Can't convert object to primitive value")}return void 0===n&&(n="number"),function(t,n){var e,r;if("string"===n&&I(e=t.toString)&&!Y(r=nt(e,t)))return r;if(I(e=t.valueOf)&&!Y(r=nt(e,t)))return r;if("string"!==n&&I(e=t.toString)&&!Y(r=nt(e,t)))return r;throw lt("Can't convert object to primitive value")}(t,n)},gt=function(t){var n=pt(t,"string");return ot(n)?n:n+""},dt=i.TypeError,vt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,yt={f:W?H?function(t,n,e){if(Z(t),n=gt(n),Z(e),"function"==typeof t&&"prototype"===n&&"value"in e&&"writable"in e&&!e.writable){var r=ht(t,n);r&&r.writable&&(t[n]=e.value,e={configurable:"configurable"in e?e.configurable:r.configurable,enumerable:"enumerable"in e?e.enumerable:r.enumerable,writable:!1})}return vt(t,n,e)}:vt:function(t,n,e){if(Z(t),n=gt(n),Z(e),V)try{return vt(t,n,e)}catch(t){}if("get"in e||"set"in e)throw dt("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},bt=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},mt=W?function(t,n,e){return yt.f(t,n,bt(1,e))}:function(t,n,e){return t[n]=e,t},xt=h(Function.toString);I(a.inspectSource)||(a.inspectSource=function(t){return xt(t)});var Ot,wt,St,jt=a.inspectSource,Et=i.WeakMap,It=I(Et)&&/native code/.test(jt(Et)),_t=l("keys"),Pt=function(t){return _t[t]||(_t[t]=E(t))},Rt={},Tt=i.TypeError,At=i.WeakMap;if(It||a.state){var Ct=a.state||(a.state=new At),Ft=h(Ct.get),Mt=h(Ct.has),kt=h(Ct.set);Ot=function(t,n){if(Mt(Ct,t))throw new Tt("Object already initialized");return n.facade=t,kt(Ct,t,n),n},wt=function(t){return Ft(Ct,t)||{}},St=function(t){return Mt(Ct,t)}}else{var zt=Pt("state");Rt[zt]=!0,Ot=function(t,n){if(O(t,zt))throw new Tt("Object already initialized");return n.facade=t,mt(t,zt,n),n},wt=function(t){return O(t,zt)?t[zt]:{}},St=function(t){return O(t,zt)}}var Nt={set:Ot,get:wt,has:St,enforce:function(t){return St(t)?wt(t):Ot(t,{})},getterFor:function(t){return function(n){var e;if(!Y(n)||(e=wt(n)).type!==t)throw Tt("Incompatible receiver, "+t+" required");return e}}},Lt=Function.prototype,Dt=W&&Object.getOwnPropertyDescriptor,Ut=O(Lt,"name"),Gt={EXISTS:Ut,PROPER:Ut&&"something"===function(){}.name,CONFIGURABLE:Ut&&(!W||W&&Dt(Lt,"name").configurable)},Bt=n((function(t){var n=Gt.CONFIGURABLE,e=Nt.get,r=Nt.enforce,o=String(String).split("String");(t.exports=function(t,e,u,a){var l,f=!!a&&!!a.unsafe,s=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet,g=a&&void 0!==a.name?a.name:e;I(u)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!O(u,"name")||n&&u.name!==g)&&mt(u,"name",g),(l=r(u)).source||(l.source=o.join("string"==typeof g?g:""))),t!==i?(f?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=u:mt(t,e,u)):s?t[e]=u:c(e,u)})(Function.prototype,"toString",(function(){return I(this)&&e(this).source||jt(this)}))})),Kt=h({}.toString),Wt=h("".slice),Yt=function(t){return Wt(Kt(t),8,-1)},$t=G("toStringTag"),Xt=i.Object,qt="Arguments"==Yt(function(){return arguments}()),Vt=K?Yt:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Xt(t),$t))?e:qt?Yt(n):"Object"==(r=Yt(n))&&I(n.callee)?"Arguments":r},Ht=K?{}.toString:function(){return"[object "+Vt(this)+"]"};K||Bt(Object.prototype,"toString",Ht,{unsafe:!0});var Jt,Qt={}.propertyIsEnumerable,Zt=Object.getOwnPropertyDescriptor,tn={f:Zt&&!Qt.call({1:2},1)?function(t){var n=Zt(this,t);return!!n&&n.enumerable}:Qt},nn=i.Object,en=h("".split),rn=f((function(){return!nn("z").propertyIsEnumerable(0)}))?function(t){return"String"==Yt(t)?en(t,""):nn(t)}:nn,on=function(t){return rn(b(t))},un=Object.getOwnPropertyDescriptor,cn={f:W?un:function(t,n){if(t=on(t),n=gt(n),V)try{return un(t,n)}catch(t){}if(O(t,n))return bt(!nt(tn.f,t,n),t[n])}},an=Math.ceil,ln=Math.floor,fn=function(t){var n=+t;return n!=n||0===n?0:(n>0?ln:an)(n)},sn=Math.max,pn=Math.min,gn=function(t,n){var e=fn(t);return e<0?sn(e+n,0):pn(e,n)},dn=Math.min,vn=function(t){return t>0?dn(fn(t),9007199254740991):0},hn=function(t){return vn(t.length)},yn=function(t){return function(n,e,r){var o,i=on(n),u=hn(i),c=gn(r,u);if(t&&e!=e){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},bn={includes:yn(!0),indexOf:yn(!1)}.indexOf,mn=h([].push),xn=function(t,n){var e,r=on(t),o=0,i=[];for(e in r)!O(Rt,e)&&O(r,e)&&mn(i,e);for(;n.length>o;)O(r,e=n[o++])&&(~bn(i,e)||mn(i,e));return i},On=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],wn=On.concat("length","prototype"),Sn={f:Object.getOwnPropertyNames||function(t){return xn(t,wn)}},jn={f:Object.getOwnPropertySymbols},En=h([].concat),In=P("Reflect","ownKeys")||function(t){var n=Sn.f(Z(t)),e=jn.f;return e?En(n,e(t)):n},_n=function(t,n,e){for(var r=In(n),o=yt.f,i=cn.f,u=0;u<r.length;u++){var c=r[u];O(t,c)||e&&O(e,c)||o(t,c,i(n,c))}},Pn=/#|\.prototype\./,Rn=function(t,n){var e=An[Tn(t)];return e==Fn||e!=Cn&&(I(n)?f(n):!!n)},Tn=Rn.normalize=function(t){return String(t).replace(Pn,".").toLowerCase()},An=Rn.data={},Cn=Rn.NATIVE="N",Fn=Rn.POLYFILL="P",Mn=Rn,kn=cn.f,zn=i.String,Nn=function(t){if("Symbol"===Vt(t))throw TypeError("Cannot convert a Symbol value to a string");return zn(t)},Ln=function(){var t=Z(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n},Dn=i.RegExp,Un=f((function(){var t=Dn("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),Gn=Un||f((function(){return!Dn("a","y").sticky})),Bn={BROKEN_CARET:Un||f((function(){var t=Dn("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:Gn,UNSUPPORTED_Y:Un},Kn=Object.keys||function(t){return xn(t,On)},Wn=W&&!H?Object.defineProperties:function(t,n){Z(t);for(var e,r=on(n),o=Kn(n),i=o.length,u=0;i>u;)yt.f(t,e=o[u++],r[e]);return t},Yn={f:Wn},$n=P("document","documentElement"),Xn=Pt("IE_PROTO"),qn=function(){},Vn=function(t){return"<script>"+t+"<\/script>"},Hn=function(t){t.write(Vn("")),t.close();var n=t.parentWindow.Object;return t=null,n},Jn=function(){try{Jt=new ActiveXObject("htmlfile")}catch(t){}var t,n;Jn="undefined"!=typeof document?document.domain&&Jt?Hn(Jt):((n=q("iframe")).style.display="none",$n.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(Vn("document.F=Object")),t.close(),t.F):Hn(Jt);for(var e=On.length;e--;)delete Jn.prototype[On[e]];return Jn()};Rt[Xn]=!0;var Qn,Zn,te=Object.create||function(t,n){var e;return null!==t?(qn.prototype=Z(t),e=new qn,qn.prototype=null,e[Xn]=t):e=Jn(),void 0===n?e:Yn.f(e,n)},ne=i.RegExp,ee=f((function(){var t=ne(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),re=i.RegExp,oe=f((function(){var t=re("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),ie=Nt.get,ue=l("native-string-replace",String.prototype.replace),ce=RegExp.prototype.exec,ae=ce,le=h("".charAt),fe=h("".indexOf),se=h("".replace),pe=h("".slice),ge=(Zn=/b*/g,nt(ce,Qn=/a/,"a"),nt(ce,Zn,"a"),0!==Qn.lastIndex||0!==Zn.lastIndex),de=Bn.BROKEN_CARET,ve=void 0!==/()??/.exec("")[1];(ge||ve||de||ee||oe)&&(ae=function(t){var n,e,r,o,i,u,c,a=this,l=ie(a),f=Nn(t),s=l.raw;if(s)return s.lastIndex=a.lastIndex,n=nt(ae,s,f),a.lastIndex=s.lastIndex,n;var p=l.groups,g=de&&a.sticky,d=nt(Ln,a),v=a.source,h=0,y=f;if(g&&(d=se(d,"y",""),-1===fe(d,"g")&&(d+="g"),y=pe(f,a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==le(f,a.lastIndex-1))&&(v="(?: "+v+")",y=" "+y,h++),e=new RegExp("^(?:"+v+")",d)),ve&&(e=new RegExp("^"+v+"$(?!\\s)",d)),ge&&(r=a.lastIndex),o=nt(ce,g?e:a,y),g?o?(o.input=pe(o.input,h),o[0]=pe(o[0],h),o.index=a.lastIndex,a.lastIndex+=o[0].length):a.lastIndex=0:ge&&o&&(a.lastIndex=a.global?o.index+o[0].length:r),ve&&o&&o.length>1&&nt(ue,o[0],e,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=u=te(null),i=0;i<p.length;i++)u[(c=p[i])[0]]=o[c[1]];return o});var he=ae;!function(t,n){var e,r,o,u,a,l=t.target,f=t.global,s=t.stat;if(e=f?i:s?i[l]||c(l,{}):(i[l]||{}).prototype)for(r in n){if(u=n[r],o=t.noTargetGet?(a=kn(e,r))&&a.value:e[r],!Mn(f?r:l+(s?".":"#")+r,t.forced)&&void 0!==o){if(typeof u==typeof o)continue;_n(u,o)}(t.sham||o&&o.sham)&&mt(u,"sham",!0),Bt(e,r,u,t)}}({target:"RegExp",proto:!0,forced:/./.exec!==he},{exec:he});var ye=Function.prototype,be=ye.apply,me=ye.call,xe="object"==typeof Reflect&&Reflect.apply||(s?me.bind(be):function(){return me.apply(be,arguments)}),Oe=G("species"),we=RegExp.prototype,Se=G("match"),je=function(){},Ee=[],Ie=P("Reflect","construct"),_e=/^\s*(?:class|function)\b/,Pe=h(_e.exec),Re=!_e.exec(je),Te=function(t){if(!I(t))return!1;try{return Ie(je,Ee,t),!0}catch(t){return!1}},Ae=function(t){if(!I(t))return!1;switch(Vt(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Re||!!Pe(_e,jt(t))}catch(t){return!0}};Ae.sham=!0;var Ce=!Ie||f((function(){var t;return Te(Te.call)||!Te(Object)||!Te((function(){t=!0}))||t}))?Ae:Te,Fe=i.TypeError,Me=G("species"),ke=function(t,n){var e,r=Z(t).constructor;return void 0===r||null==(e=Z(r)[Me])?n:function(t){if(Ce(t))return t;throw Fe(ut(t)+" is not a constructor")}(e)},ze=h("".charAt),Ne=h("".charCodeAt),Le=h("".slice),De=function(t){return function(n,e){var r,o,i=Nn(b(n)),u=fn(e),c=i.length;return u<0||u>=c?t?"":void 0:(r=Ne(i,u))<55296||r>56319||u+1===c||(o=Ne(i,u+1))<56320||o>57343?t?ze(i,u):r:t?Le(i,u,u+2):o-56320+(r-55296<<10)+65536}},Ue={codeAt:De(!1),charAt:De(!0)}.charAt,Ge=function(t,n,e){return n+(e?Ue(t,n).length:1)},Be=i.Array,Ke=Math.max,We=function(t,n,e){for(var r,o,i,u,c=hn(t),a=gn(n,c),l=gn(void 0===e?c:e,c),f=Be(Ke(l-a,0)),s=0;a<l;a++,s++)r=f,o=s,i=t[a],u=void 0,(u=gt(o))in r?yt.f(r,u,bt(0,i)):r[u]=i;return f.length=s,f},Ye=i.TypeError,$e=function(t,n){var e=t.exec;if(I(e)){var r=nt(e,t,n);return null!==r&&Z(r),r}if("RegExp"===Yt(t))return nt(he,t,n);throw Ye("RegExp#exec called on incompatible receiver")},Xe=Bn.UNSUPPORTED_Y,qe=Math.min,Ve=[].push,He=h(/./.exec),Je=h(Ve),Qe=h("".slice);!function(t,n,e,r){var o=G(t),i=!f((function(){var n={};return n[o]=function(){return 7},7!=""[t](n)})),u=i&&!f((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[Oe]=function(){return e},e.flags="",e[o]=/./[o]),e.exec=function(){return n=!0,null},e[o](""),!n}));if(!i||!u||e){var c=h(/./[o]),a=n(o,""[t],(function(t,n,e,r,o){var u=h(t),a=n.exec;return a===he||a===we.exec?i&&!o?{done:!0,value:c(n,e,r)}:{done:!0,value:u(e,n,r)}:{done:!1}}));Bt(String.prototype,t,a[0]),Bt(we,o,a[1])}r&&mt(we[o],"sham",!0)}("split",(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r,o,i=Nn(b(this)),u=void 0===e?4294967295:e>>>0;if(0===u)return[];if(void 0===t)return[i];if(!Y(r=t)||!(void 0!==(o=r[Se])?o:"RegExp"==Yt(r)))return nt(n,i,t,u);for(var c,a,l,f=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,s+"g");(c=nt(he,g,i))&&!((a=g.lastIndex)>p&&(Je(f,Qe(i,p,c.index)),c.length>1&&c.index<i.length&&xe(Ve,f,We(c,1)),l=c[0].length,p=a,f.length>=u));)g.lastIndex===c.index&&g.lastIndex++;return p===i.length?!l&&He(g,"")||Je(f,""):Je(f,Qe(i,p)),f.length>u?We(f,0,u):f}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:nt(n,this,t,e)}:n,[function(n,e){var o=b(this),i=null==n?void 0:at(n,t);return i?nt(i,n,o,e):nt(r,Nn(o),n,e)},function(t,o){var i=Z(this),u=Nn(t),c=e(r,i,u,o,r!==n);if(c.done)return c.value;var a=ke(i,RegExp),l=i.unicode,f=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(Xe?"g":"y"),s=new a(Xe?"^(?:"+i.source+")":i,f),p=void 0===o?4294967295:o>>>0;if(0===p)return[];if(0===u.length)return null===$e(s,u)?[u]:[];for(var g=0,d=0,v=[];d<u.length;){s.lastIndex=Xe?0:d;var h,y=$e(s,Xe?Qe(u,d):u);if(null===y||(h=qe(vn(s.lastIndex+(Xe?d:0)),u.length))===g)d=Ge(u,d,l);else{if(Je(v,Qe(u,g,d)),v.length===p)return v;for(var b=1;b<=y.length-1;b++)if(Je(v,y[b]),v.length===p)return v;d=g=h}}return Je(v,Qe(u,g)),v}]}),!!f((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]})),Xe);var Ze=Object.freeze({__proto__:null,getStrFullLength:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.split("").reduce((function(t,n){var e=n.charCodeAt(0);return e>=0&&e<=128?t+1:t+2}),0)},cutStrByFullLength:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,e=0;return t.split("").reduce((function(t,r){var o=r.charCodeAt(0);return(e+=o>=0&&o<=128?1:2)<=n?t+r:t}),"")}});console.log(1212);var tr=Object.freeze({__proto__:null,addition:function(t,n){return t+n}});var nr=Object.freeze({__proto__:null,subtraction:function(t,n){return t-n}});exports.StringUtil=Ze,exports.add=tr,exports.sub=nr;
