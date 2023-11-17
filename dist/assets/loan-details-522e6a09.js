import{m as c,j as t,l as j,Z as y,r as h,$ as v,a0 as D,B as x,W as F}from"./index-1f4d2e49.js";import"./account-view-c3e42fcc.js";import{h as u}from"./moment-fbc5633a.js";import{B as b}from"./Button-80efb2a2.js";import{D as w}from"./DataGrid-fc172a88.js";import{C as A}from"./Container-1f2010f6.js";import{G as f}from"./Grid-3536c732.js";import{T as C,a as L,b as g,c as l}from"./TabPanel-c39c59fa.js";import"./formik.esm-c373c11d.js";import"./Menu-0fad4b14.js";import"./CircularProgress-ae7ed2bc.js";import"./identity-19539058.js";import"./TextField-36f35a29.js";import"./Select-5c7c0324.js";import"./isMuiElement-3a78cbf0.js";import"./InputAdornment-b6fbb70b.js";import"./Card-4a9a836c.js";import"./Autocomplete-095245dc.js";import"./Popper-db2d984a.js";import"./usePreviousProps-f4342d7e.js";import"./FormControlLabel-e4be0e44.js";import"./Tooltip-5e61c1a6.js";import"./TablePagination-8c547f3e.js";const S=[{field:"id",headerName:"Credit ID",width:90,renderCell:i=>t.jsx("a",{href:`/loan/${i.row.id}`,children:i.value})},{field:"lender",headerName:"Lender",width:130},{field:"borrower",headerName:"Borrower",width:130},{field:"loanAmount",headerName:"Loan Amount",width:130},{field:"expectedReturn",headerName:"Expected Return",width:130},{field:"balance",headerName:"Balance",width:130},{field:"initiationDate",headerName:"Initiation Date",width:120},{field:"dueDate",headerName:"Due Date",width:120},{field:"status",headerName:"Status",width:90,renderCell:i=>t.jsx(b,{variant:"contained",color:i.value==="active"&&"error"||"success",style:{padding:"0 0.6rem"},children:i.value})}];function G(){const i=c(e=>e.loan),a=[i==null?void 0:i.loan];function s(e){return e/100}const n=a==null?void 0:a.map((e,r)=>{const d={id:(e==null?void 0:e.id)||0,lender:e==null?void 0:e.lender_first_name,borrower:e==null?void 0:e.borrower_first_name,loanAmount:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(s(e==null?void 0:e.amount)),expectedReturn:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(s(e==null?void 0:e.expected_return)),balance:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format((s(e==null?void 0:e.expected_return)??0)-(s(e==null?void 0:e.amount_paid)??0)),initiationDate:u(e==null?void 0:e.createdAt).format("L"),dueDate:u(e==null?void 0:e.due_date).format("L"),status:e!=null&&e.status?"completed":"active"};return d.index=r,d});return t.jsxs("div",{style:{minHeight:200,backgroundColor:"#FFFFFF",borderRadius:"20px",boxShadow:"0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)"},children:[t.jsx("h2",{style:{padding:"2rem 0rem 1rem 1rem"},children:"Loan Details"}),t.jsx(w,{rows:n,columns:S,initialState:{pagination:{paginationModel:{page:0,pageSize:5}}},pageSizeOptions:[5,10]})]})}const T=[{field:"id",headerName:"Payment",width:70},{field:"amount",headerName:"Amount",width:130},{field:"date",headerName:"Date",width:130},{field:"status",headerName:"Status",width:120,renderCell:i=>t.jsx(b,{variant:"text",color:i.value==="contested"&&"error"||i.value==="rejected"&&"error"||i.value==="awaiting_approval"&&"warning"||"success",style:{padding:"0 1rem"},children:i.value})},{field:"message",headerName:"Message",width:190}];function B(){var e;const i=c(r=>r.loan),a=((e=i==null?void 0:i.loan)==null?void 0:e.payment)||[];console.log(a);function s(r){return r/100}const n=a==null?void 0:a.map((r,d)=>{const m={id:d+1,amount:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(s(r==null?void 0:r.amount)),date:u(r==null?void 0:r.createdAt).format("L"),status:r==null?void 0:r.status,message:r!=null&&r.message?r==null?void 0:r.message:""};return m.index=d,m});return t.jsx("div",{style:{minHeight:200,width:"60%",backgroundColor:"#FFFFFF",borderRadius:"20px",boxShadow:"0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)"},children:t.jsx(w,{rows:n,columns:T,initialState:{pagination:{paginationModel:{page:0,pageSize:7}}},pageSizeOptions:[7,15]})})}function _(){var m,p;const i=j(),{id:a}=y();c(o=>o.loan);const s=c(o=>o),n=(p=(m=s==null?void 0:s.auth.user)==null?void 0:m.data)==null?void 0:p.token;h.useEffect(()=>{const o={token:n,id:a};i(v()),i(D(o))},[i,n,a]);const[e,r]=h.useState("1"),d=(o,N)=>{r(N)};return t.jsxs(A,{children:[t.jsx(f,{sx:{padding:"0 1rem"},children:t.jsx(G,{})}),t.jsx(x,{sx:{width:"100%",typography:"body1"},children:t.jsxs(C,{value:e,children:[t.jsx(x,{sx:{borderBottom:"1px solid",borderColor:"rgba(145, 158, 171, 0.2)",margin:"4rem 2rem 0rem 0rem",width:"70%"},children:t.jsxs(L,{sx:{".css-heg063-MuiTabs-flexContainer":{justifyContent:"center",gap:"1rem"}},onChange:d,"aria-label":"lab API tabs example",children:[t.jsx(g,{label:"Loan Repayment Breakdown",value:"1",sx:{fontSize:"20px"}}),t.jsx(g,{label:"Agreements",value:"2",sx:{fontSize:"20px"}})]})}),t.jsx(l,{value:"1",children:t.jsx(f,{sx:{padding:"0 1rem",marginTop:"4.2rem"},children:t.jsx(B,{})})}),t.jsx(l,{value:"2",children:"2"})]})})]})}function ie(){return t.jsxs(t.Fragment,{children:[t.jsx(F,{children:t.jsx("title",{children:"Reviel | Loan Details"})}),t.jsx(_,{})]})}export{ie as default};
