import{l as w,m as n,r as N,ak as x,j as r,S as y,W as L}from"./index-1f4d2e49.js";import{h as b}from"./moment-fbc5633a.js";import{D as _}from"./DataGrid-fc172a88.js";import{C as g}from"./Container-1f2010f6.js";import{G as R}from"./Grid-3536c732.js";import"./Select-5c7c0324.js";import"./Menu-0fad4b14.js";import"./Autocomplete-095245dc.js";import"./Popper-db2d984a.js";import"./usePreviousProps-f4342d7e.js";import"./FormControlLabel-e4be0e44.js";import"./TextField-36f35a29.js";import"./isMuiElement-3a78cbf0.js";import"./Button-80efb2a2.js";import"./InputAdornment-b6fbb70b.js";import"./Tooltip-5e61c1a6.js";import"./CircularProgress-ae7ed2bc.js";import"./TablePagination-8c547f3e.js";const j=[{field:"id",headerName:"S/N",width:70},{field:"lastName",headerName:"Last Name",width:100},{field:"firstName",headerName:"First Name",width:100},{field:"email",headerName:"Email",width:90},{field:"lender_borrower",headerName:"Were you the lender or borrower",width:150},{field:"lender",headerName:"Lender Name",width:100},{field:"lenderId",headerName:"Lender ID",width:90},{field:"borrower",headerName:"Borrower Name",width:100},{field:"borrowerId",headerName:"Borrower ID",width:90},{field:"loanTakenDate",headerName:"Date Loan Was Taken",width:150},{field:"loanAmount",headerName:"Loan Amount",width:100},{field:"loanInterest",headerName:"Loan Interest",width:100},{field:"repaymentSchedule",headerName:"Repayment Schedule",width:150},{field:"wasLoanFullyRepaid",headerName:"Was Loan Fully Repaid",width:90}];function F(){var o,c;const s=w(),t=n(e=>e.loan),d=n(e=>e),m=(c=(o=d==null?void 0:d.auth.user)==null?void 0:o.data)==null?void 0:c.token;console.log(t==null?void 0:t.userRecordedLoans);const i=(t==null?void 0:t.userRecordedLoans)||[];function a(e){return e/100}const f=i==null?void 0:i.map((e,p)=>{var h;const u={id:(e==null?void 0:e.id)||0,lastName:e==null?void 0:e.last_name,firstName:e==null?void 0:e.first_name,email:"empty",lender_borrower:e==null?void 0:e.user_type,lender:(e==null?void 0:e.user_type)==="Lender"?e==null?void 0:e.first_name:"",lenderId:(e==null?void 0:e.user_type)==="Lender"?e==null?void 0:e.user_id:"",borrower:(e==null?void 0:e.user_type)==="Borrower"?(h=e==null?void 0:e.loan)==null?void 0:h.first_name:"",borrowerId:(e==null?void 0:e.user_type)==="Borrower"?e==null?void 0:e.user_id:"",loanTakenDate:b(e==null?void 0:e.date_loan_taken).format("L"),loanAmount:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(a(e==null?void 0:e.loan_amount)),loanInterest:new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(a(e==null?void 0:e.loan_interest)),repaymentSchedule:e==null?void 0:e.repayment_schedule,wasLoanFullyRepaid:""};return u.index=p,u});return N.useEffect(()=>{s(x(m))},[s,m]),r.jsxs("div",{style:{minHeight:200,backgroundColor:"#FFFFFF",borderRadius:"20px",boxShadow:"0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)"},children:[r.jsx("h2",{style:{padding:"2rem 0rem 1rem 1rem"},children:"Recorded Loans For All User"}),r.jsx(_,{rows:f,columns:j,initialState:{pagination:{paginationModel:{page:0,pageSize:15}}},pageSizeOptions:[5,10,20]})]})}function I(){return r.jsxs(g,{children:[r.jsx(y,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5}),r.jsx(R,{sx:{padding:"0 1rem"},children:r.jsx(F,{})})]})}function $(){return r.jsxs(r.Fragment,{children:[r.jsx(L,{children:r.jsx("title",{children:" Reviel | User Recorded Loans "})}),r.jsx(I,{})]})}export{$ as default};
