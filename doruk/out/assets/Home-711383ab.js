import{r as n,c as K,g,a as I,b as Q,R as z,d as q,e as c,j as e,B as Y,C as x,_ as Z,u as ee,G as h,I as re,S as D,T as d,A as v,D as ae,f as te,h as j,i as oe}from"./index-19849965.js";import{S as A,L as i}from"./commons-cb5e3629.js";import{S as se}from"./story-62884d58.js";import{T as y}from"./Title-8951a8e8.js";import{L as ne,U as ie,B as C}from"./Button-c74f3a5a.js";import{B as u}from"./Badge-47d92ce0.js";import{I as ce,a as le,b as de}from"./IconBrandTwitter-758a79d2.js";import"./ThemeIcon-8d6be81b.js";var he=Object.defineProperty,ge=Object.defineProperties,me=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,P=(r,a,t)=>a in r?he(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,b=(r,a)=>{for(var t in a||(a={}))ue.call(a,t)&&P(r,t,a[t]);if(M)for(var t of M(a))pe.call(a,t)&&P(r,t,a[t]);return r},B=(r,a)=>ge(r,me(a));const xe=["subtle","filled","outline","light","default","transparent","gradient"],m={xs:n(18),sm:n(22),md:n(28),lg:n(34),xl:n(44)};function fe({variant:r,theme:a,color:t,gradient:o}){const s=a.fn.variant({color:t,variant:r,gradient:o});return r==="gradient"?{border:0,backgroundImage:s.background,color:s.color,"&:hover":a.fn.hover({backgroundSize:"200%"})}:xe.includes(r)?b({border:`${n(1)} solid ${s.border}`,backgroundColor:s.background,color:s.color},a.fn.hover({backgroundColor:s.hover})):null}var ve=K((r,{radius:a,color:t,gradient:o},{variant:s,size:l})=>({root:B(b({position:"relative",borderRadius:r.fn.radius(a),padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",height:g({size:l,sizes:m}),minHeight:g({size:l,sizes:m}),width:g({size:l,sizes:m}),minWidth:g({size:l,sizes:m})},fe({variant:s,theme:r,color:t,gradient:o})),{"&:active":r.activeStyles,"& [data-action-icon-loader]":{maxWidth:"70%"},"&:disabled, &[data-disabled]":{color:r.colors.gray[r.colorScheme==="dark"?6:4],cursor:"not-allowed",backgroundColor:s==="transparent"?void 0:r.fn.themeColor("gray",r.colorScheme==="dark"?8:1),borderColor:s==="transparent"?void 0:r.fn.themeColor("gray",r.colorScheme==="dark"?8:1),backgroundImage:"none",pointerEvents:"none","&:active":{transform:"none"}},"&[data-loading]":{pointerEvents:"none","&::before":B(b({content:'""'},r.fn.cover(n(-1))),{backgroundColor:r.colorScheme==="dark"?r.fn.rgba(r.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:r.fn.radius(a),cursor:"not-allowed"})}})}));const je=ve;var ye=Object.defineProperty,p=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,O=(r,a,t)=>a in r?ye(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,E=(r,a)=>{for(var t in a||(a={}))T.call(a,t)&&O(r,t,a[t]);if(p)for(var t of p(a))F.call(a,t)&&O(r,t,a[t]);return r},be=(r,a)=>{var t={};for(var o in r)T.call(r,o)&&a.indexOf(o)<0&&(t[o]=r[o]);if(r!=null&&p)for(var o of p(r))a.indexOf(o)<0&&F.call(r,o)&&(t[o]=r[o]);return t};const Ie={color:"gray",size:"md",variant:"subtle"},N=I.forwardRef((r,a)=>{const t=Q("ActionIcon",Ie,r),{className:o,color:s,children:l,radius:L,size:R,variant:k,gradient:H,disabled:w,loaderProps:$,loading:_,unstyled:S,__staticSelector:G}=t,U=be(t,["className","color","children","radius","size","variant","gradient","disabled","loaderProps","loading","unstyled","__staticSelector"]),{classes:V,cx:W,theme:X}=je({radius:L,color:s,gradient:H},{name:["ActionIcon",G],unstyled:S,size:R,variant:k}),J=z.createElement(ne,E({color:X.fn.variant({color:s,variant:k}).color,size:"100%","data-action-icon-loader":!0},$));return z.createElement(ie,E({className:W(V.root,o),ref:a,disabled:w,"data-disabled":w||void 0,"data-loading":_||void 0,unstyled:S},U),_?J:l)});N.displayName="@mantine/core/ActionIcon";const ke=q(N);var we=c("brand-instagram","IconBrandInstagram",[["path",{d:"M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z",key:"svg-0"}],["path",{d:"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-1"}],["path",{d:"M16.5 7.5l0 .01",key:"svg-2"}]]),_e=c("brand-telegram","IconBrandTelegram",[["path",{d:"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4",key:"svg-0"}]]),Se=c("briefcase","IconBriefcase",[["path",{d:"M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2",key:"svg-1"}],["path",{d:"M12 12l0 .01",key:"svg-2"}],["path",{d:"M3 13a20 20 0 0 0 18 0",key:"svg-3"}]]),ze=c("code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]]),Ce=c("globe","IconGlobe",[["path",{d:"M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M5.75 15a8.015 8.015 0 1 0 9.25 -13",key:"svg-1"}],["path",{d:"M11 17v4",key:"svg-2"}],["path",{d:"M7 21h8",key:"svg-3"}]]),Me=c("mail","IconMail",[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]]),Pe=c("school","IconSchool",[["path",{d:"M22 9l-10 -4l-10 4l10 4l10 -4v6",key:"svg-0"}],["path",{d:"M6 10.6v5.4a6 3 0 0 0 12 0v-5.4",key:"svg-1"}]]);const Be=e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"18",r:"18",fill:"#88C9F9"}),e.jsx("path",{fill:"#5C913B",d:"M30.13 23.748c-1.017-.39-.836-.248-1.463-1.581c-.627-1.332-1.007-1.761-2.417-1.917c-1.411-.155-1.358-.045-1.75-.75c-.392-.706-1.982.191-3 .584c-1.021.392-.769 1.246-1.083 1.166a4.831 4.831 0 0 1-1.893-.907c-.784-.628.583-1.118.976-1.509c.393-.393-.74-.179-1.133-.416c-.393-.234-1.096.471-1.723-.158c-.628-.627-.235-1.568-.313-2.352c-.079-.785 1.018-.941 1.724-1.098c.705-.156 1.253.001 1.253.941c0 .941.863 1.255.628.156s.235-1.411.55-1.96c.313-.549.862-1.334 1.567-2.51c.706-1.176 1.177-.628 2.039-.544c.863.085 1.098-.083 1.725-.004c.625.079 0-.784.236-1.646c.234-.862 1.097-.706 1.961-.47c.862.235-.864-1.099-1.177-1.804c-.315-.706-1.177 0-1.724-1.176c-.553-1.176-1.324-1.937-2.03-2.042c-.706-.106.225 1.494-.324 2.356c-.551.862-1.395.727-2.26.727c-.861 0-1.661-.727-1.033-1.825c.626-1.097 1.823-.984 2.45-1.925c.628-.94-2.23-.854-3.25-1.167c-1.02-.314-2.244-.311-3.263.473c-1.02.783-3.201 1.028-4.064 1.341c-.862.313-1.017-.52-1.173-1.148c-.07-.279-.388-.367-.836-.357a18.08 18.08 0 0 0-5.666 4.921c.237.807 1.385-.189 1.61-.414c.235-.235 1.411.079 1.567.941c.157.862.079 1.805-.234 2.589c-.314.783.784 1.881 1.411 2.979c.628 1.099 1.333 1.098 1.647 1.098c.313 0 2.117.706 2.038 1.568c-.078.863 1.647 1.646 2.353 2.195c.706.551 1.152 1.092 2.068 1.25c.917.158 1.989 1.657 2.459 1.815c.361.12.972.697 1.341.876c-.485.614-1.424 1.875-1.424 2.456c0 .786 1.025 2.021 1.417 2.334c.391.312 1.517.55 1.75 1.333c.236.784-.164 3.423-.868 4.128c-.708.705-.965 2.372-.965 2.372s.249.541 1.083 0C21.839 34.07 23.383 32.37 24 32a20.768 20.768 0 0 0 3.417-2.583c1.098-1.019.7-1.733 1.25-2.75c.549-1.019 1.259-.973 2.199-1.833c.942-.864.284-.693-.736-1.086z"})]}),Oe=e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",children:[e.jsx("path",{fill:"#FFCC4D",d:"M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18"}),e.jsx("circle",{cx:"7",cy:"18",r:"5",fill:"#FF7892"}),e.jsx("circle",{cx:"29",cy:"18",r:"5",fill:"#FF7892"}),e.jsx("path",{fill:"#664500",d:"M27.335 21.629a.501.501 0 0 0-.635-.029c-.039.029-3.922 2.9-8.7 2.9c-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 0 0-.729.657C8.7 22.472 11.788 27.5 18 27.5s9.301-5.028 9.429-5.243a.499.499 0 0 0-.094-.628zM7.999 15a1 1 0 0 1-.893-1.448C7.158 13.448 8.424 11 12 11c3.577 0 4.842 2.449 4.894 2.553a1 1 0 0 1-1.783.906C15.068 14.379 14.281 13 12 13c-2.317 0-3.099 1.433-3.106 1.447a.998.998 0 0 1-.895.553zm20.002 0a1 1 0 0 1-.896-.553C27.08 14.401 26.299 13 24 13s-3.08 1.401-3.112 1.46c-.26.481-.859.67-1.345.42a.994.994 0 0 1-.438-1.328C19.157 13.449 20.423 11 24 11s4.843 2.449 4.895 2.553A1 1 0 0 1 28.001 15z"})]}),Ee=e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",children:[e.jsx("path",{fill:"#DD2E44",d:"M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868c-3.308 0-6.227 1.633-8.018 4.129c-1.791-2.496-4.71-4.129-8.017-4.129c-5.45 0-9.868 4.417-9.868 9.868c0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959c.17-.721.268-1.469.268-2.242z"}),e.jsx("path",{fill:"#FDCB58",d:"m34.347 23.894l-3.824-1.416l-1.416-3.824a1 1 0 0 0-1.876-.001l-1.416 3.824l-3.824 1.416a1.001 1.001 0 0 0 0 1.876l3.824 1.416l1.416 3.824a1 1 0 0 0 1.876 0l1.416-3.824l3.824-1.416a1.001 1.001 0 0 0 0-1.875zm-23-16.001l-2.365-.875l-.875-2.365a1 1 0 0 0-1.876 0l-.876 2.365l-2.364.875a1 1 0 0 0 0 1.876l2.365.875l.875 2.365a1 1 0 0 0 1.876 0l.875-2.365l2.365-.875a1 1 0 0 0 0-1.876z"})]}),f=({size:r="auto",emoji:a})=>e.jsx(Y,{w:r,h:r,children:a}),De=I.lazy(()=>Z(()=>import("./Highlights-70143d3b.js"),["assets/Highlights-70143d3b.js","assets/index-19849965.js","assets/Paper-94c65d35.js","assets/ThemeIcon-8d6be81b.js","assets/IconBrandTwitter-758a79d2.js","assets/Button-c74f3a5a.js","assets/commons-cb5e3629.js","assets/Title-8951a8e8.js"]));function Qe(){return e.jsxs(x,{children:[e.jsx(Ae,{}),e.jsx(Fe,{}),e.jsx(Te,{}),e.jsx(Re,{}),e.jsx(De,{}),e.jsx(Le,{})]})}const Ae=()=>{const r=ee();return e.jsx(A,{size:1,content:[e.jsx(h,{p:10,spacing:10,position:"right",children:e.jsx(re,{src:"/images/doruk-student.png",maw:320,mah:320,radius:8})}),e.jsxs(D,{spacing:0,maw:500,mx:"auto",children:[e.jsx(y,{order:1,weight:800,size:36,sx:{letterSpacing:-1},children:"Hello, world!"}),e.jsx(y,{order:2,weight:600,size:20,color:"dimmed",children:"Welcome to my personal website."}),e.jsxs(d,{mt:12,size:"md",children:["I'm Doruk Eray, a ",e.jsx("b",{children:"Founder"}),", ",e.jsx("b",{children:"Polymath"})," and"," ",e.jsx("b",{children:"Craftsman"})," from ",e.jsx("b",{children:"Istanbul"}),". My focus is on software, music and business."]}),e.jsxs(i,{icon:e.jsx(d,{weight:500,size:18,children:"∗"}),center:!0,spacing:5,mt:10,children:[e.jsx(i.Item,{children:e.jsxs(d,{children:["I design products and build software @ ",e.jsx(v,{href:"https://dorkodu.com",color:"blue",weight:600,td:"underline",children:"Dorkodu"}),"."]})}),e.jsxs(i.Item,{children:["I sing, write songs and play guitar @ ",e.jsx(v,{href:"https://instagram.com/theterraspark",color:"blue",weight:600,td:"underline",children:"Terraspark"}),"."]})]}),e.jsx(He,{}),e.jsxs(h,{my:5,children:[e.jsx(C,{onClick:()=>r("/portfolio"),size:"md",radius:"lg",children:"See My Portfolio"}),e.jsx(C,{onClick:()=>r("/story"),size:"md",radius:"lg",variant:"light",children:"My Story"})]})]})]})},Te=()=>{const r=[{icon:e.jsx(Se,{size:32}),title:e.jsxs(e.Fragment,{children:["I'm the Founder & Chief @"," ",e.jsx(v,{href:"https://dorkodu.com",color:"blue",td:"underline",children:"Dorkodu"})]}),text:"I lead our team, design products and build software.",subtext:"We are a humane technology company to create social & gamified products and open source technology to liberate the humankind."},{icon:e.jsx(ze,{size:32}),title:"I have 8+ years of experience in software.",text:e.jsxs(e.Fragment,{children:["Web Platform · Product · Front-end · UI/UX",e.jsx(h,{spacing:4,mt:10,children:["TypeScript","JavaScript","React","Node.js","Vite","Linux","Postgres","MySQL","Nginx","Docker","PHP","HTML","CSS"].map(a=>e.jsx(u,{variant:"dot",color:"gray",size:"md",children:a},a))})]})},{icon:e.jsx(Pe,{size:32}),title:"I am a student @ Bogazici University",text:"I am a freshman, and I want to study Cognitive Science.",subtext:`
        I graduated from Vefa Lisesi, a historical and well-established high school in Istanbul 
        ∗ Computer Science, Industrial Design, Philosophy and Business.
      `},{icon:e.jsx(Ce,{size:32}),title:"I want to help the future of human civilization.",text:"By contributing to critical areas like and Informatics-related fields.",subtext:"Agriculture · Water · Green Energy · AI · Space · Education · Genetics"},{icon:"",title:"",text:"",subtext:""},{icon:"",title:"",text:"",subtext:""}];return e.jsxs(x,{size:600,my:50,children:[e.jsx(y,{order:2,children:"In a nutshell"}),e.jsx(ae,{mb:25}),e.jsx(D,{spacing:25,mt:10,children:r.map(a=>I.createElement(se,{...a,key:te()}))})]})},Fe=()=>e.jsx(A,{content:[e.jsx(Ne,{}),e.jsxs(j,{children:[e.jsx(u,{variant:"dot",size:"lg",mb:16,children:"My Interests"}),e.jsx(h,{maw:450,mx:"auto",spacing:8,children:[["Software","blue"],["Music","cyan"],["Industrial Design","red"],["Artificial Intelligence","indigo"],["Theory of Knowledge","violet"],["Psychology","grape"],["UI/UX Design","orange"],["Cryptoeconomics","yellow"],["Gamification","lime"],["Decentralized Web","green"],["Semantics","teal"]].map(r=>e.jsx(u,{variant:"light",color:r[1],radius:6,size:"lg",children:r[0]},r[0]))})]})]}),Ne=()=>{const r=oe();return e.jsxs(j,{py:20,pl:12,children:[e.jsxs(j,{mb:10,children:[e.jsx(u,{variant:"dot",size:"lg",my:8,children:"My Life Mission"}),e.jsx(d,{size:24,weight:800,color:r.colorScheme=="dark"?r.white:r.black,children:"Liberate the Humankind;"}),e.jsx(d,{size:20,weight:500,color:"dimmed",children:"with meaningful art & technology."})]}),e.jsxs(i,{spacing:5,center:!0,children:[e.jsx(i.Item,{icon:e.jsx(f,{size:24,emoji:Ee}),children:"Help people find and pursue their life purpose."}),e.jsx(i.Item,{icon:e.jsx(f,{size:24,emoji:Oe}),children:"Create a meaningful life experience for everyone."}),e.jsx(i.Item,{icon:e.jsx(f,{size:24,emoji:Be}),children:"Build the utopian dream of heaven on earth."})]})]})},Le=()=>e.jsx(x,{px:0}),Re=()=>e.jsx(x,{px:0}),He=()=>{const r=[{link:"https://twitter.com/d0rukeray",icon:e.jsx(ce,{size:30})},{link:"https://instagram.com/d0rukeray",icon:e.jsx(we,{size:32})},{link:"https://github.com/dorukeray",icon:e.jsx(le,{size:30})},{link:"https://linkedin.com/in/dorukeray",icon:e.jsx(de,{size:32})},{link:"https://t.me/dorukeray",icon:e.jsx(_e,{size:32})},{link:"mailto:doruk@dorkodu.com",icon:e.jsx(Me,{size:30})}];return e.jsx(h,{spacing:8,my:10,children:r.map(a=>e.jsx("a",{href:a.link,target:"_blank",children:e.jsx(ke,{variant:"default",radius:12,size:40,children:a.icon})},a.link))})};export{Ne as MissionStatement,Qe as default};
