(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{2046:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/submitForm/submitFrom",function(){return r(2802)}])},2802:function(e,t,r){"use strict";r.r(t);var s=r(5893),n=r(2755),l=r.n(n),u=r(7294),o=r(6097),a=r(4054),i=r(7598),c=r(6815),m=r(3457),d=r(480),p=r(5071),x=r(7357),b=r(3321),h=r(8456),f=r(6307),_=r(2762),v=r(1265),j=r(1927),g=r(8949),Z=r(6670);let w=(0,v.Z)({components:{MuiFormControl:{styleOverrides:{root:{"&":{marginTop:"15px",width:"100%"}}}},MuiOutlinedInput:{styleOverrides:{notchedOutline:{"&":{borderColor:"var(--color-second-blue)"}}}},MuiButton:{styleOverrides:{root:{"&":{border:"1px solid var(--color-second-blue)",color:"var(--color-second-blue)"},"&:hover":{color:"white",borderColor:"var(--color-second-blue)",backgroundColor:"var(--color-second-blue)"}}}}}});t.default=(0,Z.Pi)(function(){let{store:e}=(0,u.useContext)(_.Context),t=(0,u.useRef)(null),r=(0,g.ZN)(e.user),n=(0,u.useRef)(null),[v,Z]=(0,u.useState)(!0),[N,y]=(0,u.useState)(""),[I,q]=(0,u.useState)(""),[T,C]=(0,u.useState)(""),[O,S]=(0,u.useState)(""),[E,F]=(0,u.useState)(""),[M,z]=(0,u.useState)(""),[k,R]=(0,u.useState)(""),[P,V]=(0,u.useState)(""),[Y,A]=(0,u.useState)(!1),[B,X]=(0,u.useState)(!1);async function D(){(function(){if(F(""),z(""),R(""),V(""),!N)return F("The Company Name field cannot be empty!"),!1;if(!I)return z("The Request field cannot be empty!"),!1;if(v){if(!O)return V("The IMO field cannot be empty!"),!1;if(O.length<7)return V("The IMO Number cannot be less then 7 digits!"),!1}else if(!T)return R("The Vessel's Name field cannot be empty!"),!1;return!0})()&&(Y||A(!0),await e.requestElma({context:{user_email:n.current.value,imo:O,vessel_name:T,company_name:N,__target:"website",request_text:I}}),setTimeout(()=>{X("Request sent successfully!"),A(!1),setTimeout(()=>{X("")},2e3)},1e3))}return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:l().wrapper,children:(0,s.jsxs)("div",{ref:t,className:l().table,children:[(0,s.jsx)("h3",{children:"Send Data Form"}),(0,s.jsxs)(j.Z,{theme:w,children:[(0,s.jsx)(o.Z,{inputRef:n,required:!0,disabled:!0,helperText:"Your E-mail",defaultValue:r.email,size:"small",label:"E-mail"}),(0,s.jsx)(o.Z,{onInput:e=>y(e.target.value),required:!0,error:!!E,helperText:E||"Your company name",size:"small",label:"Company"}),(0,s.jsxs)(a.Z,{error:!!M,size:"small",children:[(0,s.jsx)(i.Z,{onInput:e=>q(e.target.value),placeholder:"Request*",className:l().request}),(0,s.jsx)(c.Z,{children:"Enter your request"})]}),(0,s.jsx)(o.Z,{onInput:e=>C(e.target.value),helperText:"Your vessel's name",error:!!k,required:!v,size:"small",label:k||"Vessel's Name"}),(0,s.jsx)(o.Z,{onInput:e=>{e.target.value=e.target.value.replace(/[^\d.]/g,""),S(e.target.value)},error:!!P,helperText:P||"Your IMO Number",value:O,inputProps:{maxLength:7},required:v,disabled:!v,size:"small",label:v?"IMO Number":"I don't have an IMO number"}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(d.Z,{control:(0,s.jsx)(p.Z,{onChange:()=>{v?(Z(!1),S(""),V("")):(Z(!0),R(""))}}),label:"I don't have an IMO number"})}),(0,s.jsx)(x.Z,{sx:{position:"relative",width:"143px",m:"20px auto 0",textAlign:"center"},children:(0,s.jsxs)(b.Z,{sx:{m:"0 auto",display:"flex",alignItems:"center",paddingBottom:"4px",width:"105px"},endIcon:!Y&&(0,s.jsx)(f.Z,{sx:{m:"0 0 2px 6px"}}),disabled:Y,onClick:D,children:["Send",Y&&(0,s.jsx)(h.Z,{size:20,sx:{m:"0 0 2px 10px",color:"var(--color-second-blue)"}})]})}),B&&(0,s.jsx)("p",{className:l().success,children:B})]})]})})})})},2755:function(e){e.exports={wrapper:"submitForm_wrapper__PWiw2",table:"submitForm_table__kqA3i",request:"submitForm_request__zeJCV",success:"submitForm_success__zUm7f"}}},function(e){e.O(0,[858,590,774,888,179],function(){return e(e.s=2046)}),_N_E=e.O()}]);