(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9089:function(e,t,s){Promise.resolve().then(s.bind(s,3746))},3746:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var l=s(3827),a=s(4090);function r(e){let{search:t}=e,[s,r]=(0,a.useState)("");return(0,l.jsx)("div",{className:"flex flex-wrap p-5",children:(0,l.jsx)("form",{className:"w-screen flex items-center",onSubmit:e=>{e.preventDefault(),t(s)},children:(0,l.jsx)("input",{placeholder:"Search...",className:"input flex-grow box-border p-3 pl-12 border-2 rounded-md border-sky-500 focus:bg-slate-200",value:s,onChange:e=>{r(e.target.value)}})})})}var o=s(7908);let i=async e=>(await o.Z.get("https://api.unsplash.com/search/photos",{headers:{Authorization:"Client-ID vPTBYVsj7_FClsWA3Gu9_bqm8XiHbZ1oB9qn_ADtjqQ"},params:{query:e}})).data.results;var n=s(703),c=function(e){let{image:t}=e,[s,r]=(0,a.useState)(!1),[o,i]=(0,a.useState)(!1),c=()=>{console.log("closeModal'a tıklandı."),r(!1)};return(0,a.useEffect)(()=>{console.log("Modal Durumu Değişti:",s);let e=e=>{s&&(!e.target.closest(".modal")||"myButton"===e.target.id)&&c()};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[s]),(0,l.jsxs)("div",{className:"m-3 rounded-xl shadow-lg cursor-pointer shadow-black-100 hover:shadow-indigo-500/100",onClick:()=>{r(!0)},children:[(0,l.jsx)(n.default,{className:"h-72 w-full object-cover rounded-t-xl max-sm:h-36",src:t.urls.small,alt:t.alt_description,width:t.width,height:t.height}),(0,l.jsx)("p",{className:"text-xs p-5 text-right italic",children:t.alt_description}),s&&(0,l.jsx)("div",{className:"background fixed bg-black w-full h-full top-0 left-0 bg-opacity-85",children:(0,l.jsx)("div",{className:"modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl shadow-gray-600",children:(0,l.jsxs)("div",{className:" z-50 bg-white p-2 rounded shadow-lg overflow-hidden",children:[(0,l.jsx)("button",{id:"myButton",className:"text-white bg-red-500 pl-3 pr-3 pt-1 pb-1 rounded m-2 right-2 absolute z-50 hover:bg-red-600",children:"X"}),(0,l.jsx)(n.default,{className:"w-full max-h-[600px] object-cover",src:o?t.urls.full:t.urls.small,alt:t.alt_description,width:500,height:500,onLoad:()=>{i(!0)}}),(0,l.jsx)("p",{className:"text-xs text-right italic mt-4 absolute text-white bottom-4 right-5",children:t.alt_description})]})})})]})};function d(e){let{imagesPlaceHolder:t}=e;return(0,l.jsx)("div",{className:"grid grid-cols-4 max-sm:grid-cols-2",children:t.map((e,t)=>(0,l.jsx)(c,{image:e},t))})}function u(){let[e,t]=(0,a.useState)([]),s=async s=>{t(await i(s)),console.log(e)};return(0,l.jsxs)("div",{className:"App",children:[(0,l.jsx)(r,{search:s}),(0,l.jsx)(d,{imagesPlaceHolder:e})]})}}},function(e){e.O(0,[127,971,69,744],function(){return e(e.s=9089)}),_N_E=e.O()}]);