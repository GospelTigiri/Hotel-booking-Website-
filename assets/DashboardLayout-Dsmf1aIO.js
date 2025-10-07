import{c as t,r as a,d as k,u,e as j,f as v,j as e,l as f,L as n,O as N}from"./index-BmEL4TLi.js";/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]],M=t("bed-double",w);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],R=t("book-open",_);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],C=t("layout-dashboard",z);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],O=t("log-out",L);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],D=t("menu",$);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],E=t("x",B),d={primary:"#0A1D56"};function S(){const[c,l]=a.useState([]),[h,x]=a.useState([]),[r,m]=a.useState(""),[b,s]=a.useState(!1),o=k(),p=u();a.useEffect(()=>{y()},[]);const y=async()=>{try{const[i,g]=await Promise.all([j(),v()]);l(i.data),x(g.data)}catch{m("Failed to load dashboard data.")}};return e.jsxs("div",{className:"bg-light",style:{minHeight:"100vh"},children:[e.jsxs("div",{className:"shadow-sm bg-white d-flex align-items-center justify-content-between px-4 py-3",style:{position:"fixed",top:0,left:0,right:0,zIndex:1e3},children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("img",{src:f,alt:"Randolph Hotels & Resorts",style:{maxWidth:"60px",marginRight:"12px"}}),e.jsx("h4",{className:"m-0",style:{color:d.primary},children:"Admin Dashboard"})]}),e.jsx("div",{className:"d-flex align-items-center gap-2",children:e.jsxs("button",{className:"btn text-white d-flex align-items-center gap-2",onClick:()=>s(!0),style:{borderRadius:"20px",backgroundColor:d.primary},children:[e.jsx(D,{size:20})," Menu"]})})]}),e.jsxs("div",{className:"position-fixed top-0 end-0 h-100 shadow-lg",style:{width:b?"220px":"0",background:d.primary,overflowX:"hidden",transition:"width 0.3s ease",zIndex:1100},children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center p-3 border-bottom border-light",children:[e.jsx("h6",{className:"text-white m-0",children:"Navigation"}),e.jsx(E,{size:24,className:"text-white cursor-pointer",onClick:()=>s(!1)})]}),e.jsxs("nav",{className:"nav flex-column p-3",children:[e.jsxs(n,{to:"/dashboard",className:`nav-link py-3 text-center rounded ${o.pathname==="/dashboard"?"bg-white text-dark fw-bold border-start border-3 border-dark":"text-white"}`,onClick:()=>s(!1),children:[e.jsx(C,{size:28,className:"mb-1"}),e.jsx("div",{children:"Overview"})]}),e.jsxs(n,{to:"/dashboard/rooms",className:`nav-link py-3 text-center rounded ${o.pathname==="/dashboard/rooms"?"bg-white text-dark fw-bold border-start border-3 border-dark":"text-white"}`,onClick:()=>s(!1),children:[e.jsx(M,{size:28,className:"mb-1"}),e.jsx("div",{children:"Manage Rooms"})]}),e.jsxs(n,{to:"/dashboard/bookings",className:`nav-link py-3 text-center rounded ${o.pathname==="/dashboard/bookings"?"bg-white text-dark fw-bold border-start border-3 border-dark":"text-white"}`,onClick:()=>s(!1),children:[e.jsx(R,{size:28,className:"mb-1"}),e.jsx("div",{children:"Booking Management"})]}),e.jsxs("button",{onClick:()=>{p("/")},className:"btn mt-4 py-3 rounded text-center fw-bold text-white",style:{backgroundColor:"transparent",border:"none"},children:[e.jsx(O,{size:24,className:"mb-1"}),e.jsx("div",{children:"Log Out"})]})]})]}),e.jsxs("div",{className:"container",style:{paddingTop:"100px"},children:[r&&e.jsx("div",{className:"alert alert-danger text-center",children:r}),e.jsx(N,{context:{rooms:c,bookings:h}})]})]})}export{S as default};
