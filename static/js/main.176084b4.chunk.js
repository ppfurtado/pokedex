(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t);var c,r,a,i,l,s,o,j=n(0),p=n.n(j),d=n(14),u=n.n(d),b=n(6),x=n(2),h=n(3),O=n(4),f=n(10),m=n.n(f),g=n(15),y=n(8),v=n(1),k=p.a.createContext(),E={steel:"#f4f4f4",fire:"#FDDFDF",grass:"#DEFDE0",electric:"#FCF7DE",water:"#DEF3FD",ice:"#DEF3FD",ground:"#f4e7da",rock:"#d5d5d4",fairy:"#fceaff",poison:"#98d7a5",bug:"#f8d5a3",dragon:"#97b3e6",psychic:"#eaeda1",flying:"#F5F5F5",fighting:"#E6E0D4",normal:"#F5F5F5"},w=function(e){var t=e.children,n=p.a.useState(null),c=Object(y.a)(n,2),r=c[0],a=c[1],i=function(e){return"https://pokeapi.co/api/v2/pokemon/".concat(e)};return p.a.useEffect((function(){function e(){return(e=Object(g.a)(m.a.mark((function e(){var t,n,c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=1;case 2:if(!(n<=150)){e.next=13;break}return e.next=5,fetch(i(n));case 5:return c=e.sent,e.next=8,c.json();case 8:r=e.sent,t.push(r);case 10:n++,e.next=2;break;case 13:a(t);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(v.jsx)(k.Provider,{value:{data:r,typesBackground:E},children:t})},F=O.a.div(c||(c=Object(h.a)(["\n  position: relative;\n  width: 200px;\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  background: ",";\n  align-items: center;\n  padding-top: 1rem;\n  border-radius: 5px;\n  justify-content: center;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"])),(function(e){return e.typesBackground[e.type[0]]})),D=O.a.h2(r||(r=Object(h.a)(["\n  margin: 10px 0px 0px 0px;\n"]))),B=O.a.h4(a||(a=Object(h.a)(["\n  margin: 0px;\n"]))),S=O.a.p(i||(i=Object(h.a)(["\n  position: absolute;\n  right: 15px;\n  top: 5px;\n"]))),C=function(e){var t=e.name,n=e.typepokemon,c=e.url,r=e.alt,a=e.type,i=e.id,l=p.a.useContext(k).typesBackground;return Object(v.jsxs)(F,{type:a,typesBackground:l,children:[Object(v.jsx)("img",{style:{display:"block",maxWidth:"40%"},src:c,alt:r}),Object(v.jsx)(S,{children:"##".concat(i)}),Object(v.jsx)(D,{children:t}),Object(v.jsx)(B,{children:n})]})},_=O.a.div(l||(l=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(5,1fr);\n  width: 96%;\n  margin: 0 auto;\n  justify-items: center;\n  gap: 20px;\n  padding: 10px;\n  font-family: 'Roboto', sans-serif;\n"]))),P=O.a.h2(s||(s=Object(h.a)(["\n  text-align: center;\n"]))),A=Object(O.a)(b.b)(o||(o=Object(h.a)(["\n  text-decoration: none;\n  color: black;\n\n  &:focus, &:hover, &:visited, &:link, &:active {\n    text-decoration: none;\n}\n"]))),I=function(){var e=p.a.useContext(k).data;return null===e?null:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(P,{children:"Pokedex"}),Object(v.jsx)(_,{children:e.map((function(e){return Object(v.jsx)(A,{style:{textDecoration:"none"},to:"/".concat(e.id,"/").concat(e.name),children:Object(v.jsx)(C,{name:e.name,id:e.id,typepokemon:e.types.map((function(e){return e.type.name})).join(" | "),type:e.types.map((function(e){return e.type.name})),alt:e.name,url:e.sprites.other.dream_world.front_default})},e.name)}))})]})};function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M=j.createElement("g",null,j.createElement("g",null,j.createElement("path",{d:"M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124 c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844 L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412 c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008 c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788 C492,219.198,479.172,207.418,464.344,207.418z"}))),J=j.createElement("g",null),R=j.createElement("g",null),W=j.createElement("g",null),z=j.createElement("g",null),T=j.createElement("g",null),X=j.createElement("g",null),q=j.createElement("g",null),G=j.createElement("g",null),K=j.createElement("g",null),N=j.createElement("g",null),Q=j.createElement("g",null),U=j.createElement("g",null),V=j.createElement("g",null),Y=j.createElement("g",null),Z=j.createElement("g",null);function $(e,t){var n=e.title,c=e.titleId,r=H(e,["title","titleId"]);return j.createElement("svg",L({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 492 492",style:{enableBackground:"new 0 0 492 492"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},r),n?j.createElement("title",{id:c},n):null,M,J,R,W,z,T,X,q,G,K,N,Q,U,V,Y,Z)}var ee,te,ne,ce,re,ae,ie,le,se,oe,je,pe=j.forwardRef($),de=(n.p,O.a.div(ee||(ee=Object(h.a)(["\n  width: 80%;\n  margin: 0 auto;\n  background: ",";\n"])),(function(e){return e.typesBackground[e.type]}))),ue=O.a.div(te||(te=Object(h.a)(["\n  position: relative;\n  width: 100%;\n  height: 200px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),be=Object(O.a)(pe)(ne||(ne=Object(h.a)(["\n  position: absolute;\n  width: 30px;\n  left: 10px;\n  top: 10px;\n"]))),xe=O.a.img.attrs((function(e){return{src:e.src,alt:e.alt}}))(ce||(ce=Object(h.a)(["\n  display: block;\n  max-height: 100%;\n  position: absolute;\n  bottom: -30px;\n"]))),he=O.a.div(re||(re=Object(h.a)(["\n  width: 100%;\n  height: 400px;\n  background: white;\n  border-radius: 50px 50px 0 0;\n"]))),Oe=O.a.div(ae||(ae=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0 20px;\n"]))),fe=O.a.div(ie||(ie=Object(h.a)(["\n  /* margin-left: 20px; */\n  display: flex;\n  flex-direction: column;\n"]))),me=O.a.div(le||(le=Object(h.a)([""]))),ge=(O.a.h3(se||(se=Object(h.a)(["\n  margin-left: 20px;\n"]))),O.a.div(oe||(oe=Object(h.a)(["\n  margin-left: 100px;\n"])))),ye=O.a.div(je||(je=Object(h.a)(["\n  margin-left: 20px;\n  display: flex;\n"]))),ve=function(){var e=p.a.useState("about"),t=Object(y.a)(e,2),n=t[0],c=t[1],r=Object(x.g)(),a=Object(x.h)().id,i=p.a.useContext(k),l=i.typesBackground,s=i.data;return null===s?null:(console.log(s[a-1]),Object(v.jsxs)(de,{typesBackground:l,type:s[a-1].types[0].type.name,children:[Object(v.jsxs)(ue,{children:[Object(v.jsx)(be,{onClick:function(){return r(-1)}}),Object(v.jsx)(xe,{src:s[a-1].sprites.other.dream_world.front_default,alt:s[a-1].forms[0].name})]}),Object(v.jsxs)(he,{children:[Object(v.jsxs)(Oe,{children:[Object(v.jsxs)("p",{children:[" ",Object(v.jsx)("button",{onClick:function(){c("about")},children:" About "})]}),Object(v.jsxs)("p",{children:[" ",Object(v.jsx)("button",{onClick:function(){c("base stats")},children:" Base Stats"})," "]}),Object(v.jsx)("p",{children:"Evolution"}),Object(v.jsx)("p",{children:"Moves"})]}),Object(v.jsxs)(fe,{children:["about"===n&&Object(v.jsxs)(ye,{children:[Object(v.jsxs)(me,{children:[Object(v.jsx)("p",{children:"Species"}),Object(v.jsx)("p",{children:"Height"}),Object(v.jsx)("p",{children:"Weight"}),Object(v.jsx)("p",{children:"Ability"})]}),Object(v.jsxs)(ge,{children:[Object(v.jsxs)("p",{children:[" ",s[a-1].name," "]}),Object(v.jsxs)("p",{children:[" ",s[a-1].height," "]}),Object(v.jsxs)("p",{children:[" ",s[a-1].weight," "]}),Object(v.jsx)("p",{children:s[a-1].abilities.map((function(e,t){return e.ability.name})).join(" - ")})]})]}),"base stats"===n&&Object(v.jsxs)(ye,{children:[Object(v.jsxs)(me,{children:[Object(v.jsx)("p",{children:"HP"}),Object(v.jsx)("p",{children:"Attack"}),Object(v.jsx)("p",{children:"Defense"}),Object(v.jsx)("p",{children:"Sp. Atk"}),Object(v.jsx)("p",{children:"Sp. Def"}),Object(v.jsx)("p",{children:"Speed"}),Object(v.jsx)("p",{children:"Total"})]}),Object(v.jsxs)(ge,{children:[s[a-1].stats.map((function(e,t){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("p",{children:e.base_stat},t)})})),s[a-1].stats.map((function(e){return e.base_stat})).reduce((function(e,t){return e+t}))]})]})]})]})]}))},ke=function(){return Object(v.jsx)(b.a,{children:Object(v.jsx)(w,{children:Object(v.jsxs)(x.c,{children:[Object(v.jsx)(x.a,{path:"/",element:Object(v.jsx)(I,{})}),Object(v.jsx)(x.a,{path:"/:id/:slug",element:Object(v.jsx)(ve,{})})]})})})};u.a.render(Object(v.jsx)(p.a.StrictMode,{children:Object(v.jsx)(ke,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.176084b4.chunk.js.map