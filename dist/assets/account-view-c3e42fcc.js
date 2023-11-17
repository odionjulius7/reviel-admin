import{l as y,m as C,i as S,r as b,aj as k,j as s,S as n,C as c,I as p,T as h,B as P,V as I,f as B}from"./index-1f4d2e49.js";import{u as v,L as T,c as A,a as m}from"./formik.esm-c373c11d.js";import{T as w}from"./TextField-36f35a29.js";import{I as x}from"./InputAdornment-b6fbb70b.js";import{C as q}from"./Container-1f2010f6.js";import{C as z}from"./Card-4a9a836c.js";const F=A().shape({old_password:m().required("old password is Required"),new_password:m().required("new password is Required")});function $(){var i,l;const u=y(),a=C(r=>r),g=(l=(i=a==null?void 0:a.auth.user)==null?void 0:i.data)==null?void 0:l.token,j=S(),[o,t]=b.useState(!1),{isSuccess4:N,isError:E,message:d}=a.auth,e=v({initialValues:{old_password:"",new_password:""},validationSchema:F,onSubmit:r=>{const _={old_password:r==null?void 0:r.old_password,new_password:r==null?void 0:r.new_password,token:g};u(k(_))}}),f=s.jsxs(s.Fragment,{children:[s.jsxs(n,{spacing:3,sx:{margin:"1rem 0"},children:[s.jsx(w,{name:"old_password",label:"Current Password",value:e.values.old_password,onChange:e.handleChange("old_password"),onBlur:e.handleBlur("old_password"),type:o?"text":"password",InputProps:{endAdornment:s.jsx(x,{position:"end",children:s.jsx(c,{onClick:()=>t(!o),edge:"end",children:s.jsx(p,{icon:o?"eva:eye-fill":"eva:eye-off-fill"})})})}}),s.jsx("div",{className:"error mt-2",style:{color:"red",fontSize:"12px",marginTop:"0px"},children:e.touched.old_password&&e.errors.old_password}),s.jsx(w,{sx:{margin:"1rem 0"},name:"new_password",label:"New Password",value:e.values.new_password,onChange:e.handleChange("new_password"),onBlur:e.handleBlur("new_password"),type:o?"text":"password",InputProps:{endAdornment:s.jsx(x,{position:"end",children:s.jsx(c,{onClick:()=>t(!o),edge:"end",children:s.jsx(p,{icon:o?"eva:eye-fill":"eva:eye-off-fill"})})})}}),s.jsx("div",{className:"error mt-2",style:{color:"red",fontSize:"12px",marginTop:"0px"},children:e.touched.new_password&&e.errors.new_password})]}),s.jsx("div",{className:"error mt-2",style:{color:"green",fontSize:"14px",margin:"0.5rem 0"},children:d==="success"?`password change ${d}`:""}),s.jsx(T,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:e.handleSubmit,children:"Change Password"})]});return s.jsxs(q,{children:[s.jsx(n,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:s.jsx(h,{variant:"h4",children:"Account"})}),s.jsx(P,{sx:{...I({color:B(j.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:s.jsx(n,{alignItems:"center",justifyContent:"center",sx:{height:1},children:s.jsxs(z,{sx:{p:5,width:1,maxWidth:420},children:[s.jsx(h,{sx:{margin:"0 0 2rem 0"},variant:"h4",children:"Update Password"}),f]})})})]})}export{$ as A};
