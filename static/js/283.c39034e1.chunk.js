"use strict";(self.webpackChunkcapusta_react_team_project=self.webpackChunkcapusta_react_team_project||[]).push([[283],{7790:function(e,t,n){n.d(t,{r:function(){return o}});var r,i,l=n(2791),a=["title","titleId"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function u(e,t){var n=e.title,u=e.titleId,o=s(e,a);return l.createElement("svg",c({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":u},o),n?l.createElement("title",{id:u},n):null,r||(r=l.createElement("g",{clipPath:"url(#clip0_19401_306)"},l.createElement("path",{d:"M16.3081 4.02333L15.9106 2.832C15.7593 2.37827 15.3362 2.07339 14.858 2.07339H11.5177V0.985886C11.5177 0.442337 11.0758 0 10.5324 0H7.47355C6.93027 0 6.48821 0.442337 6.48821 0.985886V2.07339H3.14809C2.66977 2.07339 2.24666 2.37827 2.09533 2.832L1.6979 4.02333C1.6074 4.29456 1.65326 4.59489 1.82039 4.82684C1.98752 5.05879 2.25792 5.19736 2.54384 5.19736H2.95926L3.8736 16.5038C3.94158 17.3427 4.65349 18 5.49463 18H12.6969C13.5379 18 14.2499 17.3427 14.3178 16.5037L15.2321 5.19736H15.4621C15.748 5.19736 16.0184 5.05879 16.1856 4.82698C16.3527 4.59503 16.3986 4.29456 16.3081 4.02333ZM7.5429 1.05469H10.4631V2.07339H7.5429V1.05469ZM13.2665 16.4187C13.2426 16.7141 12.9924 16.9453 12.6969 16.9453H5.49463C5.1991 16.9453 4.94889 16.7141 4.92499 16.4187L4.01738 5.19736H14.174L13.2665 16.4187ZM2.77002 4.14267L3.09591 3.16571C3.10332 3.14319 3.12433 3.12808 3.14809 3.12808H14.858C14.8818 3.12808 14.9026 3.14319 14.9102 3.16571L15.2361 4.14267H2.77002Z",fill:"#52555F"}),l.createElement("path",{d:"M11.5846 16.3813C11.5939 16.3819 11.6031 16.382 11.6125 16.382C11.8911 16.382 12.124 16.1637 12.1386 15.8821L12.6338 6.37593C12.6489 6.08507 12.4253 5.83691 12.1346 5.82181C11.843 5.80629 11.5957 6.03013 11.5805 6.321L11.0854 15.8272C11.0703 16.1181 11.2937 16.3662 11.5846 16.3813Z",fill:"#52555F"}),l.createElement("path",{d:"M5.89099 15.8833C5.90637 16.1644 6.139 16.3819 6.41709 16.3819C6.4267 16.3819 6.43659 16.3816 6.44634 16.3811C6.73707 16.3653 6.95995 16.1167 6.94416 15.8259L6.42547 6.31967C6.40968 6.0288 6.16111 5.80592 5.87025 5.82185C5.57952 5.83764 5.35664 6.08621 5.37243 6.37707L5.89099 15.8833Z",fill:"#52555F"}),l.createElement("path",{d:"M9.00891 16.3819C9.30019 16.3819 9.53625 16.1459 9.53625 15.8546V6.34839C9.53625 6.05711 9.30019 5.82104 9.00891 5.82104C8.71764 5.82104 8.48157 6.05711 8.48157 6.34839V15.8546C8.48157 16.1459 8.71764 16.3819 9.00891 16.3819Z",fill:"#52555F"}))),i||(i=l.createElement("defs",null,l.createElement("clipPath",{id:"clip0_19401_306"},l.createElement("rect",{width:18,height:18,fill:"white"})))))}var o=l.forwardRef(u);n.p},8283:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(6750),i=n(2312),l=n(1983),a=n(7790),c=n(9279),s=n(184),u=r.Z.Column,o=function(){return(0,s.jsx)(c.xJ,{children:(0,s.jsxs)(r.Z,{layout:"inline",pagination:!1,size:"large",children:[(0,s.jsx)(u,{title:"Date",dataIndex:"date",width:"130px"},"date"),(0,s.jsx)(u,{title:"Descrition",dataIndex:"description",ellipsis:"true",width:"188px"},"description"),(0,s.jsx)(u,{title:"category",dataIndex:"category",width:"116px"},"category"),(0,s.jsx)(u,{title:"sum",dataIndex:"amount",render:function(e,t){return(0,s.jsxs)(i.Z,{size:"middle",style:{display:"flex",justifyContent:"space-between"},children:[(0,s.jsxs)("p",{children:[t.amount,".00 UAH"]}),(0,s.jsx)(l.ZP,{style:{marginRight:"47px"},children:(0,s.jsx)(a.r,{})})]})}},"amount")]})})},d=n(2791),f=n(9434),p=n(6378),h=function(){var e=(0,f.I0)();return(0,d.useEffect)((function(){e((0,p.bd)())}),[e]),(0,s.jsx)(o,{})},C=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(h,{})})}}}]);
//# sourceMappingURL=283.c39034e1.chunk.js.map