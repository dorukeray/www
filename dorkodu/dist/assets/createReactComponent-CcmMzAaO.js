import{q as w,l as c}from"./index-Dm71b327.js";var u={exports:{}},R="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",E=R,k=E;function v(){}function h(){}h.resetWarningCache=v;var x=function(){function e(o,l,f,i,m,a){if(a!==k){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:h,resetWarningCache:v};return t.PropTypes=t,t};u.exports=x();var S=u.exports;const n=w(S);var j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},C=Object.defineProperty,N=Object.defineProperties,W=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,y=(e,r,t)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&y(e,t,r[t]);if(s)for(var t of s(r))O.call(r,t)&&y(e,t,r[t]);return e},I=(e,r)=>N(e,W(r)),D=(e,r)=>{var t={};for(var o in e)d.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&s)for(var o of s(e))r.indexOf(o)<0&&O.call(e,o)&&(t[o]=e[o]);return t},L=(e,r,t)=>{const o=c.forwardRef((l,f)=>{var i=l,{color:m="currentColor",size:a=24,stroke:p=2,children:g}=i,P=D(i,["color","size","stroke","children"]);return c.createElement("svg",_(I(_({ref:f},j),{width:a,height:a,stroke:m,strokeWidth:p,className:`tabler-icon tabler-icon-${e}`}),P),[...t.map(([T,b])=>c.createElement(T,b)),...g||[]])});return o.propTypes={color:n.string,size:n.oneOfType([n.string,n.number]),stroke:n.oneOfType([n.string,n.number])},o.displayName=`${r}`,o};export{L as c};
