(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{8680:function(e,t,r){"use strict";r.r(t);var n=r(2387),o=r(8461),s=r(9062),a=r(5010),l=r.n(a),i=r(1163),u=r(7294),d=r(2766),c=r(7347),p=r(8949),m=r(8396),f=r(5893);t.default=(0,d.Pi)((function(){var e=(0,m.Z)("(min-width:1480px)");(0,u.useEffect)((function(){setTimeout((function(){if(r){if(r.hasOwnProperty("user")){var e=(0,p.ZN)(r.user.userid);t.push("".concat(e))}r.isAuth||t.push("/")}}),1e3)}),[]);var t=(0,i.useRouter)(),r=(0,u.useContext)(c.Context).store,a=(0,p.ZN)(r.user.roles);return(0,f.jsx)(f.Fragment,{children:a?(0,f.jsx)("div",{className:"body-wrapper",children:(0,f.jsxs)("div",{className:l().componentWrapper,children:["USER"===a[0]&&(0,f.jsx)(n.default,{}),"ADMIN"===a[0]&&(e?(0,f.jsx)(o.default,{}):(0,f.jsx)("p",{className:l().warning,children:"This UI is designed for high resolution screens for ease of use. Minimum screen width should be 1480px!"}))]})}):(0,f.jsx)("div",{className:l().loader_wrapper,children:(0,f.jsxs)("div",{className:l().loader_block,children:[(0,f.jsx)(s.Z,{size:80,sx:{color:"white"}}),(0,f.jsx)("p",{children:"loading..."})]})})})}))},2387:function(e,t,r){"use strict";r.r(t);var n=r(266),o=r(809),s=r.n(o),a=r(3731),l=r.n(a),i=r(7294),u=r(8067),d=r(6446),c=r(7598),p=r(3460),m=r(3709),f=r(542),x=r(2887),h=r(1508),b=r(6914),v=r(9062),_=r(6307),g=r(7347),w=r(4345),j=r(5974),y=r(8949),N=r(2766),Z=r(5893),T=(0,w.Z)({components:{MuiFormControl:{styleOverrides:{root:{"&":{marginTop:"15px",width:"100%"}}}},MuiOutlinedInput:{styleOverrides:{notchedOutline:{"&":{borderColor:"var(--color-second-blue)"}}}},MuiButton:{styleOverrides:{root:{"&":{border:"1px solid var(--color-second-blue)",color:"var(--color-second-blue)"},"&:hover":{color:"white",borderColor:"var(--color-second-blue)",backgroundColor:"var(--color-second-blue)"}}}}}});t.default=(0,N.Pi)((function(){var e=(0,i.useContext)(g.Context).store,t=(0,i.useRef)(null),r=(0,y.ZN)(e.user),o=(0,i.useRef)(null),a=(0,i.useState)(!0),w=a[0],N=a[1],I=(0,i.useState)(""),O=I[0],S=I[1],k=(0,i.useState)(""),C=k[0],q=k[1],z=(0,i.useState)(""),M=z[0],E=z[1],P=(0,i.useState)(""),R=P[0],A=P[1],F=(0,i.useState)(""),Y=F[0],X=F[1],D=(0,i.useState)(""),L=D[0],U=D[1],V=(0,i.useState)(""),W=V[0],B=V[1],G=(0,i.useState)(""),J=G[0],H=G[1],K=(0,i.useState)(""),Q=K[0],$=K[1],ee=(0,i.useState)(""),te=ee[0],re=ee[1],ne=(0,i.useState)(""),oe=ne[0],se=ne[1],ae=(0,i.useState)(""),le=ae[0],ie=ae[1],ue=(0,i.useState)(!1),de=ue[0],ce=ue[1],pe=(0,i.useState)(!1),me=pe[0],fe=pe[1];function xe(){if(B(""),H(""),$(""),re(""),se(""),ie(""),!O)return B("The Phone field cannot be empty!"),!1;if(!C)return H("The Name field cannot be empty!"),!1;if(!M)return $("The Company Name field cannot be empty!"),!1;if(!R)return re("The Request field cannot be empty!"),!1;if(w){if(!L)return ie("The IMO field cannot be empty!"),!1;if(L.length<7)return ie("The IMO Number cannot be less then 7 digits!"),!1}else if(!Y)return se("The Vessel's Name field cannot be empty!"),!1;return!0}function he(){return(he=(0,n.Z)(s().mark((function t(){var r,n,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r="",[{mail:o.current.value},{phone:O},{name:C},{company:M},{request:R},{vessel:Y},{imo:L}].filter((function(e){return!!Object.values(e)[0]})).map((function(e){var t=Object.keys(e)[0],n=Object.values(e)[0];return r+="\n\t\t\t<tr>\n\t\t\t\t<td\n\t\t\t\t\tstyle='text-transform: uppercase;border-color:#9b9b9b;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;font-weight:bold;text-align:left;vertical-align:middle;'>\n\t\t\t\t\t".concat(t," :\n\t\t\t\t</td>\n\t\t\t\t<td\n\t\t\t\t\tstyle='border-color:#9b9b9b;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:10px 5px;word-break:normal;background-color:#efefef;color:#003d63;text-align:left;vertical-align:top;'>\n\t\t\t\t\t").concat(n,"\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t")})),n="\n\t\t<table style='min-width: 400px;border-collapse: collapse;border-spacing: 0;'>\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th colspan='2'\n\t\t\t\t\t\tstyle='border-color:#9b9b9b;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:10px 5px;word-break:normal;text-align:center;vertical-align:top;'>\n\t\t\t\t\tCUSTOMER DATA:\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t".concat(r,"\n\t\t\t</tbody>\n\t\t</table>\n\t\t"),!xe()){t.next=10;break}return de||ce(!0),t.next=8,e.sendMail(n);case 8:a=t.sent,setTimeout((function(){fe(a),ce(!1),setTimeout((function(){fe("")}),2e3)}),1e3);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("div",{className:l().wrapper,children:(0,Z.jsxs)("div",{ref:t,className:l().table,children:[(0,Z.jsx)("h3",{children:"Send Data Form"}),(0,Z.jsxs)(j.Z,{theme:T,children:[(0,Z.jsx)(u.Z,{inputRef:o,required:!0,disabled:!0,helperText:"Your E-mail",defaultValue:r.email,size:"small",label:"E-mail"}),(0,Z.jsx)(u.Z,{onInput:function(e){e.target.value=e.target.value.replace(/[^\d\+\(\)\-]/g,""),S(e.target.value)},required:!0,error:!!W,helperText:W||"Your Phone Number",size:"small",label:"Phone"}),(0,Z.jsx)(u.Z,{onInput:function(e){return q(e.target.value)},required:!0,error:!!J,helperText:J||"Your Name",size:"small",label:"Name"}),(0,Z.jsx)(u.Z,{onInput:function(e){return E(e.target.value)},required:!0,error:!!Q,helperText:Q||"Your company name",size:"small",label:"Company"}),(0,Z.jsxs)(d.Z,{error:!!te,size:"small",children:[(0,Z.jsx)(c.Z,{onInput:function(e){return A(e.target.value)},placeholder:"Request*",className:l().request}),(0,Z.jsx)(p.Z,{children:"Enter your request"})]}),(0,Z.jsx)(u.Z,{onInput:function(e){return X(e.target.value)},helperText:"Your vessel's name",error:!!oe,required:!w,size:"small",label:oe||"Vessel's Name"}),(0,Z.jsx)(u.Z,{onInput:function(e){e.target.value=e.target.value.replace(/[^\d.]/g,""),U(e.target.value)},error:!!le,helperText:le||"Your IMO Number",value:L,inputProps:{maxLength:7},required:w,disabled:!w,size:"small",label:w?"IMO Number":"I don't have an IMO number"}),(0,Z.jsx)(m.Z,{children:(0,Z.jsx)(f.Z,{control:(0,Z.jsx)(x.Z,{onChange:function(){w?(N(!1),U(""),ie("")):(N(!0),se(""))}}),label:"I don't have an IMO number"})}),(0,Z.jsx)(h.Z,{sx:{position:"relative",width:"143px",m:"20px auto 0",textAlign:"center"},children:(0,Z.jsxs)(b.Z,{sx:{m:"0 auto",display:"flex",alignItems:"center",paddingBottom:"4px",width:"105px"},endIcon:!de&&(0,Z.jsx)(_.Z,{sx:{m:"0 0 2px 6px"}}),disabled:de,onClick:function(){return he.apply(this,arguments)},children:["Send",de&&(0,Z.jsx)(v.Z,{size:20,sx:{m:"0 0 2px 10px",color:"var(--color-second-blue)"}})]})}),me&&(0,Z.jsx)("p",{className:l().success,children:me})]})]})})})}))},3559:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[id]",function(){return r(8680)}])},5010:function(e){e.exports={componentWrapper:"_id__componentWrapper__2L2Rj",loader_wrapper:"_id__loader_wrapper__j-h1G",loader_block:"_id__loader_block__1wz-w",warning:"_id__warning__ZXjJ_"}},3731:function(e){e.exports={wrapper:"submitForm_wrapper__L2qOL",table:"submitForm_table__1DXs8",request:"submitForm_request__2I1aA",success:"submitForm_success__2PRXI"}}},function(e){e.O(0,[264,461,774,888,179],(function(){return t=3559,e(e.s=t);var t}));var t=e.O();_N_E=t}]);