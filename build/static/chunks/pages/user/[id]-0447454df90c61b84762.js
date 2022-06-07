(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{8680:function(e,r,t){"use strict";t.r(r);var s=t(2387),n=t(8461),o=t(9062),a=t(5010),u=t.n(a),l=t(1163),i=t(7294),c=t(2766),d=t(7347),p=t(8949),m=t(8396),x=t(5893);r.default=(0,c.Pi)((function(){var e=(0,m.Z)("(min-width:1480px)");(0,i.useEffect)((function(){setTimeout((function(){if(t){if(t.hasOwnProperty("user")){var e=(0,p.ZN)(t.user.userid);r.push("".concat(e))}t.isAuth||r.push("/")}}),1e3)}),[]);var r=(0,l.useRouter)(),t=(0,i.useContext)(d.Context).store,a=(0,p.ZN)(t.user.roles);return(0,x.jsx)(x.Fragment,{children:a?(0,x.jsx)("div",{className:"body-wrapper",children:(0,x.jsxs)("div",{className:u().componentWrapper,children:["USER"===a[0]&&(0,x.jsx)(s.default,{}),"ADMIN"===a[0]&&(e?(0,x.jsx)(n.default,{}):(0,x.jsx)("p",{className:u().warning,children:"This UI is designed for high resolution screens for ease of use. Minimum screen width should be 1480px!"}))]})}):(0,x.jsx)("div",{className:u().loader_wrapper,children:(0,x.jsxs)("div",{className:u().loader_block,children:[(0,x.jsx)(o.Z,{size:80,sx:{color:"white"}}),(0,x.jsx)("p",{children:"loading..."})]})})})}))},2387:function(e,r,t){"use strict";t.r(r);var s=t(266),n=t(809),o=t.n(n),a=t(3731),u=t.n(a),l=t(7294),i=t(8067),c=t(6446),d=t(7598),p=t(3460),m=t(3709),x=t(542),h=t(2887),_=t(1508),f=t(6914),b=t(9062),v=t(6307),j=t(7347),w=t(4345),g=t(5974),N=t(8949),Z=t(2766),I=t(5893),y=(0,w.Z)({components:{MuiFormControl:{styleOverrides:{root:{"&":{marginTop:"15px",width:"100%"}}}},MuiOutlinedInput:{styleOverrides:{notchedOutline:{"&":{borderColor:"var(--color-second-blue)"}}}},MuiButton:{styleOverrides:{root:{"&":{border:"1px solid var(--color-second-blue)",color:"var(--color-second-blue)"},"&:hover":{color:"white",borderColor:"var(--color-second-blue)",backgroundColor:"var(--color-second-blue)"}}}}}});r.default=(0,Z.Pi)((function(){var e=(0,l.useContext)(j.Context).store,r=(0,l.useRef)(null),t=(0,N.ZN)(e.user),n=(0,l.useRef)(null),a=(0,l.useState)(!0),w=a[0],Z=a[1],T=(0,l.useState)(""),O=T[0],q=T[1],C=(0,l.useState)(""),S=C[0],k=C[1],E=(0,l.useState)(""),M=E[0],R=E[1],z=(0,l.useState)(""),F=z[0],P=z[1],X=(0,l.useState)(""),A=X[0],L=X[1],Y=(0,l.useState)(""),D=Y[0],V=Y[1],W=(0,l.useState)(""),B=W[0],U=W[1],G=(0,l.useState)(""),J=G[0],H=G[1],K=(0,l.useState)(!1),Q=K[0],$=K[1],ee=(0,l.useState)(!1),re=ee[0],te=ee[1];function se(){if(L(""),V(""),U(""),H(""),!O)return L("The Company Name field cannot be empty!"),!1;if(!S)return V("The Request field cannot be empty!"),!1;if(w){if(!F)return H("The IMO field cannot be empty!"),!1;if(F.length<7)return H("The IMO Number cannot be less then 7 digits!"),!1}else if(!M)return U("The Vessel's Name field cannot be empty!"),!1;return!0}function ne(){return(ne=(0,s.Z)(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!se()){r.next=6;break}return Q||$(!0),r.next=4,e.requestElma({context:{user_email:n.current.value,imo:F,vessel_name:M,company_name:O,__target:"website",request_text:S}});case 4:r.sent,setTimeout((function(){te("Request sent successfully!"),$(!1),setTimeout((function(){te("")}),2e3)}),1e3);case 6:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("div",{className:u().wrapper,children:(0,I.jsxs)("div",{ref:r,className:u().table,children:[(0,I.jsx)("h3",{children:"Send Data Form"}),(0,I.jsxs)(g.Z,{theme:y,children:[(0,I.jsx)(i.Z,{inputRef:n,required:!0,disabled:!0,helperText:"Your E-mail",defaultValue:t.email,size:"small",label:"E-mail"}),(0,I.jsx)(i.Z,{onInput:function(e){return q(e.target.value)},required:!0,error:!!A,helperText:A||"Your company name",size:"small",label:"Company"}),(0,I.jsxs)(c.Z,{error:!!D,size:"small",children:[(0,I.jsx)(d.Z,{onInput:function(e){return k(e.target.value)},placeholder:"Request*",className:u().request}),(0,I.jsx)(p.Z,{children:"Enter your request"})]}),(0,I.jsx)(i.Z,{onInput:function(e){return R(e.target.value)},helperText:"Your vessel's name",error:!!B,required:!w,size:"small",label:B||"Vessel's Name"}),(0,I.jsx)(i.Z,{onInput:function(e){e.target.value=e.target.value.replace(/[^\d.]/g,""),P(e.target.value)},error:!!J,helperText:J||"Your IMO Number",value:F,inputProps:{maxLength:7},required:w,disabled:!w,size:"small",label:w?"IMO Number":"I don't have an IMO number"}),(0,I.jsx)(m.Z,{children:(0,I.jsx)(x.Z,{control:(0,I.jsx)(h.Z,{onChange:function(){w?(Z(!1),P(""),H("")):(Z(!0),U(""))}}),label:"I don't have an IMO number"})}),(0,I.jsx)(_.Z,{sx:{position:"relative",width:"143px",m:"20px auto 0",textAlign:"center"},children:(0,I.jsxs)(f.Z,{sx:{m:"0 auto",display:"flex",alignItems:"center",paddingBottom:"4px",width:"105px"},endIcon:!Q&&(0,I.jsx)(v.Z,{sx:{m:"0 0 2px 6px"}}),disabled:Q,onClick:function(){return ne.apply(this,arguments)},children:["Send",Q&&(0,I.jsx)(b.Z,{size:20,sx:{m:"0 0 2px 10px",color:"var(--color-second-blue)"}})]})}),re&&(0,I.jsx)("p",{className:u().success,children:re})]})]})})})}))},3559:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[id]",function(){return t(8680)}])},5010:function(e){e.exports={componentWrapper:"_id__componentWrapper__2L2Rj",loader_wrapper:"_id__loader_wrapper__j-h1G",loader_block:"_id__loader_block__1wz-w",warning:"_id__warning__ZXjJ_"}},3731:function(e){e.exports={wrapper:"submitForm_wrapper__L2qOL",table:"submitForm_table__1DXs8",request:"submitForm_request__2I1aA",success:"submitForm_success__2PRXI"}}},function(e){e.O(0,[264,461,774,888,179],(function(){return r=3559,e(e.s=r);var r}));var r=e.O();_N_E=r}]);