import{g as X,a as ee,s as z,_ as l,r as p,u as te,b as E,a1 as F,j as t,c as P,d as se,f as O,a2 as ge,a3 as be,a4 as ye,a5 as oe,Q as ve,a6 as je,T as i,a7 as L,P as f,m as W,l as Ie,Z as Le,a8 as de,a9 as Ne,aa as Ce,ab as we,B as ce,S,ac as Ae,ad as Re,W as De}from"./index-1f4d2e49.js";import"./account-view-c3e42fcc.js";import{A as J}from"./app-widget-summary-965d9d3e.js";import{h as V}from"./moment-fbc5633a.js";import{i as Se}from"./isMuiElement-3a78cbf0.js";import{L as b,D as le}from"./DataGrid-fc172a88.js";import{B as Z}from"./Button-80efb2a2.js";import{C as Fe}from"./Container-1f2010f6.js";import{T as Pe,a as _e,b as Q,c as q}from"./TabPanel-c39c59fa.js";import{G as N}from"./Grid-3536c732.js";import{C as ke}from"./Card-4a9a836c.js";import"./formik.esm-c373c11d.js";import"./Menu-0fad4b14.js";import"./CircularProgress-ae7ed2bc.js";import"./identity-19539058.js";import"./TextField-36f35a29.js";import"./Select-5c7c0324.js";import"./InputAdornment-b6fbb70b.js";import"./format-number-219b9419.js";import"./Autocomplete-095245dc.js";import"./Popper-db2d984a.js";import"./usePreviousProps-f4342d7e.js";import"./FormControlLabel-e4be0e44.js";import"./Tooltip-5e61c1a6.js";import"./TablePagination-8c547f3e.js";function $e(e){return ee("MuiListItem",e)}const Me=X("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),C=Me;function Te(e){return ee("MuiListItemSecondaryAction",e)}X("MuiListItemSecondaryAction",["root","disableGutters"]);const Ue=["className"],Ge=e=>{const{disableGutters:s,classes:r}=e;return se({root:["root",s&&"disableGutters"]},Te,r)},Be=z("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.root,r.disableGutters&&s.disableGutters]}})(({ownerState:e})=>l({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),pe=p.forwardRef(function(s,r){const n=te({props:s,name:"MuiListItemSecondaryAction"}),{className:o}=n,d=E(n,Ue),a=p.useContext(F),c=l({},n,{disableGutters:a.disableGutters}),m=Ge(c);return t.jsx(Be,l({className:P(m.root,o),ownerState:c,ref:r},d))});pe.muiName="ListItemSecondaryAction";const Oe=pe,We=["className"],Ee=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Ve=(e,s)=>{const{ownerState:r}=e;return[s.root,r.dense&&s.dense,r.alignItems==="flex-start"&&s.alignItemsFlexStart,r.divider&&s.divider,!r.disableGutters&&s.gutters,!r.disablePadding&&s.padding,r.button&&s.button,r.hasSecondaryAction&&s.secondaryAction]},ze=e=>{const{alignItems:s,button:r,classes:n,dense:o,disabled:d,disableGutters:a,disablePadding:c,divider:m,hasSecondaryAction:x,selected:w}=e;return se({root:["root",o&&"dense",!a&&"gutters",!c&&"padding",m&&"divider",d&&"disabled",r&&"button",s==="flex-start"&&"alignItemsFlexStart",x&&"secondaryAction",w&&"selected"],container:["container"]},$e,n)},He=z("div",{name:"MuiListItem",slot:"Root",overridesResolver:Ve})(({theme:e,ownerState:s})=>l({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!s.disablePadding&&l({paddingTop:8,paddingBottom:8},s.dense&&{paddingTop:4,paddingBottom:4},!s.disableGutters&&{paddingLeft:16,paddingRight:16},!!s.secondaryAction&&{paddingRight:48}),!!s.secondaryAction&&{[`& > .${ge.root}`]:{paddingRight:48}},{[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${C.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:O(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:O(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${C.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},s.alignItems==="flex-start"&&{alignItems:"flex-start"},s.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},s.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:O(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:O(e.palette.primary.main,e.palette.action.selectedOpacity)}}},s.hasSecondaryAction&&{paddingRight:48})),Ke=z("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,s)=>s.container})({position:"relative"}),Ye=p.forwardRef(function(s,r){const n=te({props:s,name:"MuiListItem"}),{alignItems:o="center",autoFocus:d=!1,button:a=!1,children:c,className:m,component:x,components:w={},componentsProps:_={},ContainerComponent:k="li",ContainerProps:{className:$}={},dense:A=!1,disabled:R=!1,disableGutters:j=!1,disablePadding:M=!1,divider:T=!1,focusVisibleClassName:U,secondaryAction:u,selected:H=!1,slotProps:ue={},slots:xe={}}=n,fe=E(n.ContainerProps,We),he=E(n,Ee),ae=p.useContext(F),K=p.useMemo(()=>({dense:A||ae.dense||!1,alignItems:o,disableGutters:j}),[o,ae.dense,A,j]),Y=p.useRef(null);be(()=>{d&&Y.current&&Y.current.focus()},[d]);const I=p.Children.toArray(c),re=I.length&&Se(I[I.length-1],["ListItemSecondaryAction"]),G=l({},n,{alignItems:o,autoFocus:d,button:a,dense:K.dense,disabled:R,disableGutters:j,disablePadding:M,divider:T,hasSecondaryAction:re,selected:H}),ne=ze(G),ie=ye(Y,r),B=xe.root||w.Root||He,D=ue.root||_.root||{},h=l({className:P(ne.root,D.className,m),disabled:R},he);let g=x||"li";return a&&(h.component=x||"div",h.focusVisibleClassName=P(C.focusVisible,U),g=ve),re?(g=!h.component&&!x?"div":g,k==="li"&&(g==="li"?g="div":h.component==="li"&&(h.component="div")),t.jsx(F.Provider,{value:K,children:t.jsxs(Ke,l({as:k,className:P(ne.container,$),ref:ie,ownerState:G},fe,{children:[t.jsx(B,l({},D,!oe(B)&&{as:g,ownerState:l({},G,D.ownerState)},h,{children:I})),I.pop()]}))})):t.jsx(F.Provider,{value:K,children:t.jsxs(B,l({},D,{as:g,ref:ie},!oe(B)&&{ownerState:l({},G,D.ownerState)},h,{children:[I,u&&t.jsx(Oe,{children:u})]}))})}),y=Ye;function Je(e){return ee("MuiListItemAvatar",e)}X("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Qe=["className"],qe=e=>{const{alignItems:s,classes:r}=e;return se({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},Je,r)},Ze=z("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[s.root,r.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({ownerState:e})=>l({minWidth:56,flexShrink:0},e.alignItems==="flex-start"&&{marginTop:8})),Xe=p.forwardRef(function(s,r){const n=te({props:s,name:"MuiListItemAvatar"}),{className:o}=n,d=E(n,Qe),a=p.useContext(F),c=l({},n,{alignItems:a.alignItems}),m=qe(c);return t.jsx(Ze,l({className:P(m.root,o),ownerState:c,ref:r},d))}),v=Xe;function me({item:e}){return t.jsxs(je,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(v,{children:t.jsx(i,{children:"First Name :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e==null?void 0:e.first_name})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(v,{children:t.jsx(i,{children:"Last Name :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e==null?void 0:e.last_name})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(v,{children:t.jsx(i,{children:"Phone Number :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e==null?void 0:e.phone})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(v,{children:t.jsx(i,{children:"Email :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e==null?void 0:e.email})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(v,{children:t.jsx(i,{children:"Status :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:e!=null&&e.kyc_verification_status?"verified":"Unverified"})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(v,{children:t.jsx(i,{children:"Date Registered :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:V(e==null?void 0:e.createdAt).format("L")})})]}),t.jsx(L,{variant:"fullWidth",component:"li"}),t.jsxs(y,{alignItems:"center",gap:13,children:[t.jsx(v,{children:t.jsx(i,{children:"Date Verified :"})}),t.jsx(b,{secondary:t.jsx(i,{sx:{display:"inline",marginLeft:"2rem"},component:"span",variant:"body",color:"text.primary",children:V(e==null?void 0:e.verification_date).format("L")})})]})]})}me.propTypes={item:f.shape({createdAt:f.any,email:f.any,kyc_verification_status:f.any,phone:f.any,last_name:f.any,first_name:f.any,verification_date:f.any}).isRequired};const et=[{field:"id",headerName:"S/N",width:70},{field:"lastName",headerName:"Last Name",width:120},{field:"firstName",headerName:"First Name",width:120},{field:"email",headerName:"Email",width:190},{field:"lender_borrower",headerName:"Were you the lender or borrower",width:190},{field:"lender",headerName:"Lender Name",width:150},{field:"lenderId",headerName:"Lender ID",width:90},{field:"borrower",headerName:"Borrower Name",width:150},{field:"borrowerId",headerName:"Borrower ID",width:90},{field:"loanTakenDate",headerName:"Date Loan Was Taken",width:150},{field:"loanAmount",headerName:"Loan Amount",width:100},{field:"loanInterest",headerName:"Loan Interest",width:100},{field:"repaymentSchedule",headerName:"Repayment Schedule",width:150},{field:"wasLoanFullyRepaid",headerName:"Was Loan Fully Repaid",width:90}],tt=[{id:12,lastName:"James",firstName:"Jude",email:"hude@gmail.com",lender_borrower:"either",lender:"Doe",lenderId:"2345",borrower:"Not Doe",borrowerId:"5050",loanTakenDate:"12/23/2023",loanAmount:"39000",loanInterest:"9000",repaymentSchedule:"hgehsfb",wasLoanFullyRepaid:"hgehsfb"}];function st(){return t.jsx("div",{style:{minHeight:200,backgroundColor:"#FFFFFF",borderRadius:"20px",boxShadow:"0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)"},children:t.jsx(le,{rows:tt,columns:et,initialState:{pagination:{paginationModel:{page:0,pageSize:15}}},pageSizeOptions:[5,10,20]})})}const at=[{field:"id",headerName:"Credit ID",width:90,renderCell:e=>t.jsx("a",{href:`/loan/${e.row.id}`,children:e.value})},{field:"lender",headerName:"Lender",width:130},{field:"borrower",headerName:"Borrower",width:130},{field:"loanAmount",headerName:"Loan Amount",width:130},{field:"expectedReturn",headerName:"Expected Return",width:120},{field:"balance",headerName:"Balance",width:120},{field:"initiationDate",headerName:"Initiation Date",width:130},{field:"dueDate",headerName:"Due Date",width:130},{field:"status",headerName:"Status",width:90,renderCell:e=>t.jsx(Z,{variant:"contained",color:e.value==="active"&&"error"||"success",style:{padding:"0 0.6rem"},children:e.value})}];function rt(){var o,d;const e=W(a=>a.loan);console.log((o=e==null?void 0:e.userloansMetricsData)==null?void 0:o.loan_list);const s=((d=e==null?void 0:e.userloansMetricsData)==null?void 0:d.loan_list)||[];function r(a){return a/100}const n=s==null?void 0:s.map((a,c)=>{const m={id:(a==null?void 0:a.id)||0,lender:a==null?void 0:a.lender_first_name,borrower:a==null?void 0:a.borrower_first_name,loanAmount:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(r(a==null?void 0:a.amount)),expectedReturn:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(r(a==null?void 0:a.expected_return)),balance:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format((r(a==null?void 0:a.expected_return)??0)-(r(a==null?void 0:a.amount_paid)??0)),initiationDate:V(a==null?void 0:a.createdAt).format("L"),dueDate:V(a==null?void 0:a.due_date).format("L"),status:a!=null&&a.status?"completed":"active"};return m.index=c,m});return t.jsx("div",{style:{minHeight:200,width:"100%",backgroundColor:"#FFFFFF",borderRadius:"20px",boxShadow:"0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)"},children:t.jsx(le,{rows:n,columns:at,initialState:{pagination:{paginationModel:{page:0,pageSize:7}}},pageSizeOptions:[7,15]})})}function nt(){var A,R,j,M,T,U;const e=Ie(),s=W(u=>u.users),r=W(u=>u.loan),n=W(u=>u),o=(R=(A=n==null?void 0:n.auth.user)==null?void 0:A.data)==null?void 0:R.token,{id:d}=Le(),{isSuccess1:a,isError:c,unsuspendData:m,suspendData:x}=s;p.useEffect(()=>{a&&de.success("successfully suspended user!"),c&&de.error("Something Went Wrong!")},[a,c,x]),p.useEffect(()=>{const u={id:d,token:o};e(Ne()),e(Ce(u))},[e,o,d,m,x]),p.useEffect(()=>{e(we({id:d,token:o}))},[e,o,d]);const[w,_]=p.useState("1"),k=(u,H)=>{_(H)},$={id:d,token:o};return t.jsx(Fe,{children:t.jsx(ce,{sx:{width:"100%",typography:"body1"},children:t.jsxs(Pe,{value:w,children:[t.jsx(ce,{sx:{border:"1px solid",borderColor:"rgba(145, 158, 171, 0.2)",borderRadius:"5px",background:"#edeff1",margin:"2rem 2rem 0rem 2rem"},children:t.jsxs(_e,{sx:{".css-heg063-MuiTabs-flexContainer":{justifyContent:"center",gap:"1rem"}},onChange:k,"aria-label":"lab API tabs example",children:[t.jsx(Q,{label:"Profile",value:"1",sx:{fontSize:"20px"}}),t.jsx(Q,{label:"Loans",value:"2",sx:{fontSize:"20px"}}),t.jsx(Q,{label:"User Recorded Loans",value:"3",sx:{fontSize:"20px"}})]})}),t.jsx(q,{value:"1",children:t.jsxs(N,{sx:{padding:"0 1rem"},children:[t.jsxs(S,{direction:"row",alignItems:"start",mb:5,mt:3,gap:20,children:[t.jsx(me,{item:s==null?void 0:s.user}),t.jsxs(N,{children:[t.jsx(N,{sx:{marginBottom:"1.2rem"},xs:12,sm:6,md:4,children:t.jsx(J,{title:"Number Of Loans",total:((j=r==null?void 0:r.userloansMetricsData)==null?void 0:j.loans)||.001,color:"success"})}),t.jsx(N,{sx:{marginBottom:"1.2rem"},xs:12,sm:6,md:3,children:t.jsx(J,{title:"Number Of Loans Borrowed",total:((M=r==null?void 0:r.userloansMetricsData)==null?void 0:M.borrower)||.001,color:"success"})}),t.jsx(N,{xs:12,sm:6,md:3,children:t.jsx(J,{title:"Number Of Loans Lent",total:((T=r==null?void 0:r.userloansMetricsData)==null?void 0:T.lender)||.001,color:"success"})})]})]}),t.jsxs(N,{sx:{display:"flex",alignItems:"center",marginTop:"4rem"},children:[t.jsxs(S,{sx:{width:"60%"},children:[t.jsxs(S,{sx:{display:"flex",flexDirection:"row"},mt:1,ml:1,gap:1,children:[t.jsx(i,{children:"KYC Type :"}),t.jsx(i,{children:" NIN"})]}),t.jsxs(S,{style:{display:"flex",flexDirection:"row"},mt:1,ml:1,gap:1,mb:1,children:[t.jsx(i,{children:"KYC ID :"}),t.jsx(i,{children:"13235"})]}),t.jsxs(S,{sx:{display:"flex",flexDirection:"row"},ml:1,gap:1,children:[t.jsx(i,{children:"Link :"}),t.jsx(i,{children:"ywfgshshfbhgjsdthgrh"})]})]}),t.jsx(ke,{sx:{background:"#ffffff",padding:"3rem 2rem"},children:(U=s==null?void 0:s.user)!=null&&U.status?t.jsx(Z,{style:{marginLeft:"0.5rem"},variant:"contained",color:"success",onClick:()=>{e(Ae($))},children:s!=null&&s.isLoading1?"loading...":"Unsuspend User"}):t.jsx(Z,{style:{marginLeft:"0.5rem"},variant:"contained",color:"error",onClick:()=>{e(Re($))},children:s!=null&&s.isLoading1?"loading...":"Suspend User"})})]})]})}),t.jsx(q,{value:"2",children:t.jsx(rt,{})}),t.jsx(q,{value:"3",children:t.jsx(st,{})})]})})})}function Ft(){return t.jsxs(t.Fragment,{children:[t.jsx(De,{children:t.jsx("title",{children:"Reviel | User Details"})}),t.jsx(nt,{})]})}export{Ft as default};