import{l as P,R as t,p as k,c as R,d as L,U,e as z,h as D,i as N,r as F,f as M,B as V}from"./index-Dm71b327.js";import{u as Z}from"./use-id-kRwvWiLL.js";const x=P.forwardRef(({size:s="var(--cb-icon-size, 70%)",style:o,...e},a)=>t.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...o,width:s,height:s},ref:a,...e},t.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})));x.displayName="@mantine/core/CloseIcon";var j={root:"m_86a44da5","root--subtle":"m_220c80f2"};const I=j,q={variant:"subtle"},G=z((s,{size:o,radius:e,iconSize:a})=>({root:{"--cb-size":D(o,"cb-size"),"--cb-radius":e===void 0?void 0:N(e),"--cb-icon-size":F(a)}})),_=k((s,o)=>{const e=R("CloseButton",q,s),{iconSize:a,children:c,vars:r,radius:E,className:m,classNames:p,style:g,styles:h,unstyled:n,"data-disabled":v,disabled:u,variant:i,icon:b,mod:y,...C}=e,d=L({name:"CloseButton",props:e,className:m,style:g,classes:I,classNames:p,styles:h,unstyled:n,vars:r,varsResolver:G});return t.createElement(U,{ref:o,...C,unstyled:n,variant:i,disabled:u,mod:[{disabled:u||v},y],...d("root",{variant:i,active:!0})},b||t.createElement(x,null),c)});_.classes=I;_.displayName="@mantine/core/CloseButton";var H={root:"m_66836ed3",wrapper:"m_a5d60502",body:"m_667c2793",title:"m_6a03f287",label:"m_698f4f23",icon:"m_667f2a6a",message:"m_7fa78076",closeButton:"m_87f54839"};const S=H,J={},K=z((s,{radius:o,color:e,variant:a,autoContrast:c})=>{const r=s.variantColorResolver({color:e||s.primaryColor,theme:s,variant:a||"light",autoContrast:c});return{root:{"--alert-radius":o===void 0?void 0:N(o),"--alert-bg":e||a?r.background:void 0,"--alert-color":r.color,"--alert-bd":e||a?r.border:void 0}}}),$=M((s,o)=>{const e=R("Alert",J,s),{classNames:a,className:c,style:r,styles:E,unstyled:m,vars:p,radius:g,color:h,title:n,children:v,id:u,icon:i,withCloseButton:b,onClose:y,closeButtonLabel:C,variant:d,autoContrast:O,...A}=e,l=L({name:"Alert",classes:S,props:e,className:c,style:r,classNames:a,styles:E,unstyled:m,vars:p,varsResolver:K}),f=Z(u),B=n&&`${f}-title`||void 0,w=`${f}-body`;return t.createElement(V,{id:f,...l("root",{variant:d}),variant:d,ref:o,...A,role:"alert","aria-describedby":w,"aria-labelledby":B},t.createElement("div",{...l("wrapper")},i&&t.createElement("div",{...l("icon")},i),t.createElement("div",{...l("body")},n&&t.createElement("div",{...l("title"),"data-with-close-button":b||void 0},t.createElement("span",{id:B,...l("label")},n)),v&&t.createElement("div",{id:w,...l("message"),"data-variant":d},v)),b&&t.createElement(_,{...l("closeButton"),onClick:y,variant:"transparent",size:16,iconSize:16,"aria-label":C,unstyled:m})))});$.classes=S;$.displayName="@mantine/core/Alert";export{$ as A};
