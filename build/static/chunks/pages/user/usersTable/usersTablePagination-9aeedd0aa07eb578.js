(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[885],{1190:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/usersTable/usersTablePagination",function(){return t(6400)}])},6400:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(2988),a=t.n(i),s=t(8456),u=t(6670),o=t(7294),c=t(2762);n.default=(0,u.Pi)(function(e){let n,{usersCount:t,pagination:i,logging:u}=e,[p,d]=(0,o.useState)(1),[l,_]=(0,o.useState)(!1),{store:f}=(0,o.useContext)(c.Context),x=[],h=[];0!==t&&(n=t);for(let e=1;e<Math.ceil(n/10+1);e++)x.push((0,r.jsx)("button",{onClick:n=>g(n,e),disabled:p===e,type:"button",style:e<10?{padding:"3px 7px"}:{padding:"3px 4px"},"data-id":e,children:e},e)),h.push((0,r.jsx)(s.Z,{size:20,sx:{color:"#777777",padding:"2px 5px"}},e));async function g(e,n){_(!0);let r=await f.fetchUsers();if(!r){u("Error: Server error!"),_(!1);return}t||(u("Error: Server error!"),_(!1)),i(e.target.dataset.id),d(n),_(!1)}return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:a().pagination,children:l?h:x})})})},2988:function(e){e.exports={pagination:"usersTablePagination_pagination__Iw2Nu"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1190)}),_N_E=e.O()}]);