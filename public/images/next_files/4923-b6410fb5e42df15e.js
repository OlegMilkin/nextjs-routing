(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4923],{87119:(e,t,r)=>{"use strict";r.d(t,{BB:()=>i,QD:()=>a,X8:()=>o,cN:()=>n});let n="/learn",o=e=>`completed-${e}-chapters`,i="completed-dashboard-app-chapters",a="completed-react-foundations-chapters"},6804:(e,t,r)=>{"use strict";r.d(t,{_:()=>g});var n=r(42472),o=r(64612),i=r(72561),a=r(6049),l=r(84468),s=r(14129),d=r(59998),c=r(53056),u=r.n(c);r(56489),r(41109);try{let e=Object.defineProperty({},"passive",{get(){}}),t=()=>{};window.addEventListener("scroll",t,e),window.removeEventListener("scroll",t,e)}catch(e){}let h=(0,o.createContext)(void 0),f={dark:"#000",light:"#999999"};function m(e){let{active:t,children:r,className:c,onAnimationDone:m,onClickOutside:_,height:g="auto",allowOverflow:w,drawer:v=!0,drawerClassname:y="",verticalScroll:C=!0,style:S,enableSkip:b,onScroll:M,container:k,fixed:j,resetScroll:V,"data-testid":A,nested:H}=e,L=H?a._s.NestedRoot:a._s.Root,N=(0,o.useRef)(null);(0,o.useEffect)(()=>{t&&N.current&&(N.current.scrollTop=0)},[t,V]);let O=(0,o.useMemo)(()=>({isInDialog:!0}),[]),R=(0,o.useRef)(null),{metaThemeColor:E}=(0,l.lo)("dashboard"),{resolvedTheme:$}=(0,s.D)(),F=function(e){let t=(0,o.useRef)();return(0,o.useEffect)(()=>{t.current=e}),t.current||!1}(t),I=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(!(0,d.nr)()||F===t)return;let e=f[$??"dark"],r=t?E:e,n=t?e:E,o=performance.now(),i=e=>{let a=Math.min((e-o)/400,1),s=x(a);if(I.current){let e=s;t||(e=1-e),I.current.style.opacity=`${100*e}%`}let d=p(r,n,s);(0,l.a7)({color:d,setBackgroundColor:!0}),a<1&&(R.current=requestAnimationFrame(i))};return R.current&&cancelAnimationFrame(R.current),R.current=requestAnimationFrame(i),()=>{R.current&&cancelAnimationFrame(R.current)}},[t,E,$]),(0,n.jsx)(L,{dismissible:!b,fixed:j,modal:!0,onOpenChange:e=>{e||(_(),window.requestAnimationFrame(()=>document.body.style.pointerEvents="auto"),setTimeout(()=>{m?.()},500))},open:t,children:(0,n.jsxs)(a._s.Portal,{container:k,children:[(0,n.jsx)("div",{className:(0,i.$)(u().overlay,t&&u().open,!(0,d.nr)()&&u().notSafari),onClick:()=>{_()},ref:I,style:{"--animation-duration":"400ms","--curve":"cubic-bezier(0.32, 0.72, 0, 1)"}}),(0,n.jsx)(a._s.Content,{className:(0,i.$)({[String(u().drawer)]:v},y,"geist-dialog",c),"data-testid":A,style:S,children:(0,n.jsx)("div",{className:(0,i.$)({[String(u().allowOverflow)]:v&&w,[String(u().inner)]:v,[String(u().max)]:"max"===g,[String(u().noVerticalScroll)]:!C},"tailwind"),onScroll:()=>{N.current&&M?.(N.current)},ref:N,children:(0,n.jsx)(h.Provider,{value:O,children:r})})}),(0,n.jsx)(a._s.Overlay,{})]})})}let p=(e,t,r)=>{let n=Number.parseInt(e.slice(1,3),16),o=Number.parseInt(e.slice(3,5),16),i=Number.parseInt(e.slice(5,7),16),a=Number.parseInt(t.slice(1,3),16),l=Number.parseInt(t.slice(3,5),16),s=Number.parseInt(t.slice(5,7),16),d=Math.round(n+r*(a-n)),c=Math.round(o+r*(l-o)),u=Math.round(i+r*(s-i));return`#${d.toString(16).padStart(2,"0")}${c.toString(16).padStart(2,"0")}${u.toString(16).padStart(2,"0")}`},_=[0,.021468159999999997,.04267328,.06361631999999999,.08429824,.10472000000000002,.12488255999999998,.14478687999999998,.16443392000000004,.18382464,.20296000000000003,.22184096000000003,.24046847999999998,.25884352,.27696704,.29483999999999994,.3124633599999999,.32983808,.34696512000000007,.3638454400000001,.3804800000000001,.39686976,.41301568,.42891872000000003,.44457983999999995,.45999999999999996,.47518016,.49012127999999994,.50482432,.5192902399999999,.5335199999999999,.5475145599999999,.5612748799999999,.57480192,.58809664,.6011599999999999,.61399296,.6265964799999999,.6389715200000001,.65111904,.6630400000000001,.6747353600000001,.68620608,.6974531200000001,.7084774400000001,.7192800000000001,.72986176,.7402236799999999,.7503667200000002,.7602918399999999,.77,.7794921599999999,.7887692800000001,.79783232,.80668224,.81532,.82374656,.83196288,.8399699199999999,.84776864,.85536,.8627449599999999,.86992448,.87689952,.8836710400000001,.8902400000000001,.89660736,.9027740800000001,.90874112,.91450944,.92008,.92545376,.9306316800000001,.9356147199999999,.9404038399999999,.945,.94940416,.95361728,.9576403200000001,.96147424,.9651200000000001,.9685785600000001,.97185088,.97493792,.9778406399999999,.9805599999999999,.9830969599999999,.9854524800000001,.98762752,.9896230400000001,.9914400000000001,.9930793600000001,.99454208,.99582912,.9969414400000001,.99788,.99864576,.9992396800000001,.99966272,.9999158399999999,1],x=e=>{let t=100*Math.min(Math.max(e,0),1),r=Math.min(Math.floor(t),99),n=_[r];return n+t%1*(_[r+1]-n)},g=({height:e,show:t=!1,onDismiss:r,onAnimationDone:i,children:a,container:l,className:s,verticalScroll:d,fixed:c,resetScroll:u,onScroll:h,nested:f})=>{let p=(0,o.useMemo)(()=>({height:e}),[e]);return(0,n.jsx)(m,{active:t,className:s,container:l,drawer:!0,fixed:c,height:e,nested:f,onAnimationDone:i,onClickOutside:r,onScroll:h,resetScroll:u,style:p,verticalScroll:d,children:a})}},84468:(e,t,r)=>{"use strict";r.d(t,{ON:()=>v,a7:()=>S,lo:()=>C});var n=r(42472),o=r(64612),i=r(14129),a=r(41757),l=r(20997),s=r(85279),d=r(28466),c=(r(28600),r(44369)),u=r.n(c);let h=(0,o.createContext)({rootOrigin:{x:0,y:0},rootBounds:{width:0,height:0},portalRef:null,activeId:null,setActiveId:()=>void 0,hoveredId:null,setHoveredId:()=>void 0,updateActiveContextCard:()=>void 0,skipTransition:!1,rootVisible:!1,distanceFromLast:0,lastOrigin:null});function f(e){let t=(0,o.useRef)(null);return(0,o.useEffect)(()=>{t.current=e}),t.current}function m({children:e}){let[t,r]=(0,o.useState)(!1);(0,o.useEffect)(()=>r(!0),[]);let[i,a]=(0,d.A)(),l=(0,o.useRef)(null),[c,m]=(0,o.useState)(null),[p,_]=(0,o.useState)(!1),[x,g]=(0,o.useState)(null),w=(0,o.useRef)(null);function v(e){w.current=e,_(null!==e)}let y=e=>{(e?.id===w.current||null===e)&&m(e)},C=(0,o.useMemo)(()=>c?{width:c.contentSize.width+2,height:c.contentSize.height+2,x:c.origin.x,y:c.origin.y,offsetX:c.offset.x,offsetY:c.offset.y,side:c.side}:{width:0,height:0,x:0,y:0,offsetX:0,offsetY:0,side:"top"},[c]),S=f(C),b=f(w.current),M=(0,o.useMemo)(()=>{if(!S)return 0;let e=Math.max(C.x,S.x),t=Math.min(C.x+C.width,S.x+S.width),r=Math.max(C.y,S.y),n=Math.min(C.y+C.height,S.y+S.height);if(e<t&&r<n){let o=C.width*C.height;return 0===o?0:(t-e)*(n-r)/o*100}return 0},[C,S]),k=(0,o.useMemo)(()=>Math.sqrt(((S?.x??0)-C.x)**2+((S?.y??0)-C.y)**2),[C.x,C.y,S?.x,S?.y]),j=(0,o.useMemo)(()=>S?{x:S.x-C.x,y:S.y-C.y}:null,[C,S]),[V,A]=(0,o.useState)(!1),H=(0,o.useMemo)(()=>k>150||M>100||null===b||V,[k,V,b,M]);(0,o.useEffect)(()=>{let e=null,t=()=>{e&&window.clearTimeout(e),e=setTimeout(()=>{A(!1)},66),V||A(!0)};return document.addEventListener("scroll",t,!0),()=>{document.removeEventListener("scroll",t,!0)}},[V]);let L=(0,o.useMemo)(()=>({updateActiveContextCard:y,rootOrigin:{...C},rootBounds:a,portalRef:l,setActiveId:v,activeId:w,setHoveredId:g,hoveredId:x,skipTransition:H,rootVisible:p,distanceFromLast:k,lastOrigin:j}),[C,a,x,H,p,k,j]),N=(0,o.useMemo)(()=>"top"===C.side?0:"bottom"===C.side?180:"left"===C.side?270:90,[C]);return(0,n.jsxs)(h.Provider,{value:L,children:[e,t?(0,s.createPortal)((0,n.jsx)("div",{className:u().portal,ref:i,children:(0,n.jsxs)("div",{className:u().contextCardRootVisibility,style:{opacity:p?1:0},children:[(0,n.jsx)("div",{className:u().contextCardTip,"data-skip-transition":H,style:{transform:`translate(${C.x-C.offsetX}px, ${C.y-C.offsetY}px) rotate(${N}deg)`},children:(0,n.jsxs)("svg",{height:"10",viewBox:"0 0 14 10",width:"14",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M7.00009 8.11236L1.46893 0H12.5312L7.00009 8.11236Z",fill:"var(--ds-background-100)"}),(0,n.jsx)("path",{d:"M0.94043 1L7.00009 9.8875L13.0597 1H11.8494L7.00009 8.11236L2.15075 1H0.94043Z",fill:"var(--ds-gray-400)"})]})}),(0,n.jsx)("div",{className:u().contextCardRoot,"data-skip-transition":H,style:{transform:`translate(${C.x}px,${C.y}px)`,width:C.width,height:C.height},children:(0,n.jsx)("div",{ref:l})})]})}),document.body):null]})}var p=r(73509),_=r.n(p),x=r(95562),g=r.n(x);let w={light:"light-theme",dark:"dark-theme"};function v({children:e,storageKey:t="geist-theme",setBackgroundColor:r=!0,...a}){return _(),g(),(0,n.jsxs)(i.N,{attribute:"class",disableTransitionOnChange:!0,storageKey:t,value:w,...a,children:[(0,n.jsx)(o.Suspense,{children:(0,n.jsx)(b,{setBackgroundColor:r})}),(0,n.jsx)(l.B,{children:(0,n.jsx)(m,{children:e})})]})}let y={dashboard:{light:"#FFFFFF",dark:"#0A0A0A"},marketing:{light:"#FAFAFA",dark:"#000000"}},C=e=>{let{resolvedTheme:t}=(0,i.D)(),r=(0,a.useSelectedLayoutSegments)(),n=y[e||M(r)];return{metaThemeColor:"dark"===t?n.dark:n.light}},S=({color:e,setBackgroundColor:t})=>{let r=Array.from(document.querySelectorAll('meta[name="theme-color"]'));if(0===r.length){let e=document.createElement("meta");e.setAttribute("name","theme-color"),document.head.appendChild(e),r.push(e)}r.forEach(t=>{t.setAttribute("content",e)}),t&&(document.documentElement.style.backgroundColor=e)};function b({setBackgroundColor:e=!0}){let{metaThemeColor:t}=C();return(0,o.useEffect)(()=>{S({color:t,setBackgroundColor:e})},[t,e]),null}let M=e=>{if(null===e||0===e.length)return"marketing";for(let t of e){if(t.includes("dashboard"))return"dashboard";if(t.includes("auth")){if("signup"===e[1])return"marketing";return"dashboard"}if(t.includes("(team)"))return"dashboard"}return"marketing"}},43046:(e,t,r)=>{"use strict";r.d(t,{G:()=>n});let n=(0,r(75340).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M0 1H0.75H5C6.2267 1 7.31583 1.58901 8 2.49963C8.68417 1.58901 9.7733 1 11 1H15.25H16V1.75V13V13.75H15.25H10.7426C10.1459 13.75 9.57361 13.9871 9.15165 14.409L8.53033 15.0303H7.46967L6.84835 14.409C6.42639 13.9871 5.8541 13.75 5.25736 13.75H0.75H0V13V1.75V1ZM7.25 4.75C7.25 3.50736 6.24264 2.5 5 2.5H1.5V12.25H5.25736C5.96786 12.25 6.65758 12.4516 7.25 12.8232V4.75ZM8.75 12.8232V4.75C8.75 3.50736 9.75736 2.5 11 2.5H14.5V12.25H10.7426C10.0321 12.25 9.34242 12.4516 8.75 12.8232Z" fill="currentColor"/>')},67233:(e,t,r)=>{"use strict";r.d(t,{R:()=>o});var n=r(75340);let o=(0,n.G)(`<g clip-path="url(#clip0_53_108)">
  <circle cx="8" cy="8" r="7.375" fill="black" stroke="var(--ds-gray-1000)" strokeWidth="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.63 11V5" stroke="url(#paint0_linear_53_108${n.u})" strokeWidth="1.25" stroke-miterlimit="1.41421"/>
  <path fill-rule="evenodd" cliprule="evenodd" d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z" fill="url(#paint1_linear_53_108${n.u})"/>
  </g>
  <defs>
  <linearGradient id="paint0_linear_53_108${n.u}" x1="11.13" y1="5" x2="11.13" y2="11" gradientUnits="userSpaceOnUse">
  <stop stop-color="white"/>
  <stop offset="0.609375" stop-color="white" stop-opacity="0.57"/>
  <stop offset="0.796875" stop-color="white" stop-opacity="0"/>
  <stop offset="1" stop-color="white" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="paint1_linear_53_108${n.u}" x1="9.9375" y1="9.0625" x2="13.5574" y2="13.3992" gradientUnits="userSpaceOnUse">
  <stop stop-color="white"/>
  <stop offset="1" stop-color="white" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="clip0_53_108">
  <rect width="16" height="16" fill="red"/>
  </clipPath>
  </defs>`)},59998:(e,t,r)=>{"use strict";function n(){return function(e){return null!=window.navigator?e.test(window.navigator.platform):void 0}(/^Mac/)}function o(){return navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}r.d(t,{cX:()=>n,nr:()=>o})},44369:e=>{e.exports={portal:"context-card_portal__7uIMS",contextCardTip:"context-card_contextCardTip__JXUxK",contextCardRoot:"context-card_contextCardRoot__jBE_M",contextCardRootContent:"context-card_contextCardRootContent__MNlHW",contextCardContent:"context-card_contextCardContent__0vsq8",contextCardContentVisibility:"context-card_contextCardContentVisibility__OmjsA",contextCardTrigger:"context-card_contextCardTrigger__Pejgm",contextCardRootVisibility:"context-card_contextCardRootVisibility__WD8Ja"}},41109:e=>{e.exports={drawer:"dialog_drawer__zoHbY",noVerticalScroll:"dialog_noVerticalScroll__i73ML",allowOverflow:"dialog_allowOverflow__fDqDx",modalOpen:"dialog_modalOpen__pzqRA",inner:"dialog_inner__XIlj_",max:"dialog_max__C0YX9"}},53056:e=>{e.exports={drawer:"new-dialog_drawer__ykt7Q",noVerticalScroll:"new-dialog_noVerticalScroll__0Be1P",allowOverflow:"new-dialog_allowOverflow__XLQcK",inner:"new-dialog_inner__FYIY1",max:"new-dialog_max__P89aL",overlay:"new-dialog_overlay___0a9q",notSafari:"new-dialog_notSafari__UQu2r",fadeOut:"new-dialog_fadeOut__EAwu1",open:"new-dialog_open__DTLMi",fadeIn:"new-dialog_fadeIn__JDemh"}}}]);