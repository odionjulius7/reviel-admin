import{j as e,x as M,T,P as o,r as p,y as z,B as J,l as K,m as D,n as U,S as $,G as Q,W as V}from"./index-1f4d2e49.js";import{l as X}from"./lodash-5aed0464.js";import{h as Y}from"./moment-fbc5633a.js";import{T as g,a as Z,b as B,c as ee,d as te,e as re}from"./TableSortLabel-ed0d5fca.js";import{T as u,a as ne}from"./TablePagination-8c547f3e.js";import{L as se}from"./label-1181e1b5.js";import{C as ae}from"./Container-1f2010f6.js";import{C as oe}from"./Card-4a9a836c.js";import"./Select-5c7c0324.js";import"./Menu-0fad4b14.js";const w=[...Array(24)].map((r,n)=>({creditId:123,lender:"Julius",borrower:"Aigbe",amount:2e3,repaymentDate:"12/03/2023",message:"lorem jbhdfb resbhhfb bhsbfhjbhr. lorem jbhdfb",status:X.sample(["successful","contested","pending","awaiting approval","to be paid"])}));function A({query:r}){return e.jsx(g,{children:e.jsx(u,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs(M,{sx:{textAlign:"center"},children:[e.jsx(T,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(T,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',r,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}A.propTypes={query:o.string};function N({emptyRows:r,height:n}){return r?e.jsx(g,{sx:{...n&&{height:n*r}},children:e.jsx(u,{colSpan:9})}):null}N.propTypes={emptyRows:o.number,height:o.number};function k({selected:r,lender:n,borrower:s,status:i,repaymentDate:c,amount:d,creditId:l,message:a}){return p.useState(null),e.jsx(e.Fragment,{children:e.jsxs(g,{hover:!0,tabIndex:-1,role:"checkbox",selected:r,children:[e.jsx(u,{align:"center",children:e.jsx(z,{to:`/loan/${l}`,children:l})}),e.jsx(u,{children:n}),e.jsx(u,{children:s}),e.jsx(u,{children:d}),e.jsx(u,{children:c}),e.jsx(u,{children:e.jsx(se,{color:i==="contested"&&"error"||i==="rejected"&&"error"||i==="awaiting_approval"&&"warning"||"success",children:i})}),e.jsx(u,{children:a})]})})}k.propTypes={lender:o.any,borrower:o.any,amount:o.any,selected:o.any,status:o.string,repaymentDate:o.any,message:o.any,creditId:o.any};const ie={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function ce(r,n,s){return r?Math.max(0,(1+r)*n-s):0}function I(r,n,s){return r[s]===null?1:n[s]===null||n[s]<r[s]?-1:n[s]>r[s]?1:0}function de(r,n){return r==="desc"?(s,i)=>I(s,i,n):(s,i)=>-I(s,i,n)}function le({inputData:r,comparator:n,filterName:s}){const i=r.map((c,d)=>[c,d]);return i.sort((c,d)=>{const l=n(c[0],d[0]);return l!==0?l:c[1]-d[1]}),r=i.map(c=>c[0]),s&&(r=r.filter(c=>c.name.toLowerCase().indexOf(s.toLowerCase())!==-1)),r}function F({order:r,orderBy:n,rowCount:s,headLabel:i,numSelected:c,onRequestSort:d}){const l=a=>x=>{d(x,a)};return e.jsx(Z,{children:e.jsx(g,{children:i.map(a=>e.jsx(u,{align:a.align||"left",sortDirection:n===a.id?r:!1,sx:{width:a.width,minWidth:a.minWidth},children:e.jsxs(B,{hideSortIcon:!0,active:n===a.id,direction:n===a.id?r:"asc",onClick:l(a.id),children:[a.label,n===a.id?e.jsx(J,{sx:{...ie},children:r==="desc"?"sorted descending":"sorted ascending"}):null]})},a.id))})})}F.propTypes={order:o.oneOf(["asc","desc"]),orderBy:o.string,rowCount:o.number,headLabel:o.array,numSelected:o.number,onRequestSort:o.func};function ue(){var v,R;const r=K(),n=D(t=>t.loan),s=D(t=>t);console.log(n==null?void 0:n.loanTransactionData);const i=(R=(v=s==null?void 0:s.auth.user)==null?void 0:v.data)==null?void 0:R.token,c=(n==null?void 0:n.loanTransactionData)||[];function d(t){return t/100}const l=c==null?void 0:c.map((t,m)=>{var L,C;const y={creditId:(t==null?void 0:t.loan_id)||0,lender:(L=t==null?void 0:t.lender)==null?void 0:L.first_name,borrower:(C=t==null?void 0:t.borrower)==null?void 0:C.first_name,amount:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(d(t==null?void 0:t.amount)),repaymentDate:Y(t==null?void 0:t.createdAt).format("L"),status:t==null?void 0:t.status,message:""};return y.index=m,y});console.log(l),p.useEffect(()=>{r(U(i))},[r,i]);const[a,x]=p.useState(0),[b,O]=p.useState("asc"),[S,me]=p.useState([]),[f,E]=p.useState("name"),[j,pe]=p.useState(""),[h,_]=p.useState(10),q=(t,m)=>{m!==""&&(O(f===m&&b==="asc"?"desc":"asc"),E(m))},H=(t,m)=>{x(m)},W=t=>{x(0),_(parseInt(t.target.value,10))},P=le({inputData:l,comparator:de(b,f),filterName:j}),G=!P.length&&!!j;return e.jsxs(ae,{children:[e.jsx($,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,mt:4,children:e.jsx(T,{variant:"h4",children:"Loan Repayment History"})}),e.jsxs(oe,{children:[e.jsx(Q,{children:e.jsx(ee,{sx:{overflow:"unset"},children:e.jsxs(te,{sx:{minWidth:800},children:[e.jsx(F,{order:b,orderBy:f,rowCount:w.length,numSelected:S.length,onRequestSort:q,headLabel:[{id:"creditId",label:"Credit ID",align:"center"},{id:"lender",label:"Lender"},{id:"borrower",label:"Borrower"},{id:"amount",label:"Amount"},{id:"repaymentDate",label:"Repayment Date"},{id:"status",label:"Status"},{id:"message",label:"Message"},{id:""}]}),e.jsxs(re,{children:[P.slice(a*h,a*h+h).map(t=>e.jsx(k,{creditId:t.creditId,lender:t.lender,borrower:t.borrower,amount:t.amount,status:t.status,repaymentDate:t.repaymentDate,message:t.message,selected:S.indexOf(t.name)!==-1},t.CreaditId)),e.jsx(N,{height:77,emptyRows:ce(a,h,w.length)}),G&&e.jsx(A,{query:j})]})]})})}),e.jsx(ne,{page:a,component:"div",count:w.length,rowsPerPage:h,onPageChange:H,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:W})]})]})}function Pe(){return e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsx("title",{children:" Reviel | Loan Repayment "})}),e.jsx(ue,{})]})}export{Pe as default};
