(this["webpackJsonpvaccine-slots"]=this["webpackJsonpvaccine-slots"]||[]).push([[0],{120:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(14),r=a.n(i),c=(a(120),a(22)),s=a.n(c),d=a(32),l=a(24),u=a(189),o=a(186),p=a(195),h=a(48),m=a.n(h),j=a(99),b=a(18),x=a(188),g=a(187),f=a(68),O=a(191),y=[{_id:1,name:"Andaman and Nicobar Islands"},{_id:2,name:"Andhra Pradesh"},{_id:3,name:"Arunachal Pradesh"},{_id:4,name:"Assam"},{_id:5,name:"Bihar"},{_id:6,name:"Chandigarh"},{_id:7,name:"Chhattisgarh"},{_id:8,name:"Dadra and Nagar Haveli"},{_id:37,name:"Daman and Diu"},{_id:9,name:"Delhi"},{_id:10,name:"Goa"},{_id:11,name:"Gujarat"},{_id:12,name:"Haryana"},{_id:13,name:"Himachal Pradesh"},{_id:14,name:"Jammu and Kashmir"},{_id:15,name:"Jharkhand"},{_id:16,name:"Karnataka"},{_id:17,name:"Kerala"},{_id:18,name:"Ladakh"},{_id:19,name:"Lakshadweep"},{_id:20,name:"Madhya Pradesh"},{_id:21,name:"Maharashtra"},{_id:22,name:"Manipur"},{_id:23,name:"Meghalaya"},{_id:24,name:"Mizoram"},{_id:25,name:"Nagaland"},{_id:26,name:"Odisha"},{_id:27,name:"Puducherry"},{_id:28,name:"Punjab"},{_id:29,name:"Rajasthan"},{_id:30,name:"Sikkim"},{_id:31,name:"Tamil Nadu"},{_id:32,name:"Telangana"},{_id:33,name:"Tripura"},{_id:34,name:"Uttar Pradesh"},{_id:35,name:"Uttarakhand"},{_id:36,name:"West Bengal"}],v=a(78),_=function(){var e=Object(d.a)(s.a.mark((function e(t,a){var n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=".concat(t,"&date=").concat(a),e.next=3,m.a.get(n,{headers:{accept:"application/json","Accept-Language":"en-US"}}).then((function(e){return e.data.sessions})).catch((function(e){return console.error(e)}));case 3:return i=e.sent,e.abrupt("return",i||[]);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(s.a.mark((function e(t,a){var n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=".concat(t,"&date=").concat(a),e.next=3,m.a.get(n,{headers:{accept:"application/json","Accept-Language":"en-US"}}).then((function(e){return e.data.sessions})).catch((function(e){return console.error(e)}));case 3:return i=e.sent,e.abrupt("return",i||[]);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(s.a.mark((function e(t,a,n){var i,r,c,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.trim()){e.next=12;break}return e.next=3,S(n,a);case 3:return i=e.sent,e.next=6,_(t,a);case 6:if(r=e.sent,!(i.length>0&&r.length>0)){e.next=10;break}return c=i.filter((function(e){return e.pincode!==t})),e.abrupt("return",[].concat(Object(v.a)(r),Object(v.a)(c)));case 10:e.next=14;break;case 12:return d=S(n,a),e.abrupt("return",d);case 14:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),k=a(181),T=a(185),P=a(9),A=function(e){var t=e.name,a=e.vaccine,n=e.min_age,i=(e.paid,e.capacity),r=e.fee;return Object(P.jsx)(k.a,{style:{backgroundColor:"#3f51b519",minWidth:"160px"},children:Object(P.jsxs)(T.a,{children:[Object(P.jsx)("h4",{style:{marginTop:"0px"},children:t}),Object(P.jsxs)("h6",{style:{marginTop:"-12px"},children:["**",a,"**"]}),Object(P.jsxs)("h5",{style:{marginTop:"-9px"},children:["Minimum Age: ",n]}),Object(P.jsxs)("h5",{style:{marginTop:"-15px"},children:["Capacity: ",i]}),Object(P.jsxs)("h5",{style:{marginTop:"-15px"},children:["Fee: \u20b9",r]})]})})},C=function(e){var t=e.sessions;return Object(P.jsx)(o.a,{container:!0,spacing:4,style:{paddingRight:"10px",marginBottom:"20px",width:"90%"},children:t.map((function(e,t){return Object(P.jsx)(o.a,{item:!0,xs:12,sm:6,md:6,lg:4,children:Object(P.jsx)(A,{name:e.name,vaccine:e.vaccine,min_age:e.min_age_limit,paid:"Free"!==e.fee_type,capacity:e.available_capacity,fee:e.fee},e.center_id)})}))})},D=function(e){var t=e.results,a=15*e.currPage,n=a-15,i=t.slice(n,a);return Object(P.jsx)("div",{style:{marginTop:"45px",paddingLeft:"25px"},children:0!==t.length?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("h2",{style:{marginBottom:"35px"},children:"Available Slots:"}),Object(P.jsx)(C,{sessions:i})]}):Object(P.jsx)("h2",{style:{color:"red"},children:"Sorry. We could not find any slots. Try something else."})})},M=function(){var e=Object(n.useState)(y),t=Object(l.a)(e,1)[0],a=Object(n.useState)([]),i=Object(l.a)(a,2),r=i[0],c=i[1],h=Object(n.useState)(""),v=Object(l.a)(h,2),_=v[0],S=v[1],k=Object(n.useState)(!1),T=Object(l.a)(k,2),A=(T[0],T[1]),C=Object(n.useState)(""),M=Object(l.a)(C,2),B=M[0],L=M[1],W=Object(n.useState)(""),U=Object(l.a)(W,2),J=U[0],K=U[1],N=Object(n.useState)(""),q=Object(l.a)(N,2),z=q[0],E=q[1],F=Object(n.useState)(new Date),H=Object(l.a)(F,2),I=H[0],R=H[1],G=Object(n.useState)(null),Q=Object(l.a)(G,2),V=Q[0],X=Q[1],Y=Object(n.useState)(1),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=function(){var e=Object(d.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+t.target.value._id,{headers:{accept:"application/json","Accept-Language":"en-US"}});case 3:(a=e.sent).data.districts.length>0&&c(a.data.districts),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(d.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(f.a)(new Date(I),"dd-MM-yyyy"),A(!0),e.next=4,w(z,t,B.district_id);case 4:(a=e.sent)&&0!==a.length&&(""!==J.trim()?(n=a.filter((function(e){return+J>=e.min_age_limit})),console.log(n),X(n)):X(a)),A(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(P.jsxs)("div",{style:{flex:1,paddingTop:"30px",paddingBottom:"30px"},children:[Object(P.jsx)("form",{onSubmit:function(e){e.preventDefault(),ae()},children:Object(P.jsxs)(o.a,{container:!0,spacing:3,style:{paddingRight:"350px",paddingLeft:"30px"},children:[Object(P.jsx)(o.a,{item:!0,xs:12,md:6,lg:6,sm:12,children:Object(P.jsx)(u.a,{select:!0,id:"state-dropdown",label:"Select State",value:_,onChange:function(e){S(e.target.value),te(e)},helperText:"Please Select your State",style:{width:"300px",minWidth:"170px"},required:!0,children:t.map((function(e){return Object(P.jsx)(p.a,{value:e,children:e.name},e._id)}))})}),Object(P.jsx)(o.a,{item:!0,xs:12,md:6,lg:6,sm:12,children:Object(P.jsx)(u.a,{select:!0,id:"district-dropdown",label:"Select District",value:B,onChange:function(e){L(e.target.value)},helperText:"Please Select your District",style:{width:"300px",minWidth:"170px"},disabled:!r.length>0,required:!0,children:r.map((function(e){return Object(P.jsx)(p.a,{value:e,children:e.district_name},e.district_id)}))})}),Object(P.jsx)(b.a,{utils:j.a,children:Object(P.jsx)(o.a,{item:!0,xs:12,md:3,lg:3,sm:6,children:Object(P.jsx)(x.a,{id:"date-picker-dialog",label:"Date",format:"dd-MM-yyyy",value:I,onChange:function(e){return R(e)},KeyboardButtonProps:{"aria-label":"change date"},helperText:"Pick a date",required:!0,style:{minWidth:"140px"}})})}),Object(P.jsx)(o.a,{item:!0,xs:12,md:3,lg:3,sm:6,children:Object(P.jsx)(u.a,{id:"pin-field",label:"Pincode",value:z,onChange:function(e){return E(e.target.value)},helperText:"Enter Pincode",style:{width:"140px"}})}),Object(P.jsx)(o.a,{item:!0,xs:6,md:3,lg:3,sm:6,children:Object(P.jsx)(u.a,{id:"age-field",label:"Age",value:J,onChange:function(e){return K(e.target.value)},helperText:"Enter Age",style:{width:"100px"}})}),Object(P.jsx)(o.a,{item:!0,xs:12,md:3,lg:3,sm:12,children:Object(P.jsx)(g.a,{size:"medium",variant:"contained",color:"primary",style:{height:"40px",marginTop:"10px"},type:"submit",children:"Search"})})]})}),V&&Object(P.jsx)(D,{results:V,currPage:$}),V&&Object(P.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(P.jsx)(O.a,{count:Math.ceil(V.length/15),color:"primary",size:"large",onChange:function(e,t){ee(t)}})})]})};r.a.render(Object(P.jsx)(M,{}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.64ce7b02.chunk.js.map