import{r as o,b2 as Q,b as N,a3 as X,b3 as Y,ai as H,a4 as Z,j as _,a6 as ee,_ as w,a as te,g as se,s as j,H as ne,aR as oe,b4 as re,u as ae,i as le,ag as A,c as ie,d as ue}from"./index-1f4d2e49.js";let U=0;function ce(e){const[t,s]=o.useState(e),f=e||t;return o.useEffect(()=>{t==null&&(U+=1,s(`mui-${U}`))},[t]),f}const z=Q["useId".toString()];function Re(e){if(z!==void 0){const t=z();return e??t}return ce(e)}function Fe({controlled:e,default:t,name:s,state:f="value"}){const{current:r}=o.useRef(e!==void 0),[g,p]=o.useState(t),i=r?e:g,d=o.useCallback(b=>{r||p(b)},[]);return[i,d]}function De({props:e,states:t,muiFormControl:s}){return t.reduce((f,r)=>(f[r]=e[r],s&&typeof e[r]>"u"&&(f[r]=s[r]),f),{})}const fe=o.createContext(void 0),pe=fe;function Ee(){return o.useContext(pe)}const de=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function K(e,t,s){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:s?null:e.firstChild}function O(e,t,s){return e===t?s?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:s?null:e.lastChild}function V(e,t){if(t===void 0)return!0;let s=e.innerText;return s===void 0&&(s=e.textContent),s=s.trim().toLowerCase(),s.length===0?!1:t.repeating?s[0]===t.keys[0]:s.indexOf(t.keys.join(""))===0}function S(e,t,s,f,r,g){let p=!1,i=r(e,t,t?s:!1);for(;i;){if(i===e.firstChild){if(p)return!1;p=!0}const d=f?!1:i.disabled||i.getAttribute("aria-disabled")==="true";if(!i.hasAttribute("tabindex")||!V(i,g)||d)i=r(e,i,s);else return i.focus(),!0}return!1}const me=o.forwardRef(function(t,s){const{actions:f,autoFocus:r=!1,autoFocusItem:g=!1,children:p,className:i,disabledItemsFocusable:d=!1,disableListWrap:b=!1,onKeyDown:P,variant:C="selectedMenu"}=t,R=N(t,de),m=o.useRef(null),L=o.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});X(()=>{r&&m.current.focus()},[r]),o.useImperativeHandle(f,()=>({adjustStyleForScrollbar:(n,a)=>{const c=!m.current.style.width;if(n.clientHeight<m.current.clientHeight&&c){const h=`${Y(H(n))}px`;m.current.style[a.direction==="rtl"?"paddingLeft":"paddingRight"]=h,m.current.style.width=`calc(100% + ${h})`}return m.current}}),[]);const F=n=>{const a=m.current,c=n.key,h=H(a).activeElement;if(c==="ArrowDown")n.preventDefault(),S(a,h,b,d,K);else if(c==="ArrowUp")n.preventDefault(),S(a,h,b,d,O);else if(c==="Home")n.preventDefault(),S(a,null,b,d,K);else if(c==="End")n.preventDefault(),S(a,null,b,d,O);else if(c.length===1){const l=L.current,M=c.toLowerCase(),x=performance.now();l.keys.length>0&&(x-l.lastTime>500?(l.keys=[],l.repeating=!0,l.previousKeyMatched=!0):l.repeating&&M!==l.keys[0]&&(l.repeating=!1)),l.lastTime=x,l.keys.push(M);const T=h&&!l.repeating&&V(h,l);l.previousKeyMatched&&(T||S(a,h,!1,d,K,l))?n.preventDefault():l.previousKeyMatched=!1}P&&P(n)},I=Z(m,s);let u=-1;o.Children.forEach(p,(n,a)=>{if(!o.isValidElement(n)){u===a&&(u+=1,u>=p.length&&(u=-1));return}n.props.disabled||(C==="selectedMenu"&&n.props.selected||u===-1)&&(u=a),u===a&&(n.props.disabled||n.props.muiSkipListHighlight||n.type.muiSkipListHighlight)&&(u+=1,u>=p.length&&(u=-1))});const v=o.Children.map(p,(n,a)=>{if(a===u){const c={};return g&&(c.autoFocus=!0),n.props.tabIndex===void 0&&C==="selectedMenu"&&(c.tabIndex=0),o.cloneElement(n,c)}return n});return _.jsx(ee,w({role:"menu",ref:I,className:i,onKeyDown:F,tabIndex:r?0:-1},R,{children:v}))}),he=me;function ge(e){return te("MuiMenu",e)}se("MuiMenu",["root","paper","list"]);const be=["onEntering"],ye=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Me={vertical:"top",horizontal:"right"},Pe={vertical:"top",horizontal:"left"},Ce=e=>{const{classes:t}=e;return ue({root:["root"],paper:["paper"],list:["list"]},ge,t)},xe=j(ne,{shouldForwardProp:e=>oe(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Ie=j(re,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),ve=j(he,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),Se=o.forwardRef(function(t,s){var f,r;const g=ae({props:t,name:"MuiMenu"}),{autoFocus:p=!0,children:i,className:d,disableAutoFocusItem:b=!1,MenuListProps:P={},onClose:C,open:R,PaperProps:m={},PopoverClasses:L,transitionDuration:F="auto",TransitionProps:{onEntering:I}={},variant:u="selectedMenu",slots:v={},slotProps:n={}}=g,a=N(g.TransitionProps,be),c=N(g,ye),h=le(),l=h.direction==="rtl",M=w({},g,{autoFocus:p,disableAutoFocusItem:b,MenuListProps:P,onEntering:I,PaperProps:m,transitionDuration:F,TransitionProps:a,variant:u}),x=Ce(M),T=p&&!b&&R,k=o.useRef(null),G=(y,E)=>{k.current&&k.current.adjustStyleForScrollbar(y,h),I&&I(y,E)},W=y=>{y.key==="Tab"&&(y.preventDefault(),C&&C(y,"tabKeyDown"))};let D=-1;o.Children.map(i,(y,E)=>{o.isValidElement(y)&&(y.props.disabled||(u==="selectedMenu"&&y.props.selected||D===-1)&&(D=E))});const $=(f=v.paper)!=null?f:Ie,q=(r=n.paper)!=null?r:m,B=A({elementType:v.root,externalSlotProps:n.root,ownerState:M,className:[x.root,d]}),J=A({elementType:$,externalSlotProps:q,ownerState:M,className:x.paper});return _.jsx(xe,w({onClose:C,anchorOrigin:{vertical:"bottom",horizontal:l?"right":"left"},transformOrigin:l?Me:Pe,slots:{paper:$,root:v.root},slotProps:{root:B,paper:J},open:R,ref:s,transitionDuration:F,TransitionProps:w({onEntering:G},a),ownerState:M},c,{classes:L,children:_.jsx(ve,w({onKeyDown:W,actions:k,autoFocus:p&&(D===-1||b),autoFocusItem:T,variant:u},P,{className:ie(x.list,P.className),children:i}))}))}),Le=Se;export{pe as F,Le as M,he as a,Fe as b,Ee as c,De as f,Re as u};
